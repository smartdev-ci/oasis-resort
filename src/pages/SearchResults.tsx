import { useState, useMemo } from 'react';
import { Sparkles, ArrowLeft, SlidersHorizontal, Map, List, Wand2, X } from 'lucide-react';
import { type Property } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { useI18n } from '../i18n';

interface SearchResultsProps {
  properties: Property[];
  query: string;
  onBack: () => void;
  onBook: (property: Property) => void;
  onView: (property: Property) => void;
  onCompare: (property: Property) => void;
  onAskAI: (property: Property) => void;
}

// Stable filter IDs — independent of locale
type FilterId =
  | 'all'
  | 'cheaper'
  | '5star'
  | 'breakfast'
  | 'family'
  | 'airport'
  | 'mobile'
  | 'last';

export function SearchResults({
  properties,
  query,
  onBack,
  onBook,
  onView,
  onCompare,
  onAskAI,
}: SearchResultsProps) {
  const { t } = useI18n();
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [sortBy] = useState('relevance');
  const [showMap, setShowMap] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filterChips: { id: FilterId; label: string }[] = [
    { id: 'all',       label: t('search_filter_all') },
    { id: 'cheaper',   label: t('search_filter_cheaper') },
    { id: '5star',     label: t('search_filter_5star') },
    { id: 'breakfast', label: t('search_filter_breakfast') },
    { id: 'family',    label: t('search_filter_family') },
    { id: 'airport',   label: t('search_filter_airport') },
    { id: 'mobile',    label: t('search_filter_mobile') },
    { id: 'last',      label: t('search_filter_last') },
  ];

  const filtered = useMemo(() => {
    let result = [...properties];
    if (activeFilter === '5star')     result = result.filter((p) => p.rating >= 4.7);
    else if (activeFilter === 'family')    result = result.filter((p) => p.bestFor.some((b) => b.toLowerCase().includes('famil')));
    else if (activeFilter === 'mobile')    result = result.filter((p) => p.mobileMoneyAccepted);
    else if (activeFilter === 'cheaper')   result = result.filter((p) => p.pricePerNight <= 70000);

    if (sortBy === 'price-asc')  result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    else result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [properties, activeFilter, sortBy]);

  const reqTags = [
    t('search_ai_reqs_tag1'),
    t('search_ai_reqs_tag2'),
    t('search_ai_reqs_tag3'),
    t('search_ai_reqs_tag4'),
  ];

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Sticky search bar */}
      <div className="sticky top-16 z-30 glass border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors ring-focus"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 flex items-center gap-2 bg-white rounded-full px-4 py-2.5 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <span className="text-sm text-primary-500 truncate">
                {query || t('search_query_default')}
              </span>
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className={`hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ring-focus ${showMap ? 'bg-primary-500 text-white' : 'bg-white text-primary-500 hover:bg-primary-50'}`}
            >
              {showMap ? <List className="w-4 h-4" /> : <Map className="w-4 h-4" />}
              {showMap ? t('search_list') : t('search_map')}
            </button>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-primary-500 bg-white hover:bg-primary-50 transition-colors ring-focus"
            >
              <SlidersHorizontal className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* AI filter chips */}
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary-400 flex-shrink-0 px-2">
              <Wand2 className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">{t('search_filters')}</span>
            </div>
            {filterChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => setActiveFilter(chip.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ring-focus ${activeFilter === chip.id ? 'bg-primary-500 text-white shadow-soft' : 'bg-white text-primary-500 hover:bg-primary-50'}`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI summary banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="glass rounded-3xl p-4 sm:p-5 flex items-start gap-4 shadow-soft">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center flex-shrink-0 shadow-soft">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm sm:text-base text-primary-600 font-medium leading-relaxed">
              <span className="font-semibold">
                {t('search_ai_found')} {filtered.length} {t('search_ai_options')}
              </span>{' '}
              {t('search_ai_reqs')}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {reqTags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-100/60 text-primary-500 text-2xs font-medium">
                  <Sparkles className="w-2.5 h-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className={`grid ${showMap ? 'lg:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {filtered.map((property, idx) => (
            <div key={property.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.05}s` }}>
              <PropertyCard
                property={property}
                onBook={onBook}
                onView={onView}
                onCompare={onCompare}
                onAskAI={onAskAI}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-3xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">{t('search_no_results')}</h3>
            <p className="text-primary-400">{t('search_no_results_sub')}</p>
          </div>
        )}
      </div>

      {/* Mobile filters sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-3xl p-5 animate-slide-up max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg text-primary-600">{t('search_mobile_filters_title')}</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="w-9 h-9 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-50">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-2">
              {filterChips.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => { setActiveFilter(chip.id); setMobileFiltersOpen(false); }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeFilter === chip.id ? 'bg-primary-500 text-white' : 'bg-primary-50 text-primary-500'}`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
