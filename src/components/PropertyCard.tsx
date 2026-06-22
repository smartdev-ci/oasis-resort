import { useState } from 'react';
import {
  Heart, Star, MapPin, Sparkles, Eye, GitCompare, MessageCircle, Smartphone, Check,
} from 'lucide-react';
import { type Property } from '../data/properties';
import { useI18n } from '../i18n';

interface PropertyCardProps {
  property: Property;
  onBook?: (property: Property) => void;
  onView?: (property: Property) => void;
  onCompare?: (property: Property) => void;
  onAskAI?: (property: Property) => void;
  selected?: boolean;
  variant?: 'default' | 'horizontal' | 'compact';
  className?: string;
}

export function PropertyCard({
  property,
  onBook,
  onView,
  onCompare,
  onAskAI,
  selected,
  className = '',
}: PropertyCardProps) {
  const { t } = useI18n();
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const price = new Intl.NumberFormat('fr-FR').format(property.pricePerNight);

  return (
    <div className={`group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 ${selected ? 'ring-2 ring-primary-400' : ''} ${className}`}>
      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-64">
        {!imageLoaded && <div className="absolute inset-0 bg-primary-50 shimmer" />}
        <img
          src={property.images[0].url}
          alt={property.images[0].alt}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* AI badge */}
        <div className="absolute top-3 left-3">
          <div className="inline-flex items-center gap-1.5 glass rounded-full px-3 py-1.5">
            <Sparkles className="w-3 h-3 text-primary-500" />
            <span className="text-xs font-semibold text-primary-600">{property.aiBadge}</span>
          </div>
        </div>

        {/* Like */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 glass rounded-full flex items-center justify-center hover:bg-white/90 transition-colors ring-focus"
          aria-label={t('card_save')}
        >
          <Heart className={`w-4.5 h-4.5 transition-all ${liked ? 'fill-warning text-warning scale-110' : 'text-primary-500'}`} />
        </button>

        {/* Mobile Money badge */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {property.mobileMoneyAccepted && (
            <div className="inline-flex items-center gap-1 glass-dark rounded-full px-2.5 py-1">
              <Smartphone className="w-3 h-3 text-primary-300" />
              <span className="text-2xs font-semibold text-white">{t('card_mobile_money')}</span>
            </div>
          )}
          {!property.available && (
            <div className="inline-flex items-center gap-1 bg-warning/90 rounded-full px-2.5 py-1">
              <span className="text-2xs font-semibold text-white">{t('card_sold_out')}</span>
            </div>
          )}
        </div>

        {property.roomsLeft && property.roomsLeft <= 3 && property.available && (
          <div className="absolute bottom-3 right-3 glass-dark rounded-full px-2.5 py-1">
            <span className="text-2xs font-semibold text-gold-light">
              {t('card_only_left')} {property.roomsLeft} {t('card_only_left2')}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm font-bold text-primary-500">{property.rating.toFixed(1)}</span>
            <span className="text-sm text-primary-300">({property.reviewCount.toLocaleString('en-US')})</span>
          </div>
          <span className="text-xs text-primary-300 font-medium px-2 py-0.5 rounded-full bg-primary-50">{property.type}</span>
        </div>

        <h3 className="font-display font-bold text-primary-600 text-lg mb-1 truncate">{property.name}</h3>

        <div className="flex items-center gap-1 text-primary-400 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{property.area}, {property.city}</span>
        </div>

        {/* AI summary */}
        <div className="flex items-start gap-2 mb-4 p-3 rounded-2xl bg-primary-50/50 border border-primary-100">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-primary-400 mt-0.5" />
          <p className="text-xs text-primary-500 leading-relaxed line-clamp-2">{property.aiSummary}</p>
        </div>

        {/* Distance */}
        <div className="flex items-center gap-1.5 text-xs text-primary-300 mb-3">
          <MapPin className="w-3 h-3" />
          <span>{property.distanceFromLandmark}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {property.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-50 text-primary-400 text-2xs font-medium">
              <Check className="w-2.5 h-2.5" />
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-50 text-primary-400 text-2xs font-medium">
              +{property.amenities.length - 3}
            </span>
          )}
        </div>

        {/* Price + Book */}
        <div className="flex items-end justify-between pt-3 border-t border-primary-50">
          <div>
            <div className="text-lg font-bold text-primary-600">
              {price} <span className="text-sm font-medium text-primary-300">{property.currency}</span>
            </div>
            <span className="text-xs text-primary-300">{t('card_per_night')}</span>
          </div>
          <button
            onClick={() => onBook?.(property)}
            className="px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium transition-all active:scale-95 shadow-soft hover:shadow-soft-lg ring-focus"
          >
            {t('card_book')}
          </button>
        </div>

        {/* Quick actions */}
        {(onView || onCompare || onAskAI) && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-primary-50">
            {onView && (
              <button
                onClick={() => onView(property)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary-50 hover:bg-primary-100 text-primary-500 text-xs font-medium transition-colors ring-focus"
              >
                <Eye className="w-3.5 h-3.5" />
                {t('card_view')}
              </button>
            )}
            {onCompare && (
              <button
                onClick={() => onCompare(property)}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium transition-colors ring-focus ${selected ? 'bg-primary-500 text-white hover:bg-primary-400' : 'bg-primary-50 hover:bg-primary-100 text-primary-500'}`}
              >
                <GitCompare className="w-3.5 h-3.5" />
                {selected ? t('card_selected') : t('card_compare')}
              </button>
            )}
            {onAskAI && (
              <button
                onClick={() => onAskAI(property)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-gold/10 hover:bg-gold/20 text-gold text-xs font-medium transition-colors ring-focus"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t('card_ask_ai')}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface CompactCardProps {
  property: Property;
  onClick?: (property: Property) => void;
  className?: string;
}

export function CompactCard({ property, onClick, className = '' }: CompactCardProps) {
  const { t } = useI18n();
  return (
    <button
      onClick={() => onClick?.(property)}
      className={`group block w-full text-left bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-500 hover:-translate-y-1 ring-focus ${className}`}
    >
      <div className="flex gap-3 p-2">
        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
          <img src={property.images[0].url} alt={property.images[0].alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 min-w-0 py-1 pr-2">
          <div className="flex items-center gap-1 mb-1">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span className="text-xs font-bold text-primary-500">{property.rating.toFixed(1)}</span>
            <span className="text-2xs text-primary-300 truncate">· {property.city}</span>
          </div>
          <h4 className="text-sm font-bold text-primary-600 truncate">{property.name}</h4>
          <p className="text-xs text-primary-400 truncate mt-0.5">{property.aiBadge}</p>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-sm font-bold text-primary-500">
              {new Intl.NumberFormat('fr-FR').format(property.pricePerNight)}
              <span className="text-2xs font-medium text-primary-300"> FCFA{t('card_per_night')}</span>
            </span>
            {property.mobileMoneyAccepted && (
              <Smartphone className="w-3.5 h-3.5 text-primary-300" />
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
