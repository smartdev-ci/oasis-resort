import { useState, useEffect } from 'react';
import { Menu, Globe, ChevronDown, Sparkles, Map } from 'lucide-react';
import { Logo } from './Logo';
import { useI18n } from '../../i18n';

interface HeaderProps {
  onOpenChat?: () => void;
  onNavigate: (page: string) => void;
}

export function Header({ onOpenChat, onNavigate }: HeaderProps) {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDiscoverOpen(false);
      setLangOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent closing when clicking inside dropdown
  const handleLangClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLangOpen(!langOpen);
    setDiscoverOpen(false);
  };

  const navItems = [
    { key: 'nav_tourist_sites', page: 'discover', icon: Map },
    { key: 'nav_experiences', page: 'experiences' },
    { key: 'nav_help', page: 'help' },
  ] as const;

  const textBase = scrolled ? 'text-primary-500' : 'text-white/90';
  const hoverBase = scrolled ? 'hover:bg-primary-50' : 'hover:bg-white/10';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-soft py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <button onClick={() => onNavigate('home')} className="ring-focus rounded-lg flex-shrink-0">
          <Logo size="md" variant={scrolled ? 'default' : 'light'} />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Discover Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => { setDiscoverOpen(true); setLangOpen(false); }}
            onMouseLeave={() => setDiscoverOpen(false)}
          >
            <button
              onClick={() => onNavigate('discover')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ring-focus ${textBase} ${hoverBase}`}
            >
              {t('nav_discover')}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${discoverOpen ? 'rotate-180' : ''}`} />
            </button>
            {discoverOpen && (
              <div className="absolute left-0 top-full mt-1 w-56 bg-white rounded-2xl shadow-soft-lg border border-primary-50 overflow-hidden animate-fade-in-down z-50">
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('discover'); setDiscoverOpen(false); }}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium text-primary-500 hover:bg-primary-50 flex items-center gap-2"
                >
                  <Map className="w-4 h-4 text-primary-400" />
                  {t('nav_hotels_residences')}
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate('restaurants'); setDiscoverOpen(false); }}
                  className="w-full text-left px-4 py-2.5 text-sm font-medium text-primary-500 hover:bg-primary-50 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  {t('nav_restaurants')}
                </button>
              </div>
            )}
          </div>
          
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.page)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ring-focus ${textBase} ${hoverBase}`}
            >
              {'icon' in item && item.icon ? <item.icon className="w-3.5 h-3.5" /> : null}
              {t(item.key)}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          {/* Ask AI */}
          <button
            onClick={onOpenChat}
            className={`hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ring-focus ${scrolled ? 'bg-primary-50 text-primary-500 hover:bg-primary-100' : 'glass-emerald text-white hover:bg-white/20'}`}
          >
            <Sparkles className="w-4 h-4" />
            {t('nav_ask_ai')}
          </button>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={handleLangClick}
              className={`hidden sm:flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ring-focus ${textBase} ${hoverBase}`}
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-semibold">{locale}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-2xl shadow-soft-lg border border-primary-50 overflow-hidden animate-fade-in-down z-50">
                {(['fr', 'en'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={(e) => { e.stopPropagation(); setLocale(l); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${locale === l ? 'bg-primary-50 text-primary-600' : 'text-primary-500 hover:bg-primary-50'}`}
                  >
                    {l === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sign in */}
          <button
            onClick={() => onNavigate('signin')}
            className={`hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all ring-focus shadow-soft ${scrolled ? 'bg-primary-500 hover:bg-primary-400 text-white' : 'bg-gold hover:bg-gold-light text-primary-600'}`}
          >
            {t('nav_signin')}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center ${scrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/10'}`}
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 glass rounded-2xl shadow-soft-lg p-3 animate-fade-in-up">
          {/* Discover for mobile - navigates directly to discover page */}
          <button
            onClick={() => { onNavigate('discover'); setMobileMenuOpen(false); }}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-primary-500 hover:bg-primary-50 flex items-center gap-2"
          >
            <Map className="w-4 h-4 text-primary-400" />
            {t('nav_discover')}
          </button>
          <div className="h-px bg-primary-100 my-2" />
          {navItems.map((item) => {
            const Icon = 'icon' in item && item.icon ? item.icon : null;
            return (
              <button
                key={item.key}
                onClick={() => { onNavigate(item.page); setMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-primary-500 hover:bg-primary-50 flex items-center gap-2"
              >
                {Icon && <Icon className="w-4 h-4 text-primary-400" />}
                {t(item.key)}
              </button>
            );
          })}
          <div className="h-px bg-primary-100 my-2" />
          {/* Mobile language switcher */}
          <div className="flex gap-2 px-2 mb-2">
            {(['fr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => { setLocale(l); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 rounded-xl text-sm font-medium transition-colors ${locale === l ? 'bg-primary-500 text-white' : 'bg-primary-50 text-primary-500'}`}
              >
                {l === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}
              </button>
            ))}
          </div>
          <button
            onClick={() => { onNavigate('signin'); setMobileMenuOpen(false); }}
            className="w-full py-3 rounded-xl bg-primary-500 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary-400 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            {t('nav_signin')}
          </button>
        </div>
      )}
    </header>
  );
}
