import { useState } from 'react';
import { Sparkles, Mic, ImagePlus, MapPin, ArrowRight, Mic2 } from 'lucide-react';
import { useI18n } from '../i18n';

interface HeroProps {
  onSearch: (query: string) => void;
  onSuggestion: (prompt: string) => void;
}

const suggestionEmojis = ['', '', '', '', ''];

export function Hero({ onSearch, onSuggestion }: HeroProps) {
  const { t } = useI18n();
  const [query, setQuery] = useState('');

  const suggestions = [
    { label: t('suggestion_beach'), prompt: t('suggestion_beach_prompt') },
    { label: t('suggestion_business'), prompt: t('suggestion_business_prompt') },
    { label: t('suggestion_romantic'), prompt: t('suggestion_romantic_prompt') },
    { label: t('suggestion_family'), prompt: t('suggestion_family_prompt') },
    { label: t('suggestion_last_minute'), prompt: t('suggestion_last_minute_prompt') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  const handleSuggestion = (prompt: string) => {
    setQuery(prompt);
    onSuggestion(prompt);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="African travel experience"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-900/40 to-primary-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
      </div>

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
        {/* AI badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-primary-100 text-sm font-medium mb-6 animate-fade-in-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-300" />
          </span>
          {t('hero_ai_badge')}
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white text-balance mb-4 animate-fade-in-up animate-delay-100">
          {t('hero_title')}
          <br />
          <span className="bg-gradient-to-r from-gold-light via-primary-200 to-primary-300 bg-clip-text text-transparent">
            {t('hero_title_highlight')}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto text-balance animate-fade-in-up animate-delay-200">
          {t('hero_subtitle')}
        </p>

        {/* AI Search Box */}
        <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto animate-fade-in-up animate-delay-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400/40 via-gold/30 to-primary-300/40 rounded-3xl blur-md opacity-60" />
          <div className="relative glass rounded-3xl p-2 shadow-soft-2xl">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 ml-2 rounded-full bg-primary-500/10 text-primary-500 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('hero_placeholder')}
                className="flex-1 bg-transparent text-primary-600 placeholder:text-primary-300 text-sm sm:text-base px-2 py-3 ring-focus rounded-xl focus:outline-none min-w-0"
              />
              <button type="button" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-primary-400 hover:bg-primary-50 transition-colors ring-focus" title="Upload image">
                <ImagePlus className="w-5 h-5" />
              </button>
              <button type="button" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full text-primary-400 hover:bg-primary-50 transition-colors ring-focus" title="Share location">
                <MapPin className="w-5 h-5" />
              </button>
              <button type="button" className="flex w-10 h-10 items-center justify-center rounded-full text-primary-400 hover:bg-primary-50 transition-colors ring-focus" title="Voice search">
                <Mic className="w-5 h-5" />
              </button>
              <button
                type="submit"
                className="flex items-center justify-center w-11 h-11 sm:w-auto sm:h-11 sm:px-5 rounded-2xl bg-primary-500 hover:bg-primary-400 text-white font-medium text-sm transition-all active:scale-95 shadow-soft hover:shadow-soft-lg ring-focus gap-1.5 flex-shrink-0"
              >
                <span className="hidden sm:inline">{t('hero_search')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Quick suggestion chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 animate-fade-in-up animate-delay-500">
          {suggestions.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => handleSuggestion(s.prompt)}
              className="inline-flex items-center gap-1.5 px-4 py-2 glass rounded-full text-white/90 hover:text-white text-sm font-medium hover:bg-white/25 transition-all active:scale-95 ring-focus"
            >
              <span>{suggestionEmojis[idx]}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-fade-in animate-delay-500">
          {[
            { value: '8+', label: t('hero_cities') },
            { value: '12K+', label: t('hero_properties') },
            { value: '4.9★', label: t('hero_accuracy') },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-white/60 animate-bounce-subtle">
        <span className="text-xs">{t('hero_scroll')}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Voice indicator */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 glass-dark rounded-full px-4 py-2 text-white/80 text-sm animate-fade-in">
        <Mic2 className="w-4 h-4 text-primary-300 animate-pulse-soft" />
        <span>{t('hero_try_voice')}</span>
      </div>
    </section>
  );
}
