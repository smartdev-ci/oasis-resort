import { Sparkles, Shield, Smartphone, Zap, MessageCircle, Globe } from 'lucide-react';
import { useI18n } from '../i18n';

export function FeatureSection() {
  const { t } = useI18n();

  const features = [
    { icon: Sparkles, title: t('feat_f1_title'), description: t('feat_f1_desc'), color: 'from-primary-500 to-primary-400' },
    { icon: Smartphone, title: t('feat_f2_title'), description: t('feat_f2_desc'), color: 'from-gold to-gold-light' },
    { icon: Shield, title: t('feat_f3_title'), description: t('feat_f3_desc'), color: 'from-primary-400 to-primary-300' },
    { icon: Zap, title: t('feat_f4_title'), description: t('feat_f4_desc'), color: 'from-primary-300 to-primary-200' },
    { icon: MessageCircle, title: t('feat_f5_title'), description: t('feat_f5_desc'), color: 'from-gold-light to-gold' },
    { icon: Globe, title: t('feat_f6_title'), description: t('feat_f6_desc'), color: 'from-primary-500 to-primary-300' },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/60 text-primary-500 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary-400" />
            {t('feat_badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-600 mb-4 text-balance">
            {t('feat_title')}
          </h2>
          <p className="text-primary-400 text-lg">{t('feat_subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-cream rounded-3xl p-6 hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary-600 mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
