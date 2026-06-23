import { useState, useCallback, useEffect } from 'react';
import { type Property, properties as allProperties } from './data/properties';
import { Header } from './components/ui/Header';
import { BottomNav } from './components/ui/BottomNav';
import { Hero } from './components/Hero';
import { AIDiscovery } from './components/AIDiscovery';
import { SmartMap } from './components/SmartMap';
import { ConversationalSection } from './components/ConversationalSection';
import { FeatureSection } from './components/FeatureSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { SearchResults } from './pages/SearchResults';
import { PropertyDetails } from './pages/PropertyDetails';
import { Checkout } from './pages/Checkout';
import { Compare } from './pages/Compare';
import { Concierge } from './pages/Concierge';
import { Discover } from './pages/Discover';
import { SignIn } from './pages/SignIn';
import { Register } from './pages/Register';
import { Restaurants } from './pages/Restaurants';
import { Help } from './pages/Help';
import { Experiences } from './pages/Experiences';
import { Travel } from './pages/Travel';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';

type Page =
  | 'home'
  | 'search'
  | 'details'
  | 'checkout'
  | 'compare'
  | 'concierge'
  | 'discover'
  | 'restaurants'
  | 'explore'
  | 'trips'
  | 'messages'
  | 'profile'
  | 'help'
  | 'experiences'
  | 'signin'
  | 'register'
  | 'admin';

