import { Logo } from './ui/Logo';
import { Shield, Globe, MessageCircle } from 'lucide-react';
import { useI18n } from '../i18n';

export function Footer() {
  const { t, ta } = useI18n();

  return (
    <footer className="bg-primary-600 text-white pt-16 pb-32 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" variant="light" />
            <p className="text-white/70 text-sm mt-4 max-w-xs">{t('footer_tagline')}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[t('concierge_web'), t('concierge_app'), t('concierge_whatsapp')].map((platform) => (
                <span key={platform} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass-emerald text-2xs font-medium">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {[
            { title: t('footer_discover'), links: ta('footer_discover_links') },
            { title: t('footer_company'), links: ta('footer_company_links') },
            { title: t('footer_support'), links: ta('footer_support_links') },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Shield className="w-4 h-4 text-primary-300" />
            {t('footer_encrypted')}
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Globe className="w-4 h-4 text-primary-300" />
            {t('footer_countries')}
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MessageCircle className="w-4 h-4 text-primary-300" />
            {t('footer_concierge')}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs">{t('footer_rights')}</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{t('footer_privacy')}</a>
            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{t('footer_terms')}</a>
            <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{t('footer_cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
