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
    { id: 'last',      label: t('search_filter_last') },
  ];

  const filtered = useMemo(() => {
    let result = [...properties];
    if (activeFilter === '5star')     result = result.filter((p) => p.rating >= 4.7);
    else if (activeFilter === 'family')    result = result.filter((p) => p.bestFor.some((b) => b.toLowerCase().includes('famil')));
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
    <div className="min-h-screen bg-cream pt-16 sm:pt-20 md:pt-24">
      {/* Sticky search bar - Responsive */}
      <div className="sticky top-16 z-30 glass border-b border-white/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2.5 md:py-3">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={onBack}
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors ring-focus"
              aria-label="Retour"
            >
              <ArrowLeft className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5" />
            </button>
            <div className="flex-1 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 bg-white rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 shadow-soft min-w-0">
              <Sparkles className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-primary-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base text-primary-500 truncate">
                {query || t('search_query_default')}
              </span>
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className={`hidden lg:flex items-center gap-1.5 px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors ring-focus ${showMap ? 'bg-primary-500 text-white' : 'bg-white text-primary-500 hover:bg-primary-50'}`}
            >
              {showMap ? <List className="w-4 h-4 md:w-4.5 md:h-4.5" /> : <Map className="w-4 h-4 md:w-4.5 md:h-4.5" />}
              <span className="hidden xl:inline">{showMap ? t('search_list') : t('search_map')}</span>
            </button>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex-shrink-0 rounded-full flex items-center justify-center text-primary-500 bg-white hover:bg-primary-50 transition-colors ring-focus"
              aria-label="Filtres"
            >
              <SlidersHorizontal className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
            </button>
          </div>

          {/* AI filter chips - Responsive */}
          <div className="mt-2.5 sm:mt-3 md:mt-4 flex items-center gap-1.5 sm:gap-2 md:gap-2.5 overflow-x-auto pb-1 scrollbar-hide -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
            <div className="inline-flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium text-primary-400 flex-shrink-0 pr-1 sm:pr-2 md:pr-3">
              <Wand2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-gold" />
              <span className="hidden sm:inline">{t('search_filters')}</span>
            </div>
            {filterChips.map((chip) => (
              <button
                key={chip.id}
                onClick={() => setActiveFilter(chip.id)}
                className={`flex-shrink-0 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all ring-focus whitespace-nowrap ${activeFilter === chip.id ? 'bg-primary-500 text-white shadow-soft' : 'bg-white text-primary-500 hover:bg-primary-50'}`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI summary banner - Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6">
        <div className="glass rounded-2xl sm:rounded-3xl md:rounded-[2rem] p-3 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-4 md:gap-5 shadow-soft">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center flex-shrink-0 shadow-soft">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm md:text-base text-primary-600 font-medium leading-relaxed md:leading-snug">
              <span className="font-semibold">
                {t('search_ai_found')} {filtered.length} {t('search_ai_options')}
              </span>{' '}
              <span className="hidden sm:inline">{t('search_ai_reqs')}</span>
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-2.5 mt-2 md:mt-3">
              {reqTags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5 rounded-full bg-primary-100/60 text-primary-500 text-2xs sm:text-xs md:text-sm font-medium">
                  <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                  <span className="hidden lg:inline">{tag}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 md:pb-28">
        <div className={`grid ${showMap ? 'lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-4 sm:gap-5 md:gap-6`}>
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
          <div className="text-center py-16 sm:py-20 md:py-24">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-3xl sm:rounded-[2rem] bg-primary-50 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-400" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 mb-2 sm:mb-3">{t('search_no_results')}</h3>
            <p className="text-sm sm:text-base text-primary-400">{t('search_no_results_sub')}</p>
          </div>
        )}
      </div>

      {/* Mobile filters sheet */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 inset-x-0 bg-white rounded-t-3xl md:rounded-t-[2rem] p-5 md:p-6 animate-slide-up max-h-[70vh] md:max-h-[60vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4 md:mb-5">
              <h3 className="font-display font-bold text-lg md:text-xl text-primary-600">{t('search_mobile_filters_title')}</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-50">
                <X className="w-5 h-5 md:w-5.5 md:h-5.5" />
              </button>
            </div>
            <div className="space-y-2 md:space-y-2.5">
              {filterChips.map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => { setActiveFilter(chip.id); setMobileFiltersOpen(false); }}
                  className={`w-full text-left px-4 md:px-5 py-3 md:py-3.5 rounded-xl md:rounded-2xl text-sm md:text-base font-medium transition-colors ${activeFilter === chip.id ? 'bg-primary-500 text-white' : 'bg-primary-50 text-primary-500 hover:bg-primary-100'}`}
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