function App() {
  // Synchroniser l'URL avec le state page
  const getPageFromPath = useCallback((): Page => {
    const path = window.location.pathname.substring(1) || 'home';
    const validPages: Page[] = ['home', 'search', 'details', 'checkout', 'compare', 'concierge', 'discover', 'restaurants', 'explore', 'trips', 'messages', 'profile', 'help', 'experiences', 'signin', 'register', 'admin'];
    return validPages.includes(path as Page) ? (path as Page) : 'home';
  }, []);

  const [page, setPage] = useState<Page>(getPageFromPath);
  const [chatOpen, setChatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);

  // Synchroniser l'URL quand page change
  useEffect(() => {
    window.history.replaceState({}, '', `/${page}`);
  }, [page]);

  // Écouter les changements d'URL (boutons avant/arrière)
  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getPageFromPath]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleViewProperty = useCallback((property: Property) => {
    setSelectedProperty(property);
    setPage('details');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleBook = useCallback((property: Property) => {
    setSelectedProperty(property);
    setPage('checkout');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleCompareAdd = useCallback((property: Property) => {
    setCompareList((prev) => {
      if (prev.includes(property.id)) return prev.filter((id) => id !== property.id);
      if (prev.length >= 4) return prev;
      return [...prev, property.id];
    });
  }, []);

  const handleNavigate = useCallback((target: string) => {
    const knownPages: Page[] = [
      'home', 'search', 'details', 'checkout', 'compare',
      'concierge', 'discover', 'restaurants', 'explore', 'trips', 'messages', 'profile', 'help', 'experiences', 'signin', 'register', 'admin',
    ];
    if (knownPages.includes(target as Page)) {
      if (target === 'explore') {
        setPage('experiences');
      } else {
        setPage(target as Page);
      }
    } else {
      setPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const compareProperties = allProperties.filter((p) => compareList.includes(p.id));

  return (
    <div className="min-h-screen bg-cream antialiased">
      <Header onOpenChat={() => setChatOpen(true)} onNavigate={handleNavigate} />

      {page === 'home' && (
        <>
          <Hero onSearch={handleSearch} onSuggestion={handleSearch} />
          <AIDiscovery
            properties={allProperties.slice(0, 6)}
            onBook={handleBook}
            onView={handleViewProperty}
            onAskAI={() => setChatOpen(true)}
          />
          <SmartMap onSelectArea={() => handleSearch('Hotels in Abidjan for business travelers')} />
          <ConversationalSection />
          <FeatureSection />
          <PricingSection />
        </>
      )}

      {page === 'discover' && (
        <Discover onBook={() => setPage('search')} />
      )}

      {page === 'restaurants' && (
        <Restaurants onBack={() => setPage('home')} />
      )}

      {page === 'help' && (
        <Help onBack={() => setPage('home')} />
      )}

      {page === 'experiences' && (
        <Experiences onBack={() => setPage('home')} />
      )}

      {page === 'trips' && (
        <Travel onBack={() => setPage('home')} />
      )}

      {page === 'profile' && (
        <Profile onBack={() => setPage('home')} onSignOut={() => setPage('home')} onAdmin={() => setPage('admin')} />
      )}

      {page === 'admin' && (
        <Admin onBack={() => setPage('home')} />
      )}

      {page === 'signin' && (
        <SignIn
          onBack={() => setPage('home')}
          onSignIn={async (email, password) => {
            // Mock authentication - replace with real auth logic
            console.log('Signing in with:', email, password);
            await new Promise(resolve => setTimeout(resolve, 1000));
            return true; // Return true for success, false for failure
          }}
          onSignUp={() => setPage('register')}
        />
      )}

      {page === 'register' && (
        <Register
          onBack={() => setPage('signin')}
          onSignUp={async (name, email, password, phone) => {
            // Mock registration - replace with real auth logic
            console.log('Registering with:', name, email, password, phone);
            await new Promise(resolve => setTimeout(resolve, 1000));
            return true; // Return true for success, false for failure
          }}
          onSignIn={() => setPage('signin')}
        />
      )}

      {page === 'search' && (
        <SearchResults
          properties={allProperties}
          query={searchQuery}
          onBack={() => setPage('home')}
          onBook={handleBook}
          onView={handleViewProperty}
          onCompare={handleCompareAdd}
          onAskAI={() => setChatOpen(true)}
        />
      )}

      {page === 'details' && selectedProperty && (
        <PropertyDetails
          property={selectedProperty}
          onBack={() => setPage('search')}
          onBook={handleBook}
          onCompare={handleCompareAdd}
          onAskAI={() => setChatOpen(true)}
        />
      )}

      {page === 'checkout' && selectedProperty && (
        <Checkout
          property={selectedProperty}
          onBack={() => setPage('details')}
          onComplete={() => setPage('concierge')}
        />
      )}

      {page === 'compare' && (
        <Compare
          properties={compareProperties}
          onBack={() => setPage('search')}
          onRemove={(id) => setCompareList((prev) => prev.filter((p) => p !== id))}
          onBook={handleBook}
        />
      )}

      {page === 'concierge' && selectedProperty && (
        <Concierge property={selectedProperty} onBack={() => setPage('home')} />
      )}

      {/* Compare floating bar */}
      {compareList.length > 0 && page !== 'compare' && (
        <div className="fixed bottom-20 sm:bottom-6 left-4 right-4 sm:left-auto z-40 animate-slide-up">
          <div className="glass rounded-2xl p-3 shadow-soft-2xl flex items-center gap-3 max-w-md mx-auto">
            <div className="flex -space-x-2">
              {compareProperties.slice(0, 3).map((p) => (
                <div key={p.id} className="w-9 h-9 rounded-full border-2 border-cream overflow-hidden">
                  <img src={p.images[0].url} alt={p.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex-1 text-sm">
              <div className="font-semibold text-primary-600">{compareList.length} sélectionnés</div>
              <div className="text-2xs text-primary-400">L'IA recommandera le meilleur</div>
            </div>
            <button
              onClick={() => { setPage('compare'); window.scrollTo({ top: 0 }); }}
              className="px-4 py-2 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-400 transition-colors"
            >
              Comparer
            </button>
          </div>
        </div>
      )}

      <Footer />

      <AIAssistant
        open={chatOpen}
        onToggle={() => setChatOpen(!chatOpen)}
        properties={allProperties}
        onView={handleViewProperty}
      />

      <BottomNav
        active={page}
        onNavigate={handleNavigate}
        onOpenChat={() => setChatOpen(true)}
      />
    </div>
  );
}

export default App;
