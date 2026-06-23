import { useState, useRef, useEffect } from 'react';
import { 
  Home, Calendar, Users, AlertCircle, MessageSquare, 
  ArrowLeft, Settings, BarChart3, Bed, DollarSign,
  Bell, Send, Mic, Camera, Plus, Trash2, Edit2,
  Check, X, Clock, TrendingUp, TrendingDown
} from 'lucide-react';
import Panorama360 from '../components/Panorama360';

// Types pour les données de l'établissement
type RoomStatus = 'occupied' | 'available' | 'maintenance' | 'arrival';

type Room = {
  id: string;
  number: string;
  type: string;
  status: RoomStatus;
  price: number;
  capacity: number;
};

type Booking = {
  id: string;
  roomId: string;
  guestName: string;
  checkIn: Date;
  checkOut: Date;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  amount: number;
};

type Notification = {
  id: string;
  type: 'reservation' | 'payment' | 'maintenance' | 'recommendation';
  title: string;
  message: string;
  time: string;
  read: boolean;
};

// Données mockées (à remplacer par des appels API réels)
const mockRooms: Room[] = [
  { id: '1', number: '101', type: 'Standard', status: 'occupied', price: 50000, capacity: 2 },
  { id: '2', number: '102', type: 'Standard', status: 'available', price: 50000, capacity: 2 },
  { id: '3', number: '103', type: 'Deluxe', status: 'arrival', price: 80000, capacity: 3 },
  { id: '4', number: '104', type: 'Standard', status: 'occupied', price: 50000, capacity: 2 },
  { id: '5', number: '105', type: 'Suite', status: 'maintenance', price: 120000, capacity: 4 },
  { id: '6', number: '201', type: 'Standard', status: 'available', price: 50000, capacity: 2 },
  { id: '7', number: '202', type: 'Standard', status: 'occupied', price: 50000, capacity: 2 },
  { id: '8', number: '203', type: 'Deluxe', status: 'available', price: 80000, capacity: 3 },
];

const mockBookings: Booking[] = [
  { id: 'b1', roomId: '1', guestName: 'Jean Dupont', checkIn: new Date('2026-06-20'), checkOut: new Date('2026-06-25'), status: 'confirmed', amount: 250000 },
  { id: 'b2', roomId: '3', guestName: 'Marie Martin', checkIn: new Date('2026-06-22'), checkOut: new Date('2026-06-27'), status: 'pending', amount: 400000 },
  { id: 'b3', roomId: '4', guestName: 'Pierre Laurent', checkIn: new Date('2026-06-18'), checkOut: new Date('2026-06-22'), status: 'confirmed', amount: 200000 },
];

const mockNotifications: Notification[] = [
  { id: 'n1', type: 'payment', title: 'Paiement en attente', message: 'Paiement de 400 000 FCFA pour la réservation #b2', time: 'Il y a 2h', read: false },
  { id: 'n2', type: 'reservation', title: 'Nouvelle réservation', message: 'Nouvelle réservation pour la chambre 103', time: 'Il y a 5h', read: false },
  { id: 'n3', type: 'maintenance', title: 'Chambre en maintenance', message: 'La chambre 105 nécessite des réparations', time: 'Hier', read: true },
];

