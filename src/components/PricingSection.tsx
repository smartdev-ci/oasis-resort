import { useState } from 'react';
import { Check, Crown, Star, Zap, Shield, Info } from 'lucide-react';
import { useI18n } from '../i18n';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  recommendedFor: string;
}

export function PricingSection() {
  const { t } = useI18n();
  const [annualBilling, setAnnualBilling] = useState(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: 'standard',
      name: t('pricing_standard'),
      price: annualBilling ? '200,000' : '20,000',
      period: annualBilling ? t('pricing_year') : t('pricing_month'),
      description: t('pricing_standard_desc'),
      features: [
        t('pricing_feature_1'),
        t('pricing_feature_2'),
        t('pricing_feature_3'),
        t('pricing_feature_4'),
        t('pricing_feature_5'),
        t('pricing_standard_limit'),
      ],
      recommendedFor: t('pricing_standard_for'),
    },
    {
      id: 'extra',
      name: t('pricing_extra'),
      price: annualBilling ? '350,000' : '35,000',
      period: annualBilling ? t('pricing_year') : t('pricing_month'),
      description: t('pricing_extra_desc'),
      features: [
        t('pricing_feature_1'),
        t('pricing_feature_2'),
        t('pricing_feature_3'),
        t('pricing_feature_4'),
        t('pricing_feature_5'),
        t('pricing_feature_6'),
        t('pricing_extra_limit'),
      ],
      popular: true,
      recommendedFor: t('pricing_extra_for'),
    },
    {
      id: 'premium',
      name: t('pricing_premium'),
      price: annualBilling ? '500,000' : '50,000',
      period: annualBilling ? t('pricing_year') : t('pricing_month'),
      description: t('pricing_premium_desc'),
      features: [
        t('pricing_feature_1'),
        t('pricing_feature_2'),
        t('pricing_feature_3'),
        t('pricing_feature_4'),
        t('pricing_feature_5'),
        t('pricing_feature_6'),
        t('pricing_feature_7'),
        t('pricing_premium_limit'),
      ],
      recommendedFor: t('pricing_premium_for'),
    },
  ];

  const formatPrice = (price: string) => {
    return `${price} FCFA`;
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-cream via-fog to-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">{t('pricing_saas')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-4">
            {t('pricing_title')}
          </h2>
          <p className="text-lg text-primary-400 max-w-3xl mx-auto">
            {t('pricing_subtitle')}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 bg-white rounded-2xl p-1 shadow-soft">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                !annualBilling
                  ? 'bg-primary-500 text-white shadow-soft'
                  : 'text-primary-500 hover:bg-primary-50'
              }`}
            >
              {t('pricing_monthly')}
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                annualBilling
                  ? 'bg-primary-500 text-white shadow-soft'
                  : 'text-primary-500 hover:bg-primary-50'
              }`}
            >
              {t('pricing_annual')}
              <span className="ml-1 px-2 py-0.5 bg-gold/20 text-gold text-2xs font-medium rounded-full">
                {t('pricing_save', { discount: '20%' })}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative glass rounded-3xl p-8 border ${plan.popular ? 'border-gold shadow-soft-2xl' : 'border-primary-100/50'} flex flex-col`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-gold to-gold-light rounded-full text-sm font-bold text-primary-600 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    {t('pricing_popular')}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary-600 flex items-center gap-2">
                  {plan.name}
                  {plan.popular && <Crown className="w-5 h-5 text-gold" />}
                </h3>
                <p className="text-sm text-primary-400 mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold text-primary-600">
                    {formatPrice(plan.price)}
                  </span>
                  <span className="text-primary-400 font-medium">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 mb-8">
                <h4 className="font-semibold text-primary-600 mb-4">{t('pricing_features')}</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary-500" />
                      </div>
                      <span className="text-sm text-primary-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended For */}
              <div className="mb-6 p-3 rounded-xl bg-primary-50/50">
                <div className="flex items-center gap-2 text-xs text-primary-400">
                  <Info className="w-4 h-4" />
                  <span>{t('pricing_recommended_for')} <strong className="text-primary-600">{plan.recommendedFor}</strong></span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 px-6 rounded-2xl text-sm font-bold transition-all shadow-lg hover:shadow-xl ${
                  plan.popular
                    ? 'bg-gradient-to-r from-gold to-gold-light text-primary-600 hover:opacity-90'
                    : 'bg-primary-500 text-white hover:bg-primary-400'
                }`}
              >
                {t('pricing_get_started')}
              </button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-600">{t('pricing_guarantee')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
