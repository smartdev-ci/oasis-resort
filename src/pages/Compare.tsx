import { ArrowLeft, X, Sparkles, Star, MapPin, Smartphone, Trophy } from 'lucide-react';
import { type Property } from '../data/properties';
import { useI18n } from '../i18n';

interface CompareProps {
  properties: Property[];
  onBack: () => void;
  onRemove: (id: string) => void;
  onBook: (property: Property) => void;
}

export function Compare({ properties, onBack, onRemove, onBook }: CompareProps) {
  const { t } = useI18n();

  // Stable comparison definitions — getValue returns winner regardless of locale
  const comparisons = [
    {
      label: t('compare_cheapest'),
      getValue: (props: Property[]) => {
        const min = Math.min(...props.map((p) => p.pricePerNight));
        return props.find((p) => p.pricePerNight === min);
      },
    },
    {
      label: t('compare_highest_rated'),
      getValue: (props: Property[]) => {
        const max = Math.max(...props.map((p) => p.rating));
        return props.find((p) => p.rating === max);
      },
    },
    {
      label: t('compare_best_business'),
      getValue: (props: Property[]) => props.find((p) => p.bestFor.some((b) => b.toLowerCase().includes('business') || b.toLowerCase().includes('affaires'))),
    },
    {
      label: t('compare_best_family'),
      getValue: (props: Property[]) => props.find((p) => p.bestFor.some((b) => b.toLowerCase().includes('family') || b.toLowerCase().includes('famil'))),
    },
    {
      label: t('compare_best_luxury'),
      getValue: (props: Property[]) => props.find((p) => p.pricePerNight > 100000),
    },
  ];

  if (properties.length < 2) {
    return (
      <div className="min-h-screen bg-cream pt-24 flex items-center justify-center p-4">
        <div className="text-center max-w-sm">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 mb-6">
            <ArrowLeft className="w-4.5 h-4.5" /> {t('compare_back_link')}
          </button>
          <div className="w-16 h-16 rounded-3xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-primary-400" />
          </div>
          <h2 className="text-xl font-bold text-primary-600 mb-2">{t('compare_add_properties')}</h2>
          <p className="text-primary-400 text-sm">{t('compare_add_sub')}</p>
        </div>
      </div>
    );
  }

  const validComparisons = comparisons.filter((c) => c.getValue(properties));

  return (
    <div className="min-h-screen bg-cream pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <button onClick={onBack} className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors mb-6 ring-focus rounded-full px-2 py-1">
          <ArrowLeft className="w-4.5 h-4.5" />
          <span className="text-sm font-medium">{t('compare_back_link')}</span>
        </button>

        {/* AI Banner */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-3xl p-6 mb-8 shadow-soft-lg text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl glass-emerald flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold mb-2">{t('compare_ai_title')}</h2>
              <p className="text-white/85 leading-relaxed">
                {t('compare_analyzed')} {properties.length} {t('compare_properties_across')}{' '}
                {new Set(properties.map((p) => `${p.city},${p.country}`)).size} {t('compare_locations')}{' '}
                {t('compare_recommendation')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
            {validComparisons.slice(0, 3).map((c) => {
              const winner = c.getValue(properties);
              if (!winner) return null;
              return (
                <div key={c.label} className="glass-emerald rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Trophy className="w-3.5 h-3.5 text-gold-light" />
                    <span className="text-sm font-semibold">{c.label}</span>
                  </div>
                  <div className="text-sm font-medium truncate">{winner.name}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
          <div className="min-w-[600px]">
            {/* Images */}
            <div className="grid gap-4" style={{ gridTemplateColumns: `120px repeat(${properties.length}, 1fr)` }}>
              <div />
              {properties.map((p) => (
                <div key={p.id} className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                    <img src={p.images[0].url} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <button
                    onClick={() => onRemove(p.id)}
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-soft flex items-center justify-center text-primary-400 hover:text-warning transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Names */}
            <div className="grid gap-4 mt-4" style={{ gridTemplateColumns: `120px repeat(${properties.length}, 1fr)` }}>
              <div />
              {properties.map((p) => (
                <div key={p.id}>
                  <h3 className="font-bold text-primary-600 text-sm leading-tight mb-1">{p.name}</h3>
                  <div className="flex items-center gap-1 text-2xs text-primary-400">
                    <MapPin className="w-3 h-3" />{p.city}
                  </div>
                </div>
              ))}
            </div>

            {/* AI badges */}
            <CompareRow label={t('compare_row_ai_badge')} properties={properties}>
              {(p) => (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 text-gold text-2xs font-medium border border-gold/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  {p.aiBadge}
                </div>
              )}
            </CompareRow>

            <CompareRow label={t('compare_row_rating')} properties={properties}>
              {(p) => (
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <span className="text-sm font-bold text-primary-500">{p.rating.toFixed(1)}</span>
                  <span className="text-xs text-primary-300">({p.reviewCount})</span>
                </div>
              )}
            </CompareRow>

            <CompareRow label={t('compare_row_price')} properties={properties}>
              {(p) => (
                <div>
                  <span className="text-base font-bold text-primary-600">{new Intl.NumberFormat('fr-FR').format(p.pricePerNight)}</span>
                  <span className="text-sm text-primary-300"> FCFA</span>
                  <span className="text-2xs text-primary-300 block">{t('compare_row_per_night')}</span>
                </div>
              )}
            </CompareRow>

            <CompareRow label={t('compare_row_location')} properties={properties}>
              {(p) => <div className="text-xs text-primary-400 leading-relaxed">{p.distanceFromLandmark}</div>}
            </CompareRow>

            <CompareRow label={t('compare_row_type')} properties={properties}>
              {(p) => <span className="inline-flex px-2 py-0.5 rounded-full bg-primary-50 text-primary-500 text-2xs font-medium">{p.type}</span>}
            </CompareRow>

            <CompareRow label={t('compare_row_mobile')} properties={properties}>
              {(p) => p.mobileMoneyAccepted
                ? <span className="inline-flex items-center gap-1 text-2xs font-medium text-primary-400"><Smartphone className="w-3.5 h-3.5" /> {t('compare_row_accepted')}</span>
                : <span className="text-2xs text-primary-300">{t('compare_row_not_available')}</span>
              }
            </CompareRow>

            <CompareRow label={t('compare_row_ai_summary')} properties={properties}>
              {(p) => (
                <div className="p-3 rounded-xl bg-primary-50/60 text-xs text-primary-500 leading-relaxed">
                  {p.aiSummary.substring(0, 100)}...
                </div>
              )}
            </CompareRow>

            <CompareRow label={t('compare_row_sentiment')} properties={properties}>
              {(p) => (
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-primary-50 overflow-hidden min-w-[60px]">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400" style={{ width: `${p.reviewAnalysis.overallSentiment}%` }} />
                  </div>
                  <span className="text-sm font-bold text-primary-500">{p.reviewAnalysis.overallSentiment}%</span>
                </div>
              )}
            </CompareRow>

            <CompareRow label={t('compare_row_amenities')} properties={properties}>
              {(p) => <div className="text-xs text-primary-400">{p.amenities.length} {t('compare_row_amenities_count')}</div>}
            </CompareRow>

            {/* Book row */}
            <div className="grid gap-4 mt-4 pt-4 border-t border-primary-100" style={{ gridTemplateColumns: `120px repeat(${properties.length}, 1fr)` }}>
              <div />
              {properties.map((p) => (
                <button
                  key={p.id}
                  onClick={() => onBook(p)}
                  className="py-2.5 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium transition-colors shadow-soft ring-focus"
                >
                  {t('compare_book')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompareRow({
  label,
  properties,
  children,
}: {
  label: string;
  properties: Property[];
  children: (p: Property) => React.ReactNode;
}) {
  return (
    <div className="grid gap-4 mt-4 pt-4 border-t border-primary-100" style={{ gridTemplateColumns: `120px repeat(${properties.length}, 1fr)` }}>
      <div className="flex items-center text-2xs font-semibold text-primary-400">{label}</div>
      {properties.map((p) => <div key={p.id}>{children(p)}</div>)}
    </div>
  );
}
