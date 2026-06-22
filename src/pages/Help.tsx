import { useMemo, useState } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageSquare,
  BookOpen,
  Shield,
  ArrowLeft,
  Clock,
} from 'lucide-react';
import { useI18n } from '../i18n';

interface HelpProps {
  onBack?: () => void;
}

type QA = {
  q: string;
  a: string;
};

type Category = {
  id: string;
  title: string;
  icon: any;
  questions: QA[];
};

export function Help({ onBack }: HelpProps) {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // ✅ safe translation helper (évite crash undefined)
  const safeT = (key: string) => t(key) ?? '';

  // ✅ data stable (pas recalculée inutilement)
  const faqCategories: Category[] = useMemo(
    () => [
      {
        id: 'reservations',
        title: safeT('help_category_reservations'),
        icon: Clock,
        questions: [
          { q: safeT('help_q1'), a: safeT('help_a1') },
          { q: safeT('help_q2'), a: safeT('help_a2') },
          { q: safeT('help_q3'), a: safeT('help_a3') },
        ],
      },
      {
        id: 'payments',
        title: safeT('help_category_payments'),
        icon: Shield,
        questions: [
          { q: safeT('help_q4'), a: safeT('help_a4') },
          { q: safeT('help_q5'), a: safeT('help_a5') },
          { q: safeT('help_q6'), a: safeT('help_a6') },
        ],
      },
      {
        id: 'properties',
        title: safeT('help_category_properties'),
        icon: BookOpen,
        questions: [
          { q: safeT('help_q7'), a: safeT('help_a7') },
          { q: safeT('help_q8'), a: safeT('help_a8') },
          { q: safeT('help_q9'), a: safeT('help_a9') },
        ],
      },
      {
        id: 'account',
        title: safeT('help_category_account'),
        icon: MessageSquare,
        questions: [
          { q: safeT('help_q10'), a: safeT('help_a10') },
          { q: safeT('help_q11'), a: safeT('help_a11') },
          { q: safeT('help_q12'), a: safeT('help_a12') },
        ],
      },
    ],
    [t]
  );

  const contactMethods = [
    {
      icon: Mail,
      title: safeT('help_contact_email'),
      description: 'support@hotelapp.com',
    },
    {
      icon: Phone,
      title: safeT('help_contact_phone'),
      description: '+225 01 23 45 67 89',
    },
    {
      icon: MessageSquare,
      title: safeT('help_contact_chat'),
      description: safeT('help_contact_chat_desc'),
    },
  ];

  const query = searchQuery.toLowerCase().trim();

  // ✅ SAFE FILTER (aucun crash possible)
  const filteredCategories = useMemo(() => {
    if (!query) return faqCategories;

    return faqCategories
      .map((category) => ({
        ...category,
        questions: category.questions.filter((q) => {
          const question = (q.q ?? '').toLowerCase();
          const answer = (q.a ?? '').toLowerCase();

          return question.includes(query) || answer.includes(query);
        }),
      }))
      .filter((c) => c.questions.length > 0);
  }, [faqCategories, query]);

  const toggleCategory = (id: string) => {
    setExpandedCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fog via-cream to-fog pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 md:pb-28">

        {/* HEADER */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{safeT('help_back')}</span>
            </button>
          )}

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-600">
                {safeT('help_title')}
              </h1>
              <p className="text-primary-400 mt-1">
                {safeT('help_subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-primary-400" />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={safeT('help_search_placeholder')}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-primary-100 rounded-2xl"
          />
        </div>

        {/* FAQ */}
        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-bold text-primary-600 mb-4">
            {safeT('help_faq')}
          </h2>

          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.id}
                  className="glass rounded-2xl border border-primary-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary-500" />
                      <span className="font-semibold text-primary-600">
                        {category.title}
                      </span>
                    </div>

                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {expandedCategory === category.id && (
                    <div className="px-4 pb-4 space-y-3">
                      {category.questions.map((item, index) => (
                        <div
                          key={index}
                          className="glass rounded-xl p-3 border border-primary-50/50"
                        >
                          <h3 className="font-medium text-primary-600 mb-1">
                            {item.q}
                          </h3>
                          <p className="text-sm text-primary-400">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-primary-400">
              {safeT('help_no_results')}
            </div>
          )}
        </div>

        {/* CONTACT */}
        <div className="glass rounded-2xl p-6 border border-primary-100">
          <h2 className="text-lg font-bold text-primary-600 mb-4">
            {safeT('help_contact_title')}
          </h2>

          <div className="space-y-4">
            {contactMethods.map((m, i) => {
              const Icon = m.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-3 rounded-xl bg-primary-50/50"
                >
                  <Icon className="w-6 h-6 text-primary-500" />
                  <div>
                    <h3 className="font-medium text-primary-600">
                      {m.title}
                    </h3>
                    <p className="text-sm text-primary-400">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Help;