import { useState, useMemo } from 'react';
import {
  Search, Sparkles, MapPin, Star, X, Filter,
  Leaf, Camera, Waves, Building2, Bird, Calendar,
  Hotel, ExternalLink,
} from 'lucide-react';
import { touristSites, type TouristSite, type SiteCategory } from '../data/touristSites';
import { useI18n, type I18nContextValue } from '../i18n';

type FilterCategory = 'all' | SiteCategory;

const categoryIcons: Record<SiteCategory | 'all', typeof Search> = {
  all: Filter,
  nature: Leaf,
  culture: Camera,
  plage: Waves,
  heritage: Building2,
  wildlife: Bird,
};

export function Discover({ onBook }: { onBook?: (siteId: string) => void }) {
  const { t, locale } = useI18n();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const categories: FilterCategory[] = ['all', 'nature', 'culture', 'plage', 'heritage', 'wildlife'];
  const categoryLabels: Record<FilterCategory, string> = {
    all: t('sites_filter_all'),
    nature: t('sites_filter_nature'),
    culture: t('sites_filter_culture'),
    plage: t('sites_filter_plage'),
    heritage: t('sites_filter_heritage'),
    wildlife: t('sites_filter_wildlife'),
  };

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return touristSites.filter((site) => {
      const name = locale === 'fr' ? site.nameFr : site.nameEn;
      const desc = locale === 'fr' ? site.descFr : site.descEn;
      const matchesQuery =
        !q ||
        name.toLowerCase().includes(q) ||
        site.city.toLowerCase().includes(q) ||
        site.country.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        site.tags.some((tag) => tag.toLowerCase().includes(q));
      const matchesCat = activeCategory === 'all' || site.category === activeCategory;
      return matchesQuery && matchesCat;
    });
  }, [query, activeCategory, locale]);

  const aiPicks = filtered.filter((s) => s.aiPick);
  const others = filtered.filter((s) => !s.aiPick);

  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Hero banner */}
      <div className="relative overflow-hidden min-h-[420px] sm:min-h-[520px]">
        {/* Real photo background */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="African tourist sites"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/55 via-primary-900/45 to-primary-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-emerald text-white text-xs font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            {t('sites_badge')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-4 text-balance">
            {t('sites_title')}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 text-balance">
            {t('sites_subtitle')}
          </p>

          {/* Search bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-300/40 via-gold/30 to-primary-200/40 rounded-2xl blur-md opacity-60" />
            <div className="relative glass rounded-2xl flex items-center gap-3 px-4 py-3 sm:py-4 shadow-soft-xl">
              <Search className="w-5 h-5 text-primary-400 flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('sites_search_placeholder')}
                className="flex-1 bg-transparent text-sm sm:text-base text-primary-600 placeholder:text-primary-300 ring-focus focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-primary-400 hover:bg-primary-50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-10">
            {[
              { value: `${touristSites.length}+`, label: locale === 'fr' ? 'Sites répertoriés' : 'Listed sites' },
              { value: '12', label: locale === 'fr' ? 'Pays couverts' : 'Countries covered' },
              { value: '100%', label: locale === 'fr' ? 'Vérifiés par l\'IA' : 'AI-verified' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="sticky top-16 z-20 glass border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ring-focus ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-soft'
                      : 'bg-white text-primary-500 hover:bg-primary-50 shadow-soft'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {categoryLabels[cat]}
                </button>
              );
            })}
            {query && (
              <div className="flex-shrink-0 text-xs text-primary-400 ml-2">
                {filtered.length} {locale === 'fr' ? 'résultat(s)' : 'result(s)'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 pb-24 space-y-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-3xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-primary-300" />
            </div>
            <h3 className="text-xl font-bold text-primary-600 mb-2">{t('sites_no_results')}</h3>
            <p className="text-primary-400">{t('sites_no_results_sub')}</p>
            <button onClick={() => { setQuery(''); setActiveCategory('all'); }} className="mt-4 px-5 py-2.5 rounded-full bg-primary-500 text-white text-sm font-medium hover:bg-primary-400 transition-colors">
              {locale === 'fr' ? 'Réinitialiser' : 'Reset'}
            </button>
          </div>
        ) : (
          <>
            {aiPicks.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
                    <Sparkles className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600">
                      {locale === 'fr' ? 'Sélections IA' : 'AI Picks'}
                    </h2>
                    <p className="text-sm text-primary-400">
                      {locale === 'fr' ? 'Les incontournables sélectionnés par notre intelligence artificielle' : 'Must-see picks curated by our AI'}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiPicks.map((site, idx) => (
                    <SiteCard key={site.id} site={site} t={t} locale={locale} onBook={onBook} delay={idx * 0.07} />
                  ))}
                </div>
              </section>
            )}

            {others.length > 0 && (
              <section>
                {aiPicks.length > 0 && (
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-primary-600 mb-6">
                    {locale === 'fr' ? 'Tous les sites' : 'All sites'}
                  </h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {others.map((site, idx) => (
                    <SiteCard key={site.id} site={site} t={t} locale={locale} onBook={onBook} delay={idx * 0.07} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function SiteCard({
  site,
  t,
  locale,
  onBook,
  delay = 0,
}: {
  site: TouristSite;
  t: I18nContextValue['t'];
  locale: string;
  onBook?: (id: string) => void;
  delay?: number;
}) {
  const name = locale === 'fr' ? site.nameFr : site.nameEn;
  const desc = locale === 'fr' ? site.descFr : site.descEn;
  const bestSeason = locale === 'fr' ? site.bestSeasonFr : site.bestSeasonEn;

  return (
    <article
      className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={site.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {site.aiPick && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass text-primary-600 text-2xs font-semibold">
              <Sparkles className="w-2.5 h-2.5 text-primary-500" />
              {t('sites_ai_pick')}
            </span>
          )}
          {site.mustSee && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/90 text-white text-2xs font-semibold">
              ★ {t('sites_must_see')}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="px-2.5 py-1 rounded-full glass-dark text-white text-2xs font-medium capitalize">
            {site.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm font-bold text-primary-500">{site.rating.toFixed(1)}</span>
            <span className="text-xs text-primary-300">({site.reviewCount.toLocaleString('fr-FR')})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-primary-400">
            <MapPin className="w-3 h-3" />
            {site.country}
          </div>
        </div>

        <h3 className="font-display font-bold text-primary-600 text-lg leading-tight mb-2">{name}</h3>

        <div className="flex items-center gap-1 text-xs text-primary-400 mb-3">
          <MapPin className="w-3 h-3" />
          {site.city}
          {site.distanceKm > 0 && (
            <span className="text-primary-300">· {site.distanceKm} km {t('sites_distance')}</span>
          )}
        </div>

        <p className="text-sm text-primary-400 leading-relaxed line-clamp-2 mb-4">{desc}</p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-500 text-2xs font-medium">
            <Calendar className="w-3 h-3" />
            {bestSeason}
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-50 text-primary-500 text-2xs font-medium">
            <Hotel className="w-3 h-3" />
            {site.nearbyHotels} {t('sites_nearby_hotels')}
          </div>
          {site.entryFee !== null ? (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/10 text-gold text-2xs font-medium border border-gold/20">
              {t('sites_entry_fee')}: {new Intl.NumberFormat('fr-FR').format(site.entryFee)} FCFA
            </div>
          ) : (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-100 text-primary-500 text-2xs font-medium">
              {t('sites_entry_fee')}: {t('sites_free')}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {site.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-primary-50 text-primary-400 text-2xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-3 border-t border-primary-50">
          <button className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary-50 hover:bg-primary-100 text-primary-500 text-sm font-medium transition-colors ring-focus">
            <ExternalLink className="w-3.5 h-3.5" />
            {t('sites_learn_more')}
          </button>
          {onBook && (
            <button
              onClick={() => onBook(site.id)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium transition-all active:scale-95 shadow-soft hover:shadow-soft-lg ring-focus"
            >
              <Hotel className="w-3.5 h-3.5" />
              {t('sites_book_tour')}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
