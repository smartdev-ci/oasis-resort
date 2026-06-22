import { Sparkles, Send } from 'lucide-react';
import { useI18n } from '../i18n';

export function ConversationalSection() {
  const { t, locale } = useI18n();

  const conversation = locale === 'fr'
    ? [
        { role: 'user' as const, text: 'J\'ai besoin d\'un hôtel calme près de l\'aéroport d\'Abidjan.' },
        { role: 'ai' as const, text: 'J\'ai trouvé 12 options correspondant à vos préférences.', cards: [
          { name: 'Sofitel Abidjan', price: 145000, rating: 4.8 },
          { name: 'Laguna Appartements', price: 35000, rating: 4.3 },
        ]},
        { role: 'user' as const, text: 'Options moins chères' },
        { role: 'ai' as const, text: 'Voici 5 options plus abordables à moins de 50 000 FCFA par nuit. Toutes très bien notées avec Mobile Money accepté.' },
      ]
    : [
        { role: 'user' as const, text: 'I need a quiet hotel near Abidjan airport.' },
        { role: 'ai' as const, text: 'I found 12 options matching your preferences.', cards: [
          { name: 'Sofitel Abidjan', price: 145000, rating: 4.8 },
          { name: 'Laguna Apartments', price: 35000, rating: 4.3 },
        ]},
        { role: 'user' as const, text: 'Cheaper options' },
        { role: 'ai' as const, text: 'Here are 5 more affordable options under 50,000 FCFA per night. All still highly rated and with Mobile Money accepted.' },
      ];

  const chips = locale === 'fr'
    ? ['Options moins chères', 'Avec petit-déjeuner', 'Familles', 'Hôtels 5 étoiles']
    : ['Cheaper options', 'Add breakfast', 'Family friendly', 'Show only 5-star hotels'];

  const featureItems = locale === 'fr'
    ? [
        { label: '"Options moins chères"', desc: 'Filtrez par budget instantanément' },
        { label: '"Avec petit-déjeuner"', desc: 'Afficher uniquement les séjours avec petit-déjeuner' },
        { label: '"Familles"', desc: 'Trouver des propriétés parfaites pour les enfants' },
        { label: '"Hôtels 5 étoiles"', desc: 'Propriétés les mieux notées seulement' },
      ]
    : [
        { label: '"Cheaper options"', desc: 'Filter by budget instantly' },
        { label: '"Add breakfast"', desc: 'Only show stays with breakfast included' },
        { label: '"Family friendly"', desc: 'Find properties perfect for kids' },
        { label: '"Show only 5-star hotels"', desc: 'Top-rated properties only' },
      ];

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-primary-600" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-emerald text-primary-100 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            {t('conv_badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-5 text-balance">
            {t('conv_title')}
            <br />
            <span className="bg-gradient-to-r from-gold-light via-primary-200 to-primary-300 bg-clip-text text-transparent">
              {t('conv_title_highlight')}
            </span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">{t('conv_subtitle')}</p>
          <div className="space-y-3">
            {featureItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full glass-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3 text-gold-light" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{item.label}</div>
                  <div className="text-xs text-white/60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right chat preview */}
        <div className="relative">
          <div className="bg-white rounded-4xl shadow-soft-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 bg-white border-b border-primary-50 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary-300 border-2 border-white" />
              </div>
              <div>
                <div className="font-semibold text-primary-600 text-sm">{t('brand')} AI</div>
                <div className="text-2xs text-primary-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-300 animate-pulse" />
                  {t('conv_online')}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 bg-cream max-h-[380px] overflow-y-auto scrollbar-hide">
              {conversation.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`} style={{ animationDelay: `${idx * 0.15}s` }}>
                  {msg.role === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex-shrink-0 flex items-center justify-center mr-2 mt-1">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[80%] ${msg.role === 'user' ? 'order-1' : ''}`}>
                    <div className={`px-3.5 py-2.5 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-primary-500 text-white rounded-2xl rounded-tr-md' : 'bg-white text-primary-600 rounded-2xl rounded-tl-md shadow-soft'}`}>
                      {msg.text}
                    </div>
                    {msg.role === 'ai' && 'cards' in msg && msg.cards && (
                      <div className="mt-2 space-y-2">
                        {msg.cards.map((card) => (
                          <div key={card.name} className="bg-white rounded-2xl shadow-soft p-3 flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-200 to-primary-100 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-semibold text-primary-600 truncate">{card.name}</div>
                              <div className="flex items-center gap-2 text-2xs text-primary-300">
                                <span>{card.rating} ★</span>
                                <span>·</span>
                                <span>{new Intl.NumberFormat('fr-FR').format(card.price)} FCFA</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {/* Follow-up chips */}
              <div className="flex flex-wrap gap-1.5 ml-9 mt-1">
                {chips.map((chip) => (
                  <button key={chip} className="px-2.5 py-1 rounded-full bg-white text-primary-500 text-2xs font-medium border border-primary-100 hover:bg-primary-50 transition-colors">
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-primary-50">
              <div className="flex items-center bg-primary-50/60 rounded-full px-4 py-2.5">
                <input disabled type="text" placeholder={t('ai_placeholder')} className="flex-1 bg-transparent text-sm text-primary-600 placeholder:text-primary-300 focus:outline-none" />
                <button className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating accent */}
          <div className="absolute -top-4 -right-4 glass-emerald rounded-2xl p-3 shadow-soft-lg hidden sm:block animate-float">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-light" />
              <span className="text-xs font-medium text-white">
                {locale === 'fr' ? 'L\'IA construit vos filtres' : 'AI builds filters for you'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
