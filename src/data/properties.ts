export interface PropertyImage {
  url: string;
  alt: string;
}

export interface ReviewAnalysis {
  overallSentiment: number;
  reviewCount: number;
  strengths: string[];
  weaknesses: string[];
  summary: string;
  guestBreakdown: {
    label: string;
    sentiment: number;
  }[];
}

export interface Property {
  id: string;
  name: string;
  type: 'Hotel' | 'Resort' | 'Villa' | 'Apartment' | 'Lodge' | 'Boutique';
  city: string;
  country: string;
  area: string;
  areaType: 'business' | 'tourist' | 'nightlife' | 'family' | 'beachfront';
  pricePerNight: number;
  currency: 'FCFA';
  rating: number;
  reviewCount: number;
  images: PropertyImage[];
  aiSummary: string;
  aiBadge: string;
  amenities: string[];
  mobileMoneyAccepted: boolean;
  paymentMethods: string[];
  distanceFromLandmark: string;
  coordinates: { x: number; y: number };
  available: boolean;
  roomsLeft?: number;
  bestFor: string[];
  reviewAnalysis: ReviewAnalysis;
}

const img = (url: string, alt: string): PropertyImage => ({ url, alt });

export const properties: Property[] = [
  {
    id: 'p1',
    name: 'Sofitel Abidjan Hôtel Ivoire',
    type: 'Hotel',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    area: 'Cocody',
    areaType: 'business',
    pricePerNight: 145000,
    currency: 'FCFA',
    rating: 4.8,
    reviewCount: 2847,
    images: [
      img('https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg', 'Piscine hôtel'),
      img('https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg', 'Chambre luxe'),
      img('https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg', 'Lobby'),
    ],
    aiSummary: 'Idéal pour les voyages d’affaires à Cocody avec vue sur la lagune.',
    aiBadge: 'Top business Abidjan',
    amenities: ['Wi-Fi', 'Piscine', 'Spa', 'Restaurant', 'Bar', 'Salle de réunion'],
    mobileMoneyAccepted: true,
    paymentMethods: ['Orange Money', 'MTN Money', 'Wave', 'Visa'],
    distanceFromLandmark: 'Cocody Centre',
    coordinates: { x: 35, y: 40 },
    available: true,
    roomsLeft: 6,
    bestFor: ['Business', 'Conférences'],
    reviewAnalysis: {
      overallSentiment: 92,
      reviewCount: 2847,
      summary: 'Excellent hôtel pour les séjours professionnels à Abidjan.',
      strengths: ['Propreté', 'Service', 'Wi-Fi rapide'],
      weaknesses: ['Parking limité'],
      guestBreakdown: [
        { label: 'Business', sentiment: 95 },
        { label: 'Touristes', sentiment: 88 },
      ],
    },
  },
  {
    id: 'p2',
    name: 'Assinie Beach Resort Abidjan',
    type: 'Resort',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    area: 'Assinie (Grand Abidjan)',
    areaType: 'beachfront',
    pricePerNight: 85000,
    currency: 'FCFA',
    rating: 4.6,
    reviewCount: 1563,
    images: [
      img('https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg', 'Plage'),
      img('https://images.pexels.com/photos/1450362/pexels-photo-1450362.jpeg', 'Vue mer'),
      img('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', 'Spa'),
    ],
    aiSummary: 'Parfait pour une escapade romantique à Assinie près d’Abidjan.',
    aiBadge: 'Romantique plage',
    amenities: ['Plage privée', 'Piscine', 'Spa', 'Restaurant'],
    mobileMoneyAccepted: true,
    paymentMethods: ['Orange Money', 'MTN Money', 'Wave', 'Visa'],
    distanceFromLandmark: 'Plage d’Assinie',
    coordinates: { x: 65, y: 70 },
    available: true,
    roomsLeft: 3,
    bestFor: ['Couples', 'Lune de miel'],
    reviewAnalysis: {
      overallSentiment: 88,
      reviewCount: 1563,
      summary: 'Très apprécié pour les séjours romantiques près d’Abidjan.',
      strengths: ['Vue mer', 'Ambiance calme'],
      weaknesses: ['Menu limité'],
      guestBreakdown: [{ label: 'Couples', sentiment: 93 }],
    },
  },
  {
    id: 'p3',
    name: 'Lodge Plateau Business Abidjan',
    type: 'Lodge',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    area: 'Plateau',
    areaType: 'business',
    pricePerNight: 92000,
    currency: 'FCFA',
    rating: 4.7,
    reviewCount: 1928,
    images: [
      img('https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg', 'Plateau vue'),
      img('https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg', 'Chambre'),
    ],
    aiSummary: 'Idéal pour digital nomads au cœur du Plateau.',
    aiBadge: 'Business hub',
    amenities: ['Wi-Fi fibre', 'Co-working', 'Restaurant'],
    mobileMoneyAccepted: false,
    paymentMethods: ['Visa', 'Mastercard'],
    distanceFromLandmark: 'Plateau centre',
    coordinates: { x: 25, y: 65 },
    available: true,
    roomsLeft: 4,
    bestFor: ['Travail', 'Séjours longs'],
    reviewAnalysis: {
      overallSentiment: 90,
      reviewCount: 1928,
      summary: 'Très bon pour les professionnels à Abidjan Plateau.',
      strengths: ['Internet rapide', 'Emplacement'],
      weaknesses: ['Parking limité'],
      guestBreakdown: [{ label: 'Nomades digitaux', sentiment: 94 }],
    },
  },
  {
    id: 'p4',
    name: 'Villa Cocody Family House',
    type: 'Villa',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    area: 'Cocody Angré',
    areaType: 'family',
    pricePerNight: 68000,
    currency: 'FCFA',
    rating: 4.5,
    reviewCount: 843,
    images: [
      img('https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 'Villa extérieure'),
      img('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg', 'Salon'),
    ],
    aiSummary: 'Grande villa familiale avec piscine à Cocody Angré.',
    aiBadge: 'Family friendly',
    amenities: ['Piscine', 'Cuisine', 'Jardin'],
    mobileMoneyAccepted: true,
    paymentMethods: ['Orange Money', 'Wave', 'Visa'],
    distanceFromLandmark: 'Angré 8e tranche',
    coordinates: { x: 55, y: 30 },
    available: true,
    roomsLeft: 2,
    bestFor: ['Familles'],
    reviewAnalysis: {
      overallSentiment: 86,
      reviewCount: 843,
      summary: 'Parfait pour familles à Abidjan Cocody.',
      strengths: ['Espace', 'Piscine'],
      weaknesses: ['Wi-Fi moyen'],
      guestBreakdown: [{ label: 'Familles', sentiment: 91 }],
    },
  },
  {
    id: 'p5',
    name: 'Boutique Hôtel Marcory Lagoon',
    type: 'Boutique',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    area: 'Marcory',
    areaType: 'nightlife',
    pricePerNight: 48000,
    currency: 'FCFA',
    rating: 4.9,
    reviewCount: 3201,
    images: [
      img('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg', 'Terrasse'),
      img('https://images.pexels.com/photos/1144893/pexels-photo-1144893.jpeg', 'Rooftop'),
    ],
    aiSummary: 'Hôtel boutique moderne à Marcory avec rooftop.',
    aiBadge: 'Nightlife hotspot',
    amenities: ['Rooftop', 'Bar', 'Wi-Fi'],
    mobileMoneyAccepted: false,
    paymentMethods: ['Visa', 'Mastercard'],
    distanceFromLandmark: 'Zone 4 Marcory',
    coordinates: { x: 18, y: 20 },
    available: true,
    roomsLeft: 5,
    bestFor: ['Couples', 'Sorties'],
    reviewAnalysis: {
      overallSentiment: 94,
      reviewCount: 3201,
      summary: 'Très apprécié pour les sorties à Marcory.',
      strengths: ['Ambiance', 'Design'],
      weaknesses: ['Parking'],
      guestBreakdown: [{ label: 'Couples', sentiment: 93 }],
    },
  },
  {
    id: 'p6',
    name: 'Appartement Moderne Koumassi',
    type: 'Apartment',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    area: 'Koumassi',
    areaType: 'business',
    pricePerNight: 35000,
    currency: 'FCFA',
    rating: 4.3,
    reviewCount: 678,
    images: [
      img('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', 'Appartement'),
      img('https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', 'Salon moderne'),
    ],
    aiSummary: 'Appartement moderne à Koumassi pour séjours économiques.',
    aiBadge: 'Best value',
    amenities: ['Cuisine', 'Wi-Fi', 'Parking'],
    mobileMoneyAccepted: true,
    paymentMethods: ['Orange Money', 'MTN Money', 'Wave', 'Visa'],
    distanceFromLandmark: 'Marché de Koumassi',
    coordinates: { x: 40, y: 48 },
    available: true,
    roomsLeft: 8,
    bestFor: ['Budget', 'Business'],
    reviewAnalysis: {
      overallSentiment: 81,
      reviewCount: 678,
      summary: 'Bon rapport qualité prix à Koumassi.',
      strengths: ['Prix', 'Emplacement'],
      weaknesses: ['Isolation sonore'],
      guestBreakdown: [{ label: 'Budget', sentiment: 88 }],
    },
  },
];

// Suggestions
export const quickSuggestions = [
  { label: 'Plage Assinie', icon: 'waves', prompt: 'Trouve un hôtel à Assinie près d’Abidjan avec vue mer' },
  { label: 'Business Plateau', icon: 'briefcase', prompt: 'Hôtel business au Plateau Abidjan avec Wi-Fi rapide' },
  { label: 'Week-end romantique', icon: 'heart', prompt: 'Séjour romantique à Abidjan avec spa et piscine' },
  { label: 'Famille Cocody', icon: 'users', prompt: 'Villa familiale à Cocody avec piscine' },
  { label: 'Dernière minute', icon: 'zap', prompt: 'Hôtel disponible ce soir à Abidjan' },
];

// Map areas (Abidjan uniquement)
export const mapAreaHighlights = [
  { type: 'business', label: 'Plateau', color: '#1A3A2A', count: 24 },
  { type: 'tourist', label: 'Cocody', color: '#40916C', count: 38 },
  { type: 'nightlife', label: 'Marcory / Zone 4', color: '#E9A825', count: 16 },
  { type: 'family', label: 'Yopougon / Koumassi', color: '#74C69D', count: 22 },
  { type: 'beachfront', label: 'Assinie', color: '#10B981', count: 12 },
];

export const paymentMethods = [
  { id: 'orange', name: 'Orange Money', icon: 'orange', color: '#FF6600', textColor: 'white' },
  { id: 'mtn', name: 'MTN Money', icon: 'mtn', color: '#FFCC00', textColor: '#1A3A2A' },
  { id: 'wave', name: 'Wave', icon: 'wave', color: '#1DC8FF', textColor: 'white' },
  { id: 'visa', name: 'Visa', icon: 'visa', color: '#1A1F71', textColor: 'white' },
  { id: 'mastercard', name: 'Mastercard', icon: 'mastercard', color: '#EB001B', textColor: 'white' },
];

export const cityPins = [
  { name: 'Abidjan',    country: "Côte d'Ivoire", lat: 5.3599,   lng: -4.0082,  properties: 142, areaType: 'business'  as const },
  { name: 'Dakar',     country: 'Sénégal',        lat: 14.7167,  lng: -17.4677, properties: 87,  areaType: 'tourist'   as const },
  { name: 'Accra',     country: 'Ghana',          lat: 5.5560,   lng: -0.1969,  properties: 95,  areaType: 'tourist'   as const },
  { name: 'Lagos',     country: 'Nigeria',        lat: 6.5244,   lng: 3.3792,   properties: 203, areaType: 'business'  as const },
  { name: 'Nairobi',   country: 'Kenya',          lat: -1.2921,  lng: 36.8219,  properties: 118, areaType: 'business'  as const },
  { name: 'Le Cap',    country: 'Afrique du Sud', lat: -33.9249, lng: 18.4241,  properties: 156, areaType: 'tourist'   as const },
  { name: 'Marrakech', country: 'Maroc',          lat: 31.6295,  lng: -7.9811,  properties: 134, areaType: 'tourist'   as const },
  { name: 'Le Caire',  country: 'Égypte',         lat: 30.0444,  lng: 31.2357,  properties: 178, areaType: 'heritage'  as const },
];