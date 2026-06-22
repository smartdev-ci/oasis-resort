import { useState } from 'react';
import {
  ArrowLeft, Heart, Share2, Sparkles, MapPin, Smartphone,
  Check, AlertTriangle, Rotate3d, Image as ImageIcon, X,
  Wifi, Waves, Dumbbell, Utensils, Car, Shield, ChevronLeft, ChevronRight,
  GitCompare, MessageCircle, Calendar, Users, Minus, Plus,
} from 'lucide-react';
import { type Property } from '../data/properties';
import { useI18n } from '../i18n';

interface PropertyDetailsProps {
  property: Property;
  onBack: () => void;
  onBook: (property: Property) => void;
  onCompare?: (property: Property) => void;
  onAskAI?: () => void;
}

const amenityIcons: Record<string, typeof Wifi> = {
  'Free Wi-Fi': Wifi,    'Pool': Waves,         'Infinity Pool': Waves,
  'Private Beach': Waves,'Spa': Sparkles,        'Gym': Dumbbell,
  'Restaurant': Utensils,'Bar': Utensils,         'Kitchen': Utensils,
  'Airport Shuttle': Car,'Parking': Car,          'Conference Room': Shield,
  'Co-working Space': Shield,'24/7 Security': Shield,'Beach Bar': Utensils,
  'Water Sports': Waves, 'Laundry': Shield,       'Gym Access': Dumbbell,
  'Private Pool': Waves, 'Garden': Waves,          'Chef on Request': Utensils,
  'Pet Friendly': Shield,'Rooftop Terrace': Waves,'Hammam': Sparkles,
};

