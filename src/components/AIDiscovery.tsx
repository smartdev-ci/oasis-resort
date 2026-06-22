import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { type Property } from '../data/properties';
import { PropertyCard } from './PropertyCard';
import { useI18n } from '../i18n';

interface AIDiscoveryProps {
  properties: Property[];
  onBook: (property: Property) => void;
  onView: (property: Property) => void;
  onAskAI: (property: Property) => void;
}

export function AIDiscovery({ properties, onBook, onView, onAskAI }: AIDiscoveryProps) {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/60 text-primary-500 text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary-400" />
              {t('discovery_badge')}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-600 mb-3 text-balance">
              {t('discovery_title')}
            </h2>
            <p className="text-primary-400 text-lg max-w-xl">{t('discovery_subtitle')}</p>
          </div>
          <button className="hidden md:inline-flex items-center gap-1.5 text-primary-500 font-medium hover:text-primary-400 transition-colors group">
            {t('discovery_view_all')}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* AI Match Banner */}
        <div className="glass rounded-3xl p-5 mb-8 flex items-center gap-4 shadow-soft">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center flex-shrink-0 shadow-soft">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-primary-500 leading-relaxed">
              <span className="font-semibold text-primary-600">{t('discovery_ai_insight')}</span>{' '}
              {t('discovery_ai_text')}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-500 text-white text-xs font-bold">
            <Sparkles className="w-3 h-3" />
            94% {t('discovery_match')}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, idx) => (
            <div key={property.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <PropertyCard
                property={property}
                onBook={onBook}
                onView={onView}
                onAskAI={onAskAI}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <button className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-primary-50 text-primary-500 font-medium hover:bg-primary-100 transition-colors">
            {t('discovery_view_all')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
