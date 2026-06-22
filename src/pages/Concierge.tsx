import { useState } from 'react';
import {
  Plane, Car, Utensils, Calendar, Map, Signal, Sparkles, ArrowRight,
  Check, MessageCircle, Phone, Globe, Bell,
} from 'lucide-react';
import { type Property } from '../data/properties';
import { useI18n } from '../i18n';

interface ConciergeProps {
  property: Property;
  onBack: () => void;
}

const iconMap: Record<string, typeof Plane> = {
  plane: Plane, car: Car, utensils: Utensils,
  calendar: Calendar, map: Map, signal: Signal,
};

export function Concierge({ property, onBack }: ConciergeProps) {
  const { t } = useI18n();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [booked, setBooked] = useState<string[]>([]);

  // Build services from i18n keys so they switch language on locale change
  const services = [
    { id: 'airport', icon: 'plane',    title: t('service_airport_title'),     description: t('service_airport_desc'),     price: 15000 },
    { id: 'taxi',    icon: 'car',       title: t('service_taxi_title'),         description: t('service_taxi_desc'),         price: 3500  },
    { id: 'resto',   icon: 'utensils',  title: t('service_restaurant_title'),   description: t('service_restaurant_desc'),   price: 0     },
    { id: 'events',  icon: 'calendar',  title: t('service_events_title'),       description: t('service_events_desc'),       price: 5000  },
    { id: 'tours',   icon: 'map',       title: t('service_tours_title'),        description: t('service_tours_desc'),        price: 25000 },
    { id: 'sim',     icon: 'signal',    title: t('service_sim_title'),          description: t('service_sim_desc'),          price: 8000  },
  ];

  // AI insights built from i18n
  const aiInsights = [
    { icon: Plane,    text: t('concierge_ai_1') },
    { icon: Utensils, text: t('concierge_ai_2') },
    { icon: Calendar, text: t('concierge_ai_3') },
  ];

  return (
    <div className="min-h-screen bg-cream pt-16 pb-24">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-500 text-white pb-12 sm:pb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 ring-focus rounded-full">
            <ArrowRight className="w-4 h-4 rotate-180" /> {t('concierge_back_home')}
          </button>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-emerald text-sm font-medium mb-4 w-fit">
            <Check className="w-3.5 h-3.5" />
            {t('concierge_confirmed')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold mb-3 text-balance">
            {t('concierge_title')}
          </h1>
          <p className="text-white/80 text-lg max-w-xl mb-6">
            {t('concierge_subtitle')} <span className="font-semibold">{property.name}</span> {t('concierge_subtitle2')}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Globe,          label: t('concierge_web') },
              { icon: Phone,          label: t('concierge_app') },
              { icon: MessageCircle,  label: t('concierge_whatsapp') },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 glass-emerald rounded-full px-4 py-2 text-sm">
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary-400" />
              <h2 className="text-2xl font-display font-bold text-primary-600">{t('concierge_personalized')}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => {
                const Icon = iconMap[service.icon] || Plane;
                const isBooked = booked.includes(service.id);
                const isSelected = selectedService === service.id;
                return (
                  <div
                    key={service.id}
                    className={`bg-white rounded-3xl p-5 shadow-soft transition-all cursor-pointer ${isSelected ? 'ring-2 ring-primary-400 ring-offset-2 ring-offset-cream' : 'hover:shadow-soft-lg hover:-translate-y-0.5'}`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-primary-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.price > 0 ? (
                        <div className="text-right">
                          <div className="text-xs text-primary-300">{t('concierge_from')}</div>
                          <div className="font-bold text-primary-600">{new Intl.NumberFormat('fr-FR').format(service.price)} FCFA</div>
                        </div>
                      ) : (
                        <span className="px-2 py-0.5 rounded-full bg-primary-100 text-primary-500 text-2xs font-medium">{t('concierge_free')}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-primary-600 mb-1">{service.title}</h3>
                    <p className="text-sm text-primary-400 leading-relaxed mb-4">{service.description}</p>
                    <button
                      onClick={(e) => { e.stopPropagation(); if (!isBooked) setBooked([...booked, service.id]); }}
                      className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors ${isBooked ? 'bg-primary-200 text-primary-500' : 'bg-primary-500 text-white hover:bg-primary-400'}`}
                    >
                      {isBooked ? (
                        <span className="flex items-center justify-center gap-1.5">
                          <Check className="w-4 h-4" /> {t('concierge_booked')}
                        </span>
                      ) : t('concierge_book')}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* AI Insights */}
            <div className="mt-8 bg-white rounded-3xl p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-primary-600">{t('concierge_ai_title')}</h3>
              </div>
              <div className="space-y-3">
                {aiInsights.map(({ icon: Icon, text }, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-primary-50/50">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-primary-400 flex-shrink-0 shadow-soft">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-primary-500 leading-relaxed pt-1">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat sidebar */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-3xl shadow-soft-lg overflow-hidden">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-4 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary-300 border-2 border-primary-500" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm">{t('concierge_chat_title')}</div>
                  <div className="text-white/70 text-2xs">{t('concierge_available')}</div>
                </div>
                <button className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10">
                  <Bell className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Chat preview */}
              <div className="p-4 h-[400px] overflow-y-auto bg-cream space-y-3 scrollbar-hide">
                {/* AI 1 */}
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-soft px-3 py-2">
                    <p className="text-sm text-primary-600">
                      {t('concierge_chat_1')} <strong>{property.name}</strong> {t('concierge_chat_2')}
                    </p>
                  </div>
                </div>
                {/* AI 2 */}
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-soft px-3 py-2">
                    <p className="text-sm text-primary-600">{t('concierge_chat_q1')}</p>
                  </div>
                </div>
                {/* User */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] bg-primary-500 text-white rounded-2xl rounded-tr-md px-3 py-2">
                    <p className="text-sm">{t('concierge_chat_a1')}</p>
                  </div>
                </div>
                {/* AI 3 */}
                <div className="flex justify-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex-shrink-0 flex items-center justify-center mr-2 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-soft px-3 py-2">
                    <p className="text-sm text-primary-600">{t('concierge_chat_q2')}</p>
                  </div>
                </div>
                {/* AI restaurants */}
                <div className="flex justify-start">
                  <div className="ml-9 max-w-[80%] bg-white rounded-2xl shadow-soft px-3 py-2">
                    <p className="text-sm text-primary-600 whitespace-pre-line">
                      {t('concierge_chat_restaurants')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t border-primary-50">
                <div className="flex items-center bg-primary-50/60 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-primary-300/30 transition-shadow">
                  <input type="text" placeholder={t('concierge_chat_placeholder')} className="flex-1 bg-transparent text-sm text-primary-600 placeholder:text-primary-300 ring-focus focus:outline-none" />
                  <button className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Trip card */}
            <div className="bg-white rounded-3xl p-4 shadow-soft mt-4">
              <h3 className="font-semibold text-primary-600 mb-3 text-sm">{t('concierge_trip')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary-400">{t('concierge_property_label')}</span>
                  <span className="font-medium text-primary-600 truncate ml-2 max-w-[160px]">{property.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-400">{t('concierge_city')}</span>
                  <span className="font-medium text-primary-600">{property.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-400">{t('concierge_checkin')}</span>
                  <span className="font-medium text-primary-600">{t('concierge_tomorrow')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-400">{t('concierge_services')}</span>
                  <span className="font-medium text-primary-600">{booked.length} {t('concierge_booked_count')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