// Composant Carte Statistique
function StatCard({ icon: Icon, label, value, trend, trendValue }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}) {
  return (
    <div className="glass rounded-2xl p-4 border border-primary-100 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary-600" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-2xs font-medium ${
            trend === 'up' ? 'bg-green-500/10 text-green-600' :
            trend === 'down' ? 'bg-red-500/10 text-red-600' :
            'bg-primary-500/10 text-primary-600'
          }`}>
            {trend === 'up' && <TrendingUp className="w-3 h-3" />}
            {trend === 'down' && <TrendingDown className="w-3 h-3" />}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">{value}</div>
      <div className="text-sm text-primary-400">{label}</div>
    </div>
  );
}

// Composant Calendrier Intelligent
function SmartCalendar() {
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Générer les jours du mois
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Simuler des statuts de chambres pour le calendrier
  const getDayStatus = (day: number | null) => {
    if (!day) return 'empty';
    const today = currentDate.getDate();
    if (day === today) return 'today';
    if (day < today) return 'past';
    
    // Simuler des réservations
    const mockBookedDays = [15, 16, 17, 20, 21, 22, 25];
    if (mockBookedDays.includes(day)) return 'occupied';
    
    const mockArrivalDays = [15, 20, 25];
    if (mockArrivalDays.includes(day)) return 'arrival';
    
    const mockMaintenanceDays = [18];
    if (mockMaintenanceDays.includes(day)) return 'maintenance';
    
    return 'available';
  };

  const getStatusClasses = (status: string) => {
    switch (status) {
      case 'occupied': return 'bg-red-500 text-white';
      case 'arrival': return 'bg-yellow-500 text-white';
      case 'maintenance': return 'bg-gray-800 text-white';
      case 'today': return 'bg-primary-500 text-white ring-2 ring-primary-600 ring-offset-2';
      case 'past': return 'bg-primary-100 text-primary-400';
      default: return 'bg-green-500 text-white';
    }
  };

  return (
    <div className="glass rounded-2xl p-6 border border-primary-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-primary-600">Calendrier Intelligent</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-primary-400">
            {new Date(currentYear, currentMonth).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>
      
      {/* Légende */}
      <div className="flex items-center gap-4 mb-4 text-2xs flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-primary-400">Libre</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <span className="text-primary-400">Arrivée</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="text-primary-400">Occupé</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-gray-800"></div>
          <span className="text-primary-400">Maintenance</span>
        </div>
      </div>

      {/* Jours de la semaine */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-primary-400 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Jours du mois */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          if (!day) return <div key={index} className="aspect-square" />;
          const status = getDayStatus(day);
          return (
            <div 
              key={index}
              className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer hover:scale-105 transition-transform hover:z-10 hover:shadow-md ${
                getStatusClasses(status)
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Composant Liste des Chambres
function RoomsList({ rooms, onSelectRoom }: { rooms: Room[]; onSelectRoom: (room: Room) => void }) {
  const statusConfig = {
    occupied: { label: 'Occupée', color: 'bg-red-500/10 text-red-600', icon: Users },
    available: { label: 'Libre', color: 'bg-green-500/10 text-green-600', icon: Check },
    arrival: { label: 'Arrivée', color: 'bg-yellow-500/10 text-yellow-600', icon: Calendar },
    maintenance: { label: 'Maintenance', color: 'bg-gray-500/10 text-gray-600', icon: AlertCircle },
  };

  return (
    <div className="glass rounded-2xl p-6 border border-primary-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-primary-600">Chambres</h3>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-400 transition-colors">
          <Plus className="w-4 h-4" />
          Ajouter
        </button>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto scrollbar-hide">
        {rooms.map((room) => {
          const config = statusConfig[room.status];
          const StatusIcon = config.icon;
          
          return (
            <div 
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary-50/50 hover:border-primary-200 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                <Bed className="w-5 h-5 text-primary-600" />
                <span className="text-xs font-bold text-primary-600 absolute">{room.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-primary-600">{room.type}</span>
                  <span className="text-2xs px-2 py-0.5 rounded-full {config.color}">
                    {config.label}
                  </span>
                </div>
                <div className="text-xs text-primary-400 mt-0.5">
                  {room.capacity} personnes · {room.price.toLocaleString()} FCFA/nuit
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-primary-50/50 transition-colors">
                  <Edit2 className="w-4 h-4 text-primary-400" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Composant Notification
function NotificationItem({ notification }: { notification: Notification }) {
  const icons = {
    reservation: BarChart3,
    payment: DollarSign,
    maintenance: AlertCircle,
    recommendation: TrendingUp,
  };
  const Icon = icons[notification.type];

  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl border border-primary-50/50 ${
      !notification.read ? 'bg-primary-500/5' : 'bg-transparent'
    }`}>
      <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-primary-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <div className="font-medium text-primary-600 text-sm">{notification.title}</div>
          {!notification.read && (
            <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
          )}
        </div>
        <div className="text-sm text-primary-400 mt-0.5">{notification.message}</div>
        <div className="text-2xs text-primary-300 mt-1">{notification.time}</div>
      </div>
    </div>
  );
}

