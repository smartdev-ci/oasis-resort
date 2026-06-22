import { useState } from 'react';
import { Plane, Briefcase, Calendar, MapPin, ArrowLeft, Users, Clock, Star, Heart, Building2, Car, Train, Ship } from 'lucide-react';
import { useI18n } from '../i18n';

interface TravelProps {
  onBack?: () => void;
}

interface Trip {
  id: string;
  title: string;
  destination: string;
  duration: string;
  startDate: string;
  endDate: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  travelers: number;
  accommodation: string;
  transport: string;
  budget: number;
  rating?: number;
}

export function Travel({ onBack }: TravelProps) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'current' | 'past' | 'upcoming'>('current');

  const currentTrips: Trip[] = [
    {
      id: '1',
      title: t('trip_1_title'),
      destination: t('trip_dest_paris'),
      duration: '7 jours',
      startDate: '15 Juin 2026',
      endDate: '22 Juin 2026',
      status: 'confirmed',
      travelers: 2,
      accommodation: t('trip_accommodation_hotel'),
      transport: t('trip_transport_flight'),
      budget: 2500000,
      rating: 4.5,
    },
    {
      id: '2',
      title: t('trip_2_title'),
      destination: t('trip_dest_new_york'),
      duration: '10 jours',
      startDate: '01 Juillet 2026',
      endDate: '10 Juillet 2026',
      status: 'confirmed',
      travelers: 1,
      accommodation: t('trip_accommodation_apartment'),
      transport: t('trip_transport_flight'),
      budget: 3200000,
    },
  ];

  const upcomingTrips: Trip[] = [
    {
      id: '3',
      title: t('trip_3_title'),
      destination: t('trip_dest_dubai'),
      duration: '5 jours',
      startDate: '15 Août 2026',
      endDate: '20 Août 2026',
      status: 'pending',
      travelers: 3,
      accommodation: t('trip_accommodation_resort'),
      transport: t('trip_transport_flight'),
      budget: 4500000,
    },
    {
      id: '4',
      title: t('trip_4_title'),
      destination: t('trip_dest_tokyo'),
      duration: '14 jours',
      startDate: '10 Septembre 2026',
      endDate: '24 Septembre 2026',
      status: 'pending',
      travelers: 2,
      accommodation: t('trip_accommodation_hotel'),
      transport: t('trip_transport_flight'),
      budget: 5800000,
    },
  ];

  const pastTrips: Trip[] = [
    {
      id: '5',
      title: t('trip_5_title'),
      destination: t('trip_dest_london'),
      duration: '4 jours',
      startDate: '01 Mars 2026',
      endDate: '04 Mars 2026',
      status: 'completed',
      travelers: 1,
      accommodation: t('trip_accommodation_hotel'),
      transport: t('trip_transport_flight'),
      budget: 1800000,
      rating: 4.8,
    },
    {
      id: '6',
      title: t('trip_6_title'),
      destination: t('trip_dest_bali'),
      duration: '12 jours',
      startDate: '15 Avril 2026',
      endDate: '27 Avril 2026',
      status: 'completed',
      travelers: 2,
      accommodation: t('trip_accommodation_villa'),
      transport: t('trip_transport_flight'),
      budget: 4200000,
      rating: 4.9,
    },
  ];

  const getTrips = () => {
    switch (activeTab) {
      case 'current':
        return currentTrips;
      case 'upcoming':
        return upcomingTrips;
      case 'past':
        return pastTrips;
      default:
        return currentTrips;
    }
  };

  const formatBudget = (budget: number) => {
    return new Intl.NumberFormat('fr-FR').format(budget) + ' FCFA';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/10 text-green-600';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-600';
      case 'cancelled':
        return 'bg-red-500/10 text-red-600';
      case 'completed':
        return 'bg-primary-500/10 text-primary-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  const getTransportIcon = (transport: string) => {
    switch (transport) {
      case t('trip_transport_flight'):
        return Plane;
      case t('trip_transport_car'):
        return Car;
      case t('trip_transport_train'):
        return Train;
      case t('trip_transport_ship'):
        return Ship;
      default:
        return Plane;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-fog to-cream pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 md:pb-28">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t('travel_back')}</span>
            </button>
          )}
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-emerald-accent flex items-center justify-center shadow-soft">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-600">{t('travel_title')}</h1>
              <p className="text-primary-400 mt-1">{t('travel_subtitle')}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          <div className="glass rounded-2xl p-4 text-center border border-primary-100">
            <Briefcase className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-600">{currentTrips.length + upcomingTrips.length}</div>
            <div className="text-xs text-primary-400 mt-0.5">{t('travel_stats_upcoming')}</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center border border-primary-100">
            <Calendar className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-600">{pastTrips.length}</div>
            <div className="text-xs text-primary-400 mt-0.5">{t('travel_stats_completed')}</div>
          </div>
          <div className="glass rounded-2xl p-4 text-center border border-primary-100">
            <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-primary-600">12</div>
            <div className="text-xs text-primary-400 mt-0.5">{t('travel_stats_countries')}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 sm:gap-2 bg-white rounded-2xl p-1 shadow-soft mb-6">
          <button
            onClick={() => setActiveTab('current')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'current' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('travel_current')}
          </button>
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'upcoming' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('travel_upcoming')}
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'past' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('travel_past')}
          </button>
        </div>

        {/* Trips List */}
        <div className="space-y-4">
          {getTrips().map((trip, index) => {
            const TransportIcon = getTransportIcon(trip.transport);
            return (
              <div
                key={trip.id}
                className="glass rounded-2xl border border-primary-100 overflow-hidden"
              >
                {/* Trip Header */}
                <div className="flex items-center gap-4 p-4 border-b border-primary-50/50">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-primary-600 truncate">{trip.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-primary-400 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{trip.destination}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-2xs font-medium ${getStatusColor(trip.status)}`}>
                    {t(`travel_status_${trip.status}`)}
                  </div>
                </div>

                {/* Trip Details */}
                <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-primary-400">
                    <Calendar className="w-4 h-4" />
                    <span>{trip.startDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-400">
                    <Clock className="w-4 h-4" />
                    <span>{trip.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-400">
                    <Users className="w-4 h-4" />
                    <span>{trip.travelers}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-400">
                    <TransportIcon className="w-4 h-4" />
                    <span>{trip.transport}</span>
                  </div>
                </div>

                {/* Trip Actions */}
                <div className="px-4 pb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 text-primary-500 font-bold">
                    {formatBudget(trip.budget)}
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-primary-50 text-primary-600 text-sm font-medium hover:bg-primary-100 transition-colors">
                      {t('travel_details')}
                    </button>
                    {trip.status === 'confirmed' && (
                      <button className="px-4 py-2 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-400 transition-colors">
                        {t('travel_checkin')}
                      </button>
                    )}
                  </div>
                </div>

                {/* Rating (for past trips) */}
                {trip.status === 'completed' && trip.rating && (
                  <div className="px-4 pb-4 flex items-center gap-1">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(trip.rating!) ? 'fill-yellow-500' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-primary-400">{trip.rating}/5</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {getTrips().length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-primary-300" />
            </div>
            <h3 className="text-lg font-bold text-primary-600 mb-2">{t('travel_no_trips')}</h3>
            <p className="text-primary-400 mb-4">{t('travel_no_trips_sub')}</p>
            <button className="px-6 py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-400 transition-colors">
              {t('travel_plan_new')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Travel;
