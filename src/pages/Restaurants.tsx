import { useState, useMemo } from 'react';
import { Search, MapPin, Star, Clock, Phone, Globe, ChevronDown, Filter, X } from 'lucide-react';
import { useI18n } from '../i18n';

// Types for restaurant data
interface RestaurantCategory {
  id: string;
  name: string;
  icon: string;
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  phone: string;
  openingHours: string;
  priceRange: string;
  image: string;
  latitude: number;
  longitude: number;
  distance?: number;
  isOpen: boolean;
  features: string[];
}

// Mock data for categories
const categories: RestaurantCategory[] = [
  { id: 'all', name: 'Tous', icon: '🍽️' },
  { id: 'african', name: 'Cuisine Africaine', icon: '🌍' },
  { id: 'french', name: 'Cuisine Française', icon: '🥖' },
  { id: 'seafood', name: 'Fruits de Mer', icon: '🦞' },
  { id: 'grill', name: 'Grillades', icon: '🍖' },
  { id: 'fastfood', name: 'Fast Food', icon: '🍔' },
  { id: 'cafe', name: 'Cafés', icon: '☕' },
  { id: 'bar', name: 'Bars', icon: '🍸' },
];

// Mock data for restaurants
const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Le N\'dolé',
    description: 'Cuisine ivoirienne authentique avec des plats traditionnels comme l\'attiéké et le poisson braisé.',
    category: 'african',
    rating: 4.7,
    reviewCount: 248,
    address: '123 Rue de la Liberté, Abidjan',
    city: 'Abidjan',
    phone: '+225 07 01 23 45 67',
    openingHours: '10h00 - 23h00',
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
    latitude: 5.3598,
    longitude: -4.0088,
    isOpen: true,
    features: ['Wi-Fi', 'Terrasse', 'Climatisation', 'Plats végétariens'],
  },
  {
    id: '2',
    name: 'La Baignoire',
    description: 'Fine cuisine française dans un cadre élégant. Parfait pour les occasions spéciales.',
    category: 'french',
    rating: 4.8,
    reviewCount: 312,
    address: '456 Avenue du Plateau, Abidjan',
    city: 'Abidjan',
    phone: '+225 07 02 34 56 78',
    openingHours: '12h00 - 15h00, 19h00 - 23h30',
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
    latitude: 5.3650,
    longitude: -4.0150,
    isOpen: true,
    features: ['Wi-Fi', 'Parking', 'Terrasse', 'Réservation en ligne'],
  },
  {
    id: '3',
    name: 'Chez Ramage',
    description: 'Fruits de mer frais au bord du lagon. Vue imprenable sur l\'eau.',
    category: 'seafood',
    rating: 4.6,
    reviewCount: 198,
    address: '789 Boulevard du Lagon, Assinie',
    city: 'Assinie',
    phone: '+225 07 03 45 67 89',
    openingHours: '11h00 - 22h00',
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    latitude: 5.2833,
    longitude: -3.9833,
    isOpen: true,
    features: ['Vue sur mer', 'Terrasse', 'Plats locaux'],
  },
  {
    id: '4',
    name: 'Le Grilladin',
    description: 'Meilleures grillades de la ville avec viandes fraîches et sauces maison.',
    category: 'grill',
    rating: 4.5,
    reviewCount: 176,
    address: '321 Rue des Commerçants, Yopougon',
    city: 'Abidjan',
    phone: '+225 07 04 56 78 90',
    openingHours: '18h00 - 02h00',
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop',
    latitude: 5.3450,
    longitude: -4.0300,
    isOpen: true,
    features: ['Bar', 'Musique live', 'Écran TV'],
  },
  {
    id: '5',
    name: 'Café de Paris',
    description: 'Café français avec pâtisseries maison et café de qualité.',
    category: 'cafe',
    rating: 4.4,
    reviewCount: 145,
    address: '654 Avenue de la République, Cocody',
    city: 'Abidjan',
    phone: '+225 07 05 67 89 01',
    openingHours: '07h00 - 20h00',
    priceRange: '$',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    latitude: 5.3750,
    longitude: -4.0200,
    isOpen: true,
    features: ['Wi-Fi', 'Climatisation', 'Petit-déjeuner'],
  },
  {
    id: '6',
    name: 'Pizzeria Bella Napoli',
    description: 'Pizzas artisanales cuites au feu de bois, pâtes fraîches et salades.',
    category: 'fastfood',
    rating: 4.3,
    reviewCount: 98,
    address: '987 Rue de la Paix, Marcory',
    city: 'Abidjan',
    phone: '+225 07 06 78 90 12',
    openingHours: '11h00 - 23h00',
    priceRange: '$',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    latitude: 5.3300,
    longitude: -4.0400,
    isOpen: false,
    features: ['Livraison', 'Emporter', 'Plats enfants'],
  },
  {
    id: '7',
    name: 'Sky Bar & Lounge',
    description: 'Bar rooftop avec vue panoramique sur la ville. Cocktails et tapas.',
    category: 'bar',
    rating: 4.6,
    reviewCount: 210,
    address: 'Roof Top Hotel, Plateau',
    city: 'Abidjan',
    phone: '+225 07 07 89 01 23',
    openingHours: '17h00 - 03h00',
    priceRange: '$$$',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop',
    latitude: 5.3500,
    longitude: -4.0100,
    isOpen: true,
    features: ['Vue panoramique', 'DJ Set', 'Happy Hour'],
  },
  {
    id: '8',
    name: 'Au Vieux Port',
    description: 'Restaurant de poisson grillé au bord de la lagune, ambiance détendue.',
    category: 'seafood',
    rating: 4.5,
    reviewCount: 156,
    address: 'Boulevard de la Corniche, Port-Bouët',
    city: 'Abidjan',
    phone: '+225 07 08 90 12 34',
    openingHours: '12h00 - 22h00',
    priceRange: '$$',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop',
    latitude: 5.2900,
    longitude: -4.0000,
    isOpen: true,
    features: ['Vue sur lagune', 'Terrasse', 'Plats de poisson frais'],
  },
];

