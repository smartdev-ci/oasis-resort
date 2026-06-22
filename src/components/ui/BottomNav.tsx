import { Home, Compass, Plane, MessageCircle, User, Map } from 'lucide-react';
import { useI18n } from '../../i18n';

interface BottomNavProps {
  active: string;
  onNavigate: (page: string) => void;
  onOpenChat: () => void;
}

export function BottomNav({ active, onNavigate, onOpenChat }: BottomNavProps) {
  const { t } = useI18n();

  const items = [
    { id: 'home', icon: Home, label: t('nav_home') },
    { id: 'discover', icon: Map, label: t('nav_discover') },
    { id: 'trips', icon: Plane, label: t('nav_trips') },
    { id: 'messages', icon: MessageCircle, label: t('nav_messages') },
    { id: 'profile', icon: User, label: t('nav_profile') },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-white/40">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          if (idx === 2) {
            return (
              <div key="center-group" className="flex items-center gap-0">
                <NavItem key={item.id} id={item.id} icon={item.icon} label={item.label} isActive={isActive} onNavigate={onNavigate} />
                {/* AI center button */}
                <button
                  onClick={onOpenChat}
                  className="flex flex-col items-center -mt-6 px-2"
                  aria-label="Open AI assistant"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft-2xl ring-4 ring-cream active:scale-95 transition-transform">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>
            );
          }
          if (idx === 3) {
            return (
              <NavItem key={item.id} id={item.id} icon={Icon} label={item.label} isActive={isActive} onNavigate={onNavigate} />
            );
          }
          return (
            <NavItem key={item.id} id={item.id} icon={Icon} label={item.label} isActive={isActive} onNavigate={onNavigate} />
          );
        })}
      </div>
    </nav>
  );
}

function NavItem({ id, icon: Icon, label, isActive, onNavigate }: {
  id: string;
  icon: typeof Home;
  label: string;
  isActive: boolean;
  onNavigate: (p: string) => void;
}) {
  return (
    <button
      onClick={() => onNavigate(id)}
      className="flex flex-col items-center gap-0.5 px-3 py-1 ring-focus rounded-lg"
    >
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isActive ? 'bg-primary-500 text-white' : 'text-primary-400'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className={`text-2xs font-medium ${isActive ? 'text-primary-600' : 'text-primary-300'}`}>{label}</span>
    </button>
  );
}