// Composant Assistant IA
function AIAssistant() {
  const [messages, setMessages] = useState<{text: string; sender: 'user' | 'ai'}[]>([
    { text: "Bonjour ! Je suis votre Copilote IA. Comment puis-je vous aider à gérer votre établissement aujourd'hui ?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simuler une réponse de l'IA
    setTimeout(() => {
      const responses = [
        "J'ai bloqué la chambre 105 pour maintenance jusqu'à dimanche.",
        "Vos revenus du mois sont de 2 350 000 FCFA, en hausse de 15% par rapport au mois dernier.",
        "J'ai créé 10 chambres standard et 3 suites comme demandé.",
        "La réservation de Jean Dupont est confirmée pour le 20 juin.",
        "Je recommande une réduction de 15% pour les mardis et mercredis afin d'améliorer votre taux d'occupation.",
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'ai' }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="glass rounded-2xl p-6 border border-primary-100 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-primary-600">Copilote IA</h3>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-primary-50/50 transition-colors">
            <Mic className="w-4 h-4 text-primary-400" />
          </button>
          <button className="p-2 rounded-lg hover:bg-primary-50/50 transition-colors">
            <Camera className="w-4 h-4 text-primary-400" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-96 scrollbar-hide">
        {messages.map((msg, index) => (
          <div 
            key={index}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs lg:max-w-md rounded-2xl px-4 py-3 ${
                msg.sender === 'user' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-white border border-primary-50/50 text-primary-600'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex items-center gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Demandez à votre copilote..."
            className="w-full pl-4 pr-12 py-3 rounded-xl bg-white border border-primary-100 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none text-primary-600 placeholder:text-primary-300"
          />
          <button 
            onClick={handleSend}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-400 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 mt-3">
        {[
          "Ajoute une chambre",
          "Montre les revenus",
          "Bloque la chambre 105",
          "Nouvelles réservations"
        ].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setInput(suggestion);
              setTimeout(handleSend, 100);
            }}
            className="px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm hover:bg-primary-500/20 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

// Composant principal Admin
interface AdminProps {
  onBack?: () => void;
}

export function Admin({ onBack }: AdminProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'rooms' | 'calendar' | 'bookings' | 'settings'>('dashboard');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showPanorama, setShowPanorama] = useState(false);

  // Calculer les statistiques
  const occupiedRooms = mockRooms.filter(r => r.status === 'occupied').length;
  const totalRooms = mockRooms.length;
  const totalRevenue = mockBookings.reduce((sum, b) => sum + b.amount, 0);
  const pendingPayments = mockBookings.filter(b => b.status === 'pending').length;
  const todayArrival = mockBookings.filter(b => {
    const today = new Date();
    return b.checkIn.getDate() === today.getDate() && 
           b.checkIn.getMonth() === today.getMonth() &&
           b.checkIn.getFullYear() === today.getFullYear();
  }).length;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-fog to-cream pt-16 sm:pt-20 md:pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </button>
          )}
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-600">
                Copilote Établissement
              </h1>
              <p className="text-primary-400 mt-1">
                Gérez votre établissement en moins de 5 minutes par jour
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl bg-white border border-primary-100 hover:bg-primary-50/50 transition-colors">
                <Bell className="w-5 h-5 text-primary-500" />
                {mockNotifications.filter(n => !n.read).length > 0 && (
                  <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-red-500"></span>
                )}
              </button>
              <button className="p-2 rounded-xl bg-white border border-primary-100 hover:bg-primary-50/50 transition-colors">
                <Settings className="w-5 h-5 text-primary-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs de navigation */}
        <div className="flex gap-1 sm:gap-2 bg-white rounded-2xl p-1 shadow-soft mb-6 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex-1 whitespace-nowrap py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'dashboard' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            Tableau de bord
          </button>
          <button
            onClick={() => setActiveTab('rooms')}
            className={`flex-1 whitespace-nowrap py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'rooms' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            Chambres
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex-1 whitespace-nowrap py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'calendar' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            Calendrier
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 whitespace-nowrap py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'bookings' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            Réservations
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 whitespace-nowrap py-2.5 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'settings' 
                ? 'bg-primary-500 text-white shadow-soft' 
                : 'text-primary-500 hover:bg-primary-50'
            }`}
          >
            Paramètres
          </button>
        </div>

        {/* Contenu principal */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* 4 Cartes principales */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <StatCard 
                icon={Home} 
                label="Chambres occupées" 
                value={`${occupiedRooms} / ${totalRooms}`}
                trend="up"
                trendValue="+12%"
              />
              <StatCard 
                icon={DollarSign} 
                label="Revenus du mois" 
                value={formatPrice(totalRevenue)}
                trend="up"
                trendValue="+15%"
              />
              <StatCard 
                icon={Calendar} 
                label="Arrivées aujourd'hui" 
                value={todayArrival}
              />
              <StatCard 
                icon={AlertCircle} 
                label="Actions requises" 
                value={pendingPayments + mockRooms.filter(r => r.status === 'maintenance').length}
                trend="down"
                trendValue="-3"
              />
            </div>

            {/* Assistant IA et Calendrier */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AIAssistant />
              <SmartCalendar />
            </div>

            {/* Notifications */}
            <div className="glass rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">Notifications récentes</h3>
              <div className="space-y-3">
                {mockNotifications.slice(0, 3).map((notification) => (
                  <NotificationItem key={notification.id} notification={notification} />
                ))}
              </div>
              {mockNotifications.length > 3 && (
                <button className="w-full py-3 mt-4 rounded-xl bg-primary-500/10 text-primary-500 font-medium hover:bg-primary-500/20 transition-colors">
                  Voir toutes les notifications
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'rooms' && (
          <div className="space-y-6">
            <RoomsList rooms={mockRooms} onSelectRoom={(room) => {
              setSelectedRoom(room);
              setShowPanorama(true);
            }} />

            {/* Modal Panorama 360 */}
            {showPanorama && selectedRoom && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] relative">
                  <button
                    onClick={() => {
                      setShowPanorama(false);
                      setSelectedRoom(null);
                    }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors z-10"
                  >
                    <X className="w-5 h-5 text-primary-500" />
                  </button>
                  
                  <div className="h-96 sm:h-[500px] rounded-2xl overflow-hidden">
                    <Panorama360 
                      panorama="/panorama-room.jpg" 
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-primary-600">{selectedRoom.type} - Chambre {selectedRoom.number}</h3>
                    <p className="text-primary-400 mt-1">
                      {selectedRoom.capacity} personnes · {selectedRoom.price.toLocaleString()} FCFA/nuit
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Statistiques des chambres */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="glass rounded-2xl p-4 border border-primary-100">
                <div className="text-lg font-bold text-primary-600">{mockRooms.filter(r => r.status === 'available').length}</div>
                <div className="text-sm text-primary-400">Libres</div>
              </div>
              <div className="glass rounded-2xl p-4 border border-primary-100">
                <div className="text-lg font-bold text-primary-600">{mockRooms.filter(r => r.status === 'maintenance').length}</div>
                <div className="text-sm text-primary-400">En maintenance</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="space-y-6">
            <SmartCalendar />
            
            {/* Réservations du jour */}
            <div className="glass rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">Réservations du jour</h3>
              <div className="space-y-3">
                {mockBookings
                  .filter(b => {
                    const today = new Date();
                    return b.checkIn.getDate() === today.getDate() && 
                           b.checkIn.getMonth() === today.getMonth() &&
                           b.checkIn.getFullYear() === today.getFullYear();
                  })
                  .map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-white rounded-xl border border-primary-50/50">
                      <div>
                        <div className="font-medium text-primary-600">{booking.guestName}</div>
                        <div className="text-sm text-primary-400">
                          Chambre {mockRooms.find(r => r.id === booking.roomId)?.number}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary-600">{formatPrice(booking.amount)}</div>
                        <div className="text-2xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 mt-1">
                          {booking.status}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-primary-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-primary-600">Toutes les réservations</h3>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-400 transition-colors">
                  <Plus className="w-4 h-4" />
                  Nouvelle
                </button>
              </div>
              
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary-50/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Bed className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-primary-600">{booking.guestName}</div>
                      <div className="text-xs text-primary-400 mt-0.5">
                        Chambre {mockRooms.find(r => r.id === booking.roomId)?.number} - 
                        {booking.checkIn.toLocaleDateString('fr-FR')} au {booking.checkOut.toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-600">{formatPrice(booking.amount)}</div>
                      <div className={`text-2xs px-2 py-0.5 rounded-full mt-1 ${
                        booking.status === 'confirmed' ? 'bg-green-500/10 text-green-600' :
                        booking.status === 'pending' ? 'bg-yellow-500/10 text-yellow-600' :
                        booking.status === 'cancelled' ? 'bg-red-500/10 text-red-600' :
                        'bg-primary-500/10 text-primary-600'
                      }`}>
                        {booking.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">Paramètres de l'établissement</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-primary-50/50">
                  <div>
                    <div className="font-medium text-primary-600">Nom de l'établissement</div>
                    <div className="text-sm text-primary-400">Hôtel Les Palmiers</div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-primary-50/50 transition-colors">
                    <Edit2 className="w-4 h-4 text-primary-400" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-primary-50/50">
                  <div>
                    <div className="font-medium text-primary-600">Catégorie</div>
                    <div className="text-sm text-primary-400">3 étoiles</div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-primary-50/50 transition-colors">
                    <Edit2 className="w-4 h-4 text-primary-400" />
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-primary-50/50">
                  <div>
                    <div className="font-medium text-primary-600">Adresse</div>
                    <div className="text-sm text-primary-400">Cocody, Abidjan</div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-primary-50/50 transition-colors">
                    <Edit2 className="w-4 h-4 text-primary-400" />
                  </button>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">Gestion du personnel</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { role: 'Réceptionniste', count: 3, color: 'bg-blue-500/10 text-blue-600' },
                  { role: 'Femme de chambre', count: 5, color: 'bg-purple-500/10 text-purple-600' },
                  { role: 'Manager', count: 1, color: 'bg-green-500/10 text-green-600' },
                  { role: 'Comptable', count: 1, color: 'bg-orange-500/10 text-orange-600' },
                ].map((item) => (
                  <div key={item.role} className="text-center p-4 bg-white rounded-xl border border-primary-50/50">
                    <div className="text-xl font-bold text-primary-600">{item.count}</div>
                    <div className={`text-sm ${item.color} mt-1`}>{item.role}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-600 mb-4">Visites virtuelles</h3>
              <p className="text-primary-400 mb-4">
                Gérez les visites 360° de vos chambres pour offrir une expérience immersive à vos clients.
              </p>
              <button
                onClick={() => setShowPanorama(true)}
                className="w-full py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-400 transition-colors flex items-center justify-center gap-2"
              >
                <Camera className="w-5 h-5" />
                Ajouter une visite 360°
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Panorama sans chambre sélectionnée */}
      {showPanorama && !selectedRoom && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] relative">
            <button
              onClick={() => setShowPanorama(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors z-10"
            >
              <X className="w-5 h-5 text-primary-500" />
            </button>
            
            <div className="h-96 sm:h-[500px] rounded-2xl overflow-hidden">
              <Panorama360 
                panorama="/panorama-example.jpg" 
                className="w-full h-full"
              />
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="font-bold text-primary-600">Visite virtuelle</h3>
              <p className="text-primary-400 mt-1">
                Ajoutez une image panoramique 360° pour cette visite
              </p>
              <button className="mt-4 px-6 py-2 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-400 transition-colors">
                Choisir une image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