export function PropertyDetails({ property, onBack, onBook, onCompare, onAskAI }: PropertyDetailsProps) {
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [liked, setLiked] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(3);

  const totalBase = property.pricePerNight * nights;
  const serviceFee = Math.round(totalBase * 0.08);
  const totalAmount = totalBase + serviceFee;

  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Sticky header */}
      <div className="sticky top-16 z-30 glass border-b border-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button onClick={onBack} className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors ring-focus rounded-full px-2 py-1">
            <ArrowLeft className="w-4.5 h-4.5" />
            <span className="text-sm font-medium">{t('details_back')}</span>
          </button>
          <div className="flex items-center gap-2">
            <button onClick={() => setLiked(!liked)} className="w-10 h-10 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors ring-focus">
              <Heart className={`w-5 h-5 ${liked ? 'fill-warning text-warning' : ''}`} />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors ring-focus">
              <Share2 className="w-4.5 h-4.5" />
            </button>
            {onCompare && (
              <button onClick={() => onCompare(property)} className="w-10 h-10 rounded-full flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-colors ring-focus">
                <GitCompare className="w-4.5 h-4.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-4 gap-3 h-[280px] sm:h-[460px] rounded-3xl overflow-hidden">
          <div className="col-span-4 sm:col-span-2 row-span-2 relative group cursor-pointer" onClick={() => setGalleryOpen(true)}>
            <img src={property.images[0].url} alt={property.images[0].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <button
              onClick={(e) => { e.stopPropagation(); setShowVirtualTour(true); }}
              className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-dark text-white text-xs font-medium hover:bg-primary-900/80 transition-colors"
            >
              <Rotate3d className="w-3.5 h-3.5" />
              {t('details_virtual_tour')}
            </button>
          </div>
          {property.images.slice(1, 5).map((image, idx) => (
            <div key={idx} className="relative group cursor-pointer hidden sm:block" onClick={() => setGalleryOpen(true)}>
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              {idx === 3 && (
                <div className="absolute inset-0 bg-primary-900/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <ImageIcon className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-xs font-medium">{t('details_view_all')} {property.images.length}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mt-8">
          {/* Left */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-primary-50 text-primary-500 text-xs font-medium">{property.type}</span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 text-gold text-xs font-medium border border-gold/30">
                  <Sparkles className="w-3 h-3" />
                  {property.aiBadge}
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-display font-bold text-primary-600 mb-3 text-balance">{property.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-400">
                <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{property.area}, {property.city}, {property.country}</span></div>
                <span className="text-primary-200">·</span>
                <span>{property.distanceFromLandmark}</span>
              </div>
            </div>

            {/* AI Summary */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-3xl p-5 sm:p-6 border border-primary-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-primary-600">{t('details_ai_summary')}</h3>
              </div>
              <p className="text-primary-500 leading-relaxed text-sm sm:text-base">{property.aiSummary}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {property.bestFor.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white text-primary-500 text-xs font-medium border border-primary-100">
                    <Check className="w-3 h-3 text-primary-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Review Analysis */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-600">{t('details_review_analysis')}</h3>
              </div>
              <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-soft">
                <p className="text-primary-500 text-sm leading-relaxed mb-5">{property.reviewAnalysis.summary}</p>
                {/* Sentiment score */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary-50">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke="#b7e4c7" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15.5" fill="none" stroke="#2d6a4f" strokeWidth="3"
                        strokeDasharray={`${(property.reviewAnalysis.overallSentiment / 100) * 97} 200`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-primary-600">{property.reviewAnalysis.overallSentiment}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-500">{t('details_overall_sentiment')}</div>
                    <div className="text-xs text-primary-300 mt-0.5">
                      {t('details_analyzed')} {property.reviewAnalysis.reviewCount.toLocaleString('en-US')} {t('details_reviews')}
                    </div>
                  </div>
                </div>
                {/* Strengths & Weaknesses */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 mb-3">
                      <Check className="w-4 h-4 text-primary-400" />
                      {t('details_strengths')}
                    </h4>
                    <ul className="space-y-2">
                      {property.reviewAnalysis.strengths.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-primary-500">
                          <Check className="w-3.5 h-3.5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 mb-3">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                      {t('details_weaknesses')}
                    </h4>
                    <ul className="space-y-2">
                      {property.reviewAnalysis.weaknesses.map((w, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-primary-500">
                          <AlertTriangle className="w-3.5 h-3.5 text-warning flex-shrink-0 mt-0.5" />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Guest breakdown */}
                <div className="mt-6 pt-6 border-t border-primary-50">
                  <h4 className="text-sm font-semibold text-primary-600 mb-3">{t('details_by_guest')}</h4>
                  <div className="space-y-3">
                    {property.reviewAnalysis.guestBreakdown.map((gb) => (
                      <div key={gb.label}>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-primary-500 font-medium">{gb.label}</span>
                          <span className="text-primary-400">{gb.sentiment}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-primary-50 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all duration-1000" style={{ width: `${gb.sentiment}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="font-display font-bold text-xl text-primary-600 mb-4">{t('details_amenities')}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity] || Check;
                  return (
                    <div key={amenity} className="flex items-center gap-2 p-3 rounded-2xl bg-white shadow-soft">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-400 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-primary-500 font-medium truncate">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment methods */}
            <div>
              <h3 className="font-display font-bold text-xl text-primary-600 mb-4">{t('details_payment')}</h3>
              <div className="flex flex-wrap gap-2">
                {property.paymentMethods.map((method) => (
                  <div key={method} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white shadow-soft text-sm font-medium text-primary-500">
                    <Smartphone className="w-3.5 h-3.5 text-primary-400" />
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Booking card */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="bg-white rounded-3xl shadow-soft-lg p-5 sm:p-6 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-bold text-primary-600">
                    {new Intl.NumberFormat('fr-FR').format(property.pricePerNight)}
                  </span>
                  <span className="text-sm text-primary-300"> {property.currency} {t('details_per_night')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-bold text-primary-500">{property.rating.toFixed(1)}</span>
                  <span className="text-xs text-primary-300">({property.reviewCount})</span>
                </div>
              </div>

              {/* Guests & Nights */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl border border-primary-100">
                  <div className="text-2xs text-primary-300 font-medium mb-1 flex items-center gap-1">
                    <Users className="w-3 h-3" /> {t('details_guests')}
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold text-primary-600">{guests}</span>
                    <button onClick={() => setGuests(guests + 1)} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="p-3 rounded-2xl border border-primary-100">
                  <div className="text-2xs text-primary-300 font-medium mb-1 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {t('details_nights')}
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => setNights(Math.max(1, nights - 1))} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100">
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-semibold text-primary-600">{nights}</span>
                    <button onClick={() => setNights(nights + 1)} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100">
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="space-y-2 py-3 border-t border-b border-primary-50">
                <div className="flex items-center justify-between text-sm text-primary-400">
                  <span>{new Intl.NumberFormat('fr-FR').format(property.pricePerNight)} {property.currency} × {nights} {t('details_nights').toLowerCase()}</span>
                  <span>{new Intl.NumberFormat('fr-FR').format(totalBase)} {property.currency}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-primary-400">
                  <span>{t('details_service_fee')}</span>
                  <span>{new Intl.NumberFormat('fr-FR').format(serviceFee)} {property.currency}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-primary-600">{t('details_total')}</span>
                <span className="text-xl font-bold text-primary-600">
                  {new Intl.NumberFormat('fr-FR').format(totalAmount)} {property.currency}
                </span>
              </div>

              <button
                onClick={() => onBook(property)}
                className="w-full py-3.5 rounded-2xl bg-primary-500 hover:bg-primary-400 text-white font-medium transition-all active:scale-[0.98] shadow-soft hover:shadow-soft-lg ring-focus"
              >
                {t('details_book_now')}
              </button>

              {property.roomsLeft && property.roomsLeft <= 5 && (
                <p className="text-center text-xs text-warning font-medium">
                  {t('details_rooms_left')} {property.roomsLeft} {t('details_rooms_left2')}
                </p>
              )}

              <div className="flex items-center gap-2 pt-2">
                {onCompare && (
                  <button onClick={() => onCompare(property)} className="flex-1 py-2.5 rounded-xl bg-primary-50 hover:bg-primary-100 text-primary-500 text-sm font-medium transition-colors flex items-center justify-center gap-1.5">
                    <GitCompare className="w-4 h-4" />
                    {t('card_compare')}
                  </button>
                )}
                {onAskAI && (
                  <button onClick={onAskAI} className="flex-1 py-2.5 rounded-xl bg-gold/10 hover:bg-gold/20 text-gold text-sm font-medium transition-colors flex items-center justify-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    {t('card_ask_ai')}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-2xs text-primary-300 pt-2 border-t border-primary-50 justify-center">
                <Shield className="w-3 h-3" />
                {t('details_cancellation')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual tour modal */}
      {showVirtualTour && (
        <div className="fixed inset-0 z-[100] bg-primary-900/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowVirtualTour(false)}>
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-primary-800">
            <X className="w-5 h-5" />
          </button>
          <div className="text-center max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="w-24 h-24 rounded-3xl glass-emerald flex items-center justify-center mx-auto mb-6 animate-float">
              <Rotate3d className="w-12 h-12 text-primary-300" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white mb-3">{t('details_tour_title')}</h2>
            <p className="text-white/70 mb-6">{t('details_tour_subtitle')}</p>
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden glass">
              <img src={property.images[0].url} alt="Virtual tour" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass-dark flex items-center justify-center animate-bounce-subtle">
                  <Rotate3d className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/80 text-xs">
                <span>{t('details_room_loading')}</span>
                <span>{t('details_room_counter')}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery modal */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[100] bg-primary-900/95 flex items-center justify-center p-4 animate-fade-in" onClick={() => setGalleryOpen(false)}>
          <button className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-primary-800">
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-primary-800"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={property.images[activeImage].url}
            alt={property.images[activeImage].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setActiveImage((prev) => (prev + 1) % property.images.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-primary-800"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {activeImage + 1} / {property.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
