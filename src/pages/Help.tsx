import { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, Mail, Phone, MessageSquare, BookOpen, Shield, ArrowLeft, Clock } from 'lucide-react';
import { useI18n } from '../i18n';

interface HelpProps {
  onBack?: () => void;
}

export function Help({ onBack }: HelpProps) {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'reservations',
      title: t('help_category_reservations'),
      icon: Clock,
      questions: [
        { q: t('help_q1'), a: t('help_a1') },
        { q: t('help_q2'), a: t('help_a2') },
        { q: t('help_q3'), a: t('help_a3') },
      ],
    },
    {
      id: 'payments',
      title: t('help_category_payments'),
      icon: Shield,
      questions: [
        { q: t('help_q4'), a: t('help_a4') },
        { q: t('help_q5'), a: t('help_a5') },
        { q: t('help_q6'), a: t('help_a6') },
      ],
    },
    {
      id: 'properties',
      title: t('help_category_properties'),
      icon: BookOpen,
      questions: [
        { q: t('help_q7'), a: t('help_a7') },
        { q: t('help_q8'), a: t('help_a8') },
        { q: t('help_q9'), a: t('help_a9') },
      ],
    },
    {
      id: 'account',
      title: t('help_category_account'),
      icon: MessageSquare,
      questions: [
        { q: t('help_q10'), a: t('help_a10') },
        { q: t('help_q11'), a: t('help_a11') },
        { q: t('help_q12'), a: t('help_a12') },
      ],
    },
  ];

  const contactMethods = [
    { icon: Mail, title: t('help_contact_email'), description: 'support@hotelapp.com' },
    { icon: Phone, title: t('help_contact_phone'), description: '+225 01 23 45 67 89' },
    { icon: MessageSquare, title: t('help_contact_chat'), description: t('help_contact_chat_desc') },
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(c => c.questions.length > 0);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-fog via-cream to-fog pt-16 sm:pt-20 md:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 md:pb-28">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t('help_back')}</span>
            </button>
          )}
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary-600">{t('help_title')}</h1>
              <p className="text-primary-400 mt-1">{t('help_subtitle')}</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-primary-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('help_search_placeholder')}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-primary-100 rounded-2xl text-primary-600 placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-4 mb-10">
          <h2 className="text-lg font-bold text-primary-600 mb-4">{t('help_faq')}</h2>
          
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div
                key={category.id}
                className="glass rounded-2xl border border-primary-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-primary-600">{category.title}</span>
                  </div>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-primary-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary-400" />
                  )}
                </button>

                {expandedCategory === category.id && (
                  <div className="px-4 pb-4 space-y-3">
                    {category.questions.map((item, index) => (
                      <div
                        key={index}
                        className="glass rounded-xl p-3 border border-primary-50/50"
                      >
                        <h3 className="font-medium text-primary-600 mb-1">{item.q}</h3>
                        <p className="text-sm text-primary-400">{item.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary-300" />
              </div>
              <p className="text-primary-400">{t('help_no_results')}</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="glass rounded-2xl p-6 border border-primary-100">
          <h2 className="text-lg font-bold text-primary-600 mb-4">{t('help_contact_title')}</h2>
          <p className="text-primary-400 mb-6">{t('help_contact_subtitle')}</p>
          
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-xl bg-primary-50/50 hover:bg-primary-50/80 transition-colors"
              >
                <method.icon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-primary-600">{method.title}</h3>
                  <p className="text-sm text-primary-400">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-6 glass rounded-2xl border border-primary-100">
          <h3 className="font-bold text-primary-600 mb-2">{t('help_tips_title')}</h3>
          <ul className="space-y-2 text-sm text-primary-400">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
              {t('help_tip1')}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
              {t('help_tip2')}
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0" />
              {t('help_tip3')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Help;
