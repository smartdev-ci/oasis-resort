import { useState } from 'react';
import { User, Mail, Phone, Home, Calendar, Settings, LogOut, ArrowLeft, Bell, CreditCard, Star, Shield, Heart, Edit2, Camera, Building2 } from 'lucide-react';
import { useI18n } from '../i18n';

interface ProfileProps {
  onBack?: () => void;
  onSignOut?: () => void;
  onAdmin?: () => void;
}

export function Profile({ onBack, onSignOut }: ProfileProps) {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<'info' | 'bookings' | 'favorites' | 'settings'>('info');
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const userInfo = {
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    phone: '+225 07 01 23 45 67',
    memberSince: '2023',
    loyaltyLevel: 'Gold',
    totalBookings: 12,
  };

  const recentBookings = [
    {
      id: '1',
      property: t('profile_booking_1'),
      date: '15-20 Juin 2026',
      status: 'confirmed',
      amount: 1500000,
    },
    {
      id: '2',
      property: t('profile_booking_2'),
      date: '01-05 Juillet 2026',
      status: 'pending',
      amount: 2200000,
    },
    {
      id: '3',
      property: t('profile_booking_3'),
      date: '10-15 Août 2026',
      status: 'completed',
      amount: 850000,
    },
  ];

  const favoriteProperties = [
    {
      id: '1',
      name: t('profile_favorite_1'),
      location: t('profile_loc_abidjan'),
      rating: 4.8,
      price: 120000,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=200&h=150&fit=crop',
    },
    {
      id: '2',
      name: t('profile_favorite_2'),
      location: t('profile_loc_yopougon'),
      rating: 4.9,
      price: 180000,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=150&fit=crop',
    },
    {
      id: '3',
      name: t('profile_favorite_3'),
      location: t('profile_loc_cocody'),
      rating: 4.7,
      price: 145000,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&h=150&fit=crop',
    },
  ];

  const settingsOptions = [
    { icon: Bell, label: t('profile_settings_notifications'), action: 'notifications' },
    { icon: CreditCard, label: t('profile_settings_payment'), action: 'payment' },
    { icon: Shield, label: t('profile_settings_security'), action: 'security' },
    { icon: Settings, label: t('profile_settings_preferences'), action: 'preferences' },
    { icon: Building2, label: 'Mode Administration', action: 'admin' },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-500/10 text-green-600';
      case 'pending':
        return 'bg-yellow-500/10 text-yellow-600';
      case 'completed':
        return 'bg-primary-500/10 text-primary-600';
      case 'cancelled':
        return 'bg-red-500/10 text-red-600';
      default:
        return 'bg-gray-500/10 text-gray-600';
    }
  };

  const loyaltyColor = () => {
    switch (userInfo.loyaltyLevel) {
      case 'Gold':
        return 'from-yellow-500 to-yellow-300';
      case 'Silver':
        return 'from-gray-400 to-gray-200';
      case 'Bronze':
        return 'from-orange-500 to-orange-300';
      default:
        return 'from-primary-500 to-primary-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-fog to-cream pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 md:pb-28">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t('profile_back')}</span>
            </button>
          )}
        </div>

        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden shadow-soft">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-primary-600" />
              )}
            </div>
            {editMode && (
              <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-white hover:bg-primary-400 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="mt-4">
            {editMode ? (
              <input
                type="text"
                defaultValue={userInfo.name}
                className="text-xl sm:text-2xl font-bold text-primary-600 bg-transparent border-b border-primary-500 focus:border-primary-600 outline-none text-center"
              />
            ) : (
              <h1 className="text-xl sm:text-2xl font-bold text-primary-600">{userInfo.name}</h1>
            )}
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${loyaltyColor()} text-white`}>
                {userInfo.loyaltyLevel}
              </div>
              <span className="text-sm text-primary-400">{t('profile_member_since')} {userInfo.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-8">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary-600">{userInfo.totalBookings}</div>
            <div className="text-xs sm:text-sm text-primary-400">{t('profile_stats_bookings')}</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary-600">{favoriteProperties.length}</div>
            <div className="text-xs sm:text-sm text-primary-400">{t('profile_stats_favorites')}</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary-600">15</div>
            <div className="text-xs sm:text-sm text-primary-400">{t('profile_stats_reviews')}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 sm:gap-2 bg-white rounded-2xl p-1 shadow-soft mb-6">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'info' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('profile_tab_info')}
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'bookings' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('profile_tab_bookings')}
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'favorites' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('profile_tab_favorites')}
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'settings' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            {t('profile_tab_settings')}
          </button>
        </div>

        {/* Tab Content */}
        <div className="glass rounded-2xl p-4 sm:p-6 border border-primary-100">
          {activeTab === 'info' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-primary-600 mb-4">{t('profile_info_title')}</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-400">{t('profile_info_email')}</div>
                    <div className="font-medium text-primary-600">{userInfo.email}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-400">{t('profile_info_phone')}</div>
                    <div className="font-medium text-primary-600">{userInfo.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-400">{t('profile_info_address')}</div>
                    <div className="font-medium text-primary-600">{t('profile_info_address_value')}</div>
                  </div>
                </div>
              </div>
              
              {!editMode && (
                <button
                  onClick={() => setEditMode(true)}
                  className="w-full py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Edit2 className="w-5 h-5" />
                  {t('profile_edit')}
                </button>
              )}
              
              {editMode && (
                <div className="flex gap-3">
                  <button
                    onClick={() => setEditMode(false)}
                    className="flex-1 py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-400 transition-colors"
                  >
                    {t('profile_save')}
                  </button>
                  <button
                    onClick={() => setEditMode(false)}
                    className="flex-1 py-3 rounded-xl bg-primary-100 text-primary-600 font-medium hover:bg-primary-200 transition-colors"
                  >
                    {t('profile_cancel')}
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-primary-600 mb-4">{t('profile_bookings_title')}</h2>
              
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary-50/50"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-primary-600 truncate">{booking.property}</div>
                      <div className="flex items-center gap-2 text-xs text-primary-400 mt-0.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{booking.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-2xs font-medium ${getStatusColor(booking.status)}`}>
                        {t(`profile_booking_status_${booking.status}`)}
                      </div>
                      <div className="font-bold text-primary-600 mt-1">{formatPrice(booking.amount)}</div>
                    </div>
                  </div>
                ))}
              </div>

              {recentBookings.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-primary-400">{t('profile_no_bookings')}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'favorites' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-primary-600 mb-4">{t('profile_favorites_title')}</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {favoriteProperties.map((fav) => (
                  <div
                    key={fav.id}
                    className="relative bg-white rounded-xl overflow-hidden shadow-soft"
                  >
                    <img src={fav.image} alt={fav.name} className="w-full h-32 object-cover" />
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary-500 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    </button>
                    <div className="p-3">
                      <div className="font-medium text-primary-600 truncate">{fav.name}</div>
                      <div className="text-xs text-primary-400 mt-0.5">{fav.location}</div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 text-primary-500">
                          <Star className="w-3.5 h-3.5 fill-primary-500" />
                          <span className="text-sm">{fav.rating}</span>
                        </div>
                        <div className="font-bold text-primary-600">{formatPrice(fav.price)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {favoriteProperties.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-primary-400">{t('profile_no_favorites')}</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-primary-600 mb-4">{t('profile_settings_title')}</h2>
              
              <div className="space-y-3">
                {settingsOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => option.action === 'admin' && onAdmin && onAdmin()}
                      className="w-full flex items-center gap-3 p-3 rounded-xl bg-white border border-primary-50/50 text-left hover:bg-primary-50/50 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary-500" />
                      <span className="font-medium text-primary-600">{option.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-primary-50/50">
                <button
                  onClick={onSignOut}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500/10 text-red-500 font-medium hover:bg-red-500/20 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  {t('profile_signout')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sign Out Button */}
        {activeTab !== 'settings' && onSignOut && (
          <div className="mt-8">
            <button
              onClick={onSignOut}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-red-200 text-red-500 font-medium hover:bg-red-50/50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              {t('profile_signout')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
