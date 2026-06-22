import { useState } from 'react';
import { Sparkles, Map, Calendar, Star, Heart, ArrowLeft, Users, Camera, Compass, Sun, Moon, TreePalm } from 'lucide-react';
import { useI18n } from '../i18n';

interface ExperiencesProps {
  onBack?: () => void;
  onBook?: (experience: any) => void;
}

interface Experience {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  duration: string;
  price: number;
  image: string;
  location: string;
  popular: boolean;
}

export function Experiences({ onBack, onBook }: ExperiencesProps) {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('experiences_all'), icon: Sparkles },
    { id: 'culture', label: t('experiences_culture'), icon: TreePalm },
    { id: 'adventure', label: t('experiences_adventure'), icon: Compass },
    { id: 'gastronomy', label: t('experiences_gastronomy'), icon: Users },
    { id: 'wellness', label: t('experiences_wellness'), icon: Sun },
  ];

  const experiences: Experience[] = [
    {
      id: '1',
      title: t('experience_1_title'),
      description: t('experience_1_desc'),
      category: 'culture',
      rating: 4.8,
      duration: '3h',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      location: t('experience_loc_abidjan'),
      popular: true,
    },
    {
      id: '2',
      title: t('experience_2_title'),
      description: t('experience_2_desc'),
      category: 'adventure',
      rating: 4.9,
      duration: '8h',
      price: 120000,
      image: 'https://images.unsplash.com/photo-1544737151-6e4b9d1b4d9a?w=400&h=300&fit=crop',
      location: t('experience_loc_grand_bassam'),
      popular: true,
    },
    {
      id: '3',
      title: t('experience_3_title'),
      description: t('experience_3_desc'),
      category: 'gastronomy',
      rating: 4.7,
      duration: '2h',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
      location: t('experience_loc_plateau'),
      popular: true,
    },
    {
      id: '4',
      title: t('experience_4_title'),
      description: t('experience_4_desc'),
      category: 'wellness',
      rating: 4.9,
      duration: '2h',
      price: 75000,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      location: t('experience_loc_yopougon'),
      popular: false,
    },
    {
      id: '5',
      title: t('experience_5_title'),
      description: t('experience_5_desc'),
      category: 'culture',
      rating: 4.6,
      duration: '4h',
      price: 60000,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
      location: t('experience_loc_cocody'),
      popular: false,
    },
    {
      id: '6',
      title: t('experience_6_title'),
      description: t('experience_6_desc'),
      category: 'adventure',
      rating: 4.8,
      duration: '6h',
      price: 85000,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
      location: t('experience_loc_assinie'),
      popular: true,
    },
  ];

  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(e => e.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fog via-cream to-fog pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24 md:pb-28">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t('experiences_back')}</span>
            </button>
          )}
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-soft">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-600">{t('experiences_title')}</h1>
              <p className="text-primary-400 mt-1">{t('experiences_subtitle')}</p>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-8 shadow-soft-lg">
          <img 
            src="https://images.unsplash.com/photo-1537905569824-f8951e6e5396?w=1200&h=400&fit=crop"
            alt={t('experiences_banner_alt')}
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:left-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{t('experiences_banner_title')}</h2>
            <p className="text-white/80 text-sm sm:text-base">{t('experiences_banner_subtitle')}</p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-primary-600 mb-4">{t('experiences_categories')}</h2>
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 sm:-mx-6 px-4 sm:px-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all whitespace-nowrap ring-focus ${
                    activeCategory === cat.id 
                      ? 'bg-primary-500 text-white shadow-soft' 
                      : 'bg-white text-primary-500 hover:bg-primary-50 border border-primary-100'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Popular Experiences */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-primary-600 mb-4">{t('experiences_popular')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredExperiences.filter(e => e.popular).map((experience) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience}
                onBook={onBook}
                formatPrice={formatPrice}
              />
            ))}
          </div>
        </div>

        {/* All Experiences */}
        <div>
          <h2 className="text-lg font-bold text-primary-600 mb-4">{t('experiences_all_title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {filteredExperiences.map((experience) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience}
                onBook={onBook}
                formatPrice={formatPrice}
              />
            ))}
          </div>
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
              <Compass className="w-8 h-8 text-primary-300" />
            </div>
            <h3 className="text-lg font-bold text-primary-600 mb-2">{t('experiences_no_results')}</h3>
            <p className="text-primary-400">{t('experiences_no_results_sub')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ExperienceCard({ experience, onBook, formatPrice }: { 
  experience: Experience; 
  onBook?: (experience: any) => void;
  formatPrice: (price: number) => string;
}) {
  const { t } = useI18n();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow">
      <div className="relative h-40 sm:h-48">
        <img 
          src={experience.image} 
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-primary-600">
          {experience.location}
        </div>
        
        {/* Favorite button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary-500 hover:text-red-500 transition-colors"
        >
          <Heart className={`w-4.5 h-4.5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
        
        {/* Popular badge */}
        {experience.popular && (
          <div className="absolute top-3 right-16 px-2 py-0.5 rounded-full bg-gold text-white text-2xs font-medium whitespace-nowrap">
            {t('experiences_popular_badge')}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-primary-600 text-sm sm:text-base line-clamp-1">{experience.title}</h3>
            <p className="text-2xs sm:text-xs text-primary-400 line-clamp-2">{experience.description}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-primary-500">
              <Star className="w-3.5 h-3.5 fill-primary-500" />
              <span>{experience.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-primary-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{experience.duration}</span>
            </div>
          </div>
          <div className="font-bold text-primary-600">
            {formatPrice(experience.price)}
          </div>
        </div>
        
        {onBook && (
          <button
            onClick={() => onBook(experience)}
            className="w-full mt-3 py-2.5 px-4 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-400 transition-colors"
          >
            {t('experiences_book')}
          </button>
        )}
      </div>
    </div>
  );
}

export default Experiences;