const priceRanges = [
  { id: 'all', label: 'Tous les budgets' },
  { id: '$', label: 'Économique' },
  { id: '$$', label: 'Moyen' },
  { id: '$$$', label: 'Haut de gamme' },
];

const sortOptions = [
  { id: 'recommended', label: 'Recommandés' },
  { id: 'rating', label: 'Meilleure note' },
  { id: 'distance', label: 'Plus proches' },
  { id: 'name', label: 'Nom (A-Z)' },
];

interface RestaurantsProps {
  onBack?: () => void;
  onViewRestaurant?: (restaurant: Restaurant) => void;
}

export function Restaurants({ onBack, onViewRestaurant }: RestaurantsProps) {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('recommended');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter restaurants based on search and filters
  const filteredRestaurants = useMemo(() => {
    return mockRestaurants.filter((restaurant) => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategory === 'all' || restaurant.category === selectedCategory;
      
      // Price range filter
      const matchesPrice = selectedPriceRange === 'all' || restaurant.priceRange === selectedPriceRange;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedPriceRange]);

  // Sort restaurants
  const sortedRestaurants = useMemo(() => {
    const restaurants = [...filteredRestaurants];
    
    switch (selectedSort) {
      case 'rating':
        return restaurants.sort((a, b) => b.rating - a.rating);
      case 'distance':
        // Mock distance sorting - in real app would use GPS
        return restaurants.sort((a, b) => (a.distance || 0) - (b.distance || 0));
      case 'name':
        return restaurants.sort((a, b) => a.name.localeCompare(b.name));
      default:
        // Recommended - sort by rating and review count
        return restaurants.sort((a, b) => {
          if (b.rating !== a.rating) return b.rating - a.rating;
          return b.reviewCount - a.reviewCount;
        });
    }
  }, [filteredRestaurants, selectedSort]);

  const category = categories.find(c => c.id === selectedCategory);
  const priceRange = priceRanges.find(p => p.id === selectedPriceRange);
  const sortOption = sortOptions.find(s => s.id === selectedSort);

  const getCategoryIcon = (categoryId: string) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.icon : '🍽️';
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="relative z-10">
        {/* Search bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un restaurant, une spécialité..."
              className="w-full pl-12 pr-4 py-4 rounded-3xl border border-primary-100 bg-white text-primary-600 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base shadow-soft"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 mt-4">
            {/* Category filter */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-primary-100 text-primary-500 text-sm font-medium hover:bg-primary-50 transition-colors"
            >
              <span>{category?.icon} {category?.name || 'Catégorie'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Price filter */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-primary-100 text-primary-500 text-sm font-medium hover:bg-primary-50 transition-colors"
            >
              <span>{priceRange?.label || 'Budget'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Sort */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-primary-100 text-primary-500 text-sm font-medium hover:bg-primary-50 transition-colors"
            >
              <span>↕️ {sortOption?.label || 'Trier par'}</span>
            </button>

            {/* Clear filters */}
            {(searchQuery !== '' || selectedCategory !== 'all' || selectedPriceRange !== 'all' || selectedSort !== 'recommended') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                  setSelectedSort('recommended');
                }}
                className="flex items-center gap-1 px-4 py-2 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
              >
                <X className="w-4 h-4" />
                Réinitialiser
              </button>
            )}
          </div>
        </div>

        {/* Results count */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <p className="text-sm text-primary-500">
            {sortedRestaurants.length} {sortedRestaurants.length === 1 ? 'restaurant trouvé' : 'restaurants trouvés'}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        {/* Categories grid for mobile/desktop */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-primary-500 mb-3">Catégories populaires</h3>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 sm:-mx-6 px-4 sm:px-6 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary-500 text-white shadow-soft'
                    : 'bg-white border border-primary-100 text-primary-500 hover:bg-primary-50'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Restaurants grid */}
        <div className="space-y-6">
          {sortedRestaurants.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">Aucun restaurant trouvé</h3>
              <p className="text-primary-500 text-sm">Essayez de modifier vos critères de recherche</p>
            </div>
          ) : (
            sortedRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => onViewRestaurant?.(restaurant)}
                className="bg-white rounded-2xl shadow-soft border border-primary-50 overflow-hidden hover:shadow-soft-lg transition-shadow cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 sm:h-48 flex-shrink-0">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 sm:h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary-600 mb-1">{restaurant.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-primary-500 mb-2">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-gold" fill="currentColor" />
                            {restaurant.rating.toFixed(1)}
                          </span>
                          <span>• {restaurant.reviewCount} avis</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {restaurant.city}
                          </span>
                          <span className={restaurant.isOpen ? 'text-emerald-600' : 'text-warning'}>
                            {restaurant.isOpen ? 'Ouvert' : 'Fermé'}
                          </span>
                        </div>
                      </div>
                      <span className="text-gold font-semibold text-sm">{restaurant.priceRange}</span>
                    </div>

                    <p className="text-sm text-primary-500 line-clamp-2 mb-3">{restaurant.description}</p>

                    <div className="flex items-center gap-4 text-2xs text-primary-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {restaurant.openingHours}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        {restaurant.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>{getCategoryIcon(restaurant.category)}</span>
                        {categories.find(c => c.id === restaurant.category)?.name}
                      </span>
                    </div>

                    {restaurant.features.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {restaurant.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-primary-50 text-primary-500 text-2xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-6 w-12 h-12 bg-primary-500 text-white rounded-full shadow-soft-lg hover:bg-primary-600 transition-colors flex items-center justify-center ring-focus z-50"
      >
        ↑
      </button>
    </div>
  );
}

export default Restaurants;

export type { Restaurant };