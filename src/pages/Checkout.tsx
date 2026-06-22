import { useState } from 'react';
import {
  ArrowLeft, ArrowRight, Check, Sparkles, Smartphone, CreditCard,
  Shield, Minus, Plus, Calendar, Users, PartyPopper,
} from 'lucide-react';
import { type Property } from '../data/properties';
import { paymentMethods } from '../data/properties';
import { useI18n } from '../i18n';

interface CheckoutProps {
  property: Property;
  onBack: () => void;
  onComplete: () => void;
}

// Stable internal step keys — not translated
type StepKey = 'property' | 'room' | 'payment';
const STEPS: StepKey[] = ['property', 'room', 'payment'];

export function Checkout({ property, onBack, onComplete }: CheckoutProps) {
  const { t } = useI18n();
  const [step, setStep] = useState<StepKey>('property');
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(1);
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(3);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
  const [processing, setProcessing] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const rooms = [
    {
      id: 'standard',
      name: t('room_standard'),
      size: '28m²',
      beds: t('room_bed_queen'),
      priceModifier: 0,
      features: [t('room_feature_city'), t('room_feature_wifi'), t('room_feature_desk')],
    },
    {
      id: 'deluxe',
      name: t('room_deluxe'),
      size: '36m²',
      beds: t('room_bed_king'),
      priceModifier: 25000,
      features: [t('room_feature_pool'), t('room_feature_wifi'), t('room_feature_balcony'), t('room_feature_minibar')],
    },
    {
      id: 'suite',
      name: t('room_suite'),
      size: '52m²',
      beds: t('room_bed_suite'),
      priceModifier: 60000,
      features: [t('room_feature_ocean'), t('room_feature_wifi'), t('room_feature_living'), t('room_feature_bath'), t('room_feature_coffee')],
    },
  ];

  const selectedRoom = rooms[selectedRoomIdx];
  const basePrice = (property.pricePerNight + selectedRoom.priceModifier) * nights;
  const serviceFee = Math.round(basePrice * 0.08);
  const total = basePrice + serviceFee;

  const stepLabels: Record<StepKey, string> = {
    property: t('checkout_step_property'),
    room: t('checkout_step_room'),
    payment: t('checkout_step_payment'),
  };

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setConfirmed(true);
      setTimeout(() => onComplete(), 2000);
    }, 2200);
  };

  const nextStep = () => {
    if (step === 'property') setStep('room');
    else if (step === 'room') setStep('payment');
    else handlePay();
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center animate-scale-in">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-soft-2xl">
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
            <div className="absolute -top-2 -right-2">
              <PartyPopper className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h1 className="text-3xl font-display font-bold text-primary-600 mb-3">{t('checkout_confirmed_title')}</h1>
          <p className="text-primary-400 mb-6">
            {t('checkout_confirmed_text')} {property.name} {t('checkout_confirmed_text2')}
          </p>
          <div className="bg-white rounded-2xl p-4 shadow-soft text-left space-y-2 mb-6">
            <div className="flex justify-between text-sm"><span className="text-primary-400">{t('checkout_confirmed_checkin')}</span><span className="font-medium text-primary-600">{t('checkout_tomorrow')}, 14:00</span></div>
            <div className="flex justify-between text-sm"><span className="text-primary-400">{t('checkout_confirmed_checkout')}</span><span className="font-medium text-primary-600">{t('checkout_in_days')} {nights} {t('checkout_days')}</span></div>
            <div className="flex justify-between text-sm"><span className="text-primary-400">{t('checkout_confirmed_room')}</span><span className="font-medium text-primary-600">{selectedRoom.name}</span></div>
            <div className="flex justify-between text-sm"><span className="text-primary-400">{t('checkout_confirmed_total')}</span><span className="font-medium text-primary-600">{new Intl.NumberFormat('fr-FR').format(total)} FCFA</span></div>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary-400 text-sm">
            <Sparkles className="w-4 h-4 animate-pulse-soft" />
            {t('checkout_opening_concierge')}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-16 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <button onClick={onBack} className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors mb-6 ring-focus rounded-full px-2 py-1">
          <ArrowLeft className="w-4.5 h-4.5" />
          <span className="text-sm font-medium">{t('details_back')}</span>
        </button>

        {/* Progress */}
        <div className="flex items-center justify-between max-w-md mx-auto mb-8">
          {STEPS.map((s, idx) => {
            const isActive = step === s;
            const isDone = STEPS.indexOf(step) > idx;
            return (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-primary-500 text-white shadow-soft' : isDone ? 'bg-primary-200 text-primary-500' : 'bg-primary-100 text-primary-400'}`}>
                    {isDone ? <Check className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`text-2xs mt-1.5 font-medium ${isActive ? 'text-primary-600' : 'text-primary-300'}`}>{stepLabels[s]}</span>
                </div>
                {idx < STEPS.length - 1 && <div className={`w-16 sm:w-24 h-0.5 mx-2 ${isDone ? 'bg-primary-300' : 'bg-primary-100'}`} />}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Main content */}
          <div className="space-y-6">
            {/* Step 1 — Property */}
            {step === 'property' && (
              <div className="bg-white rounded-3xl p-6 shadow-soft animate-fade-in">
                <h2 className="font-display font-bold text-xl text-primary-600 mb-4">{t('checkout_confirm')}</h2>
                <div className="flex gap-4">
                  <img src={property.images[0].url} alt={property.name} className="w-24 h-24 rounded-2xl object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-primary-600">{property.name}</h3>
                    <p className="text-sm text-primary-400">{property.area}, {property.city}</p>
                    <p className="text-xs text-primary-300 mt-1">{property.distanceFromLandmark}</p>
                  </div>
                </div>
                {/* Dates */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-4 rounded-2xl border border-primary-100">
                    <div className="text-2xs text-primary-300 font-medium mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {t('checkout_checkin')}</div>
                    <div className="text-sm font-semibold text-primary-600">{t('checkout_tomorrow')}</div>
                    <div className="text-xs text-primary-400">14:00</div>
                  </div>
                  <div className="p-4 rounded-2xl border border-primary-100">
                    <div className="text-2xs text-primary-300 font-medium mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> {t('checkout_checkout')}</div>
                    <div className="text-sm font-semibold text-primary-600">{t('checkout_in_days')} {nights} {t('checkout_days')}</div>
                    <div className="text-xs text-primary-400">11:00</div>
                  </div>
                </div>
                {/* Guests & Nights */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-4 rounded-2xl border border-primary-100 flex items-center justify-between">
                    <div>
                      <div className="text-2xs text-primary-300 font-medium mb-0.5 flex items-center gap-1"><Users className="w-3 h-3" /> {t('details_guests')}</div>
                      <span className="text-sm font-semibold text-primary-600">{guests}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100"><Minus className="w-3.5 h-3.5" /></button>
                      <button onClick={() => setGuests(guests + 1)} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl border border-primary-100 flex items-center justify-between">
                    <div>
                      <div className="text-2xs text-primary-300 font-medium mb-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> {t('details_nights')}</div>
                      <span className="text-sm font-semibold text-primary-600">{nights}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => setNights(Math.max(1, nights - 1))} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100"><Minus className="w-3.5 h-3.5" /></button>
                      <button onClick={() => setNights(nights + 1)} className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 hover:bg-primary-100"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                </div>
                {/* AI tip */}
                <div className="mt-4 p-4 rounded-2xl bg-primary-50/60 border border-primary-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-primary-500 leading-relaxed">
                    <span className="font-semibold text-primary-600">{t('checkout_ai_tip')}</span>{' '}
                    {t('checkout_ai_tip_text')} {property.roomsLeft} {t('checkout_rooms_left')}.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2 — Room */}
            {step === 'room' && (
              <div className="bg-white rounded-3xl p-6 shadow-soft animate-fade-in">
                <h2 className="font-display font-bold text-xl text-primary-600 mb-4">{t('checkout_choose_room')}</h2>
                <div className="space-y-3">
                  {rooms.map((room, idx) => {
                    const isSelected = selectedRoomIdx === idx;
                    const roomPrice = (property.pricePerNight + room.priceModifier) * nights;
                    return (
                      <button
                        key={room.id}
                        onClick={() => setSelectedRoomIdx(idx)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${isSelected ? 'border-primary-400 bg-primary-50/50 shadow-soft' : 'border-primary-100 hover:border-primary-200'}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-primary-600">{room.name}</h3>
                              {isSelected && (
                                <span className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-xs text-primary-400 mb-2">
                              <span>{room.size}</span>
                              <span>·</span>
                              <span>{room.beds}</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {room.features.map((f) => (
                                <span key={f} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-50 text-primary-400 text-2xs font-medium">
                                  <Check className="w-2.5 h-2.5" />
                                  {f}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-sm font-bold text-primary-600">
                              {new Intl.NumberFormat('fr-FR').format(roomPrice)} FCFA
                            </div>
                            <div className="text-2xs text-primary-300">
                              {t('room_for_nights')} {nights} {t('room_nights')}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* AI recommendation */}
                <div className="mt-4 p-4 rounded-2xl bg-gold/10 border border-gold/30 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-primary-500 leading-relaxed">
                    <span className="font-semibold text-gold">{t('checkout_ai_rec')}</span>{' '}
                    {t('checkout_ai_room_rec')}
                  </p>
                </div>
              </div>
            )}

            {/* Step 3 — Payment */}
            {step === 'payment' && (
              <div className="bg-white rounded-3xl p-6 shadow-soft animate-fade-in">
                <h2 className="font-display font-bold text-xl text-primary-600 mb-4">{t('checkout_payment_method')}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {paymentMethods.map((method) => {
                    const isSelected = paymentMethod === method.id;
                    return (
                      <button
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${isSelected ? 'border-primary-400 bg-primary-50/50 shadow-soft' : 'border-primary-100 hover:border-primary-200'}`}
                      >
                        {method.id === 'visa' || method.id === 'mastercard' ? (
                          <CreditCard className="w-6 h-6" style={{ color: method.color }} />
                        ) : (
                          <Smartphone className="w-6 h-6" style={{ color: method.color }} />
                        )}
                        <span className="text-xs font-medium text-primary-500 text-center">{method.name}</span>
                        {isSelected && (
                          <span className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* Input */}
                <div className="mt-6">
                  {(paymentMethod === 'visa' || paymentMethod === 'mastercard') ? (
                    <div className="space-y-3">
                      <input type="text" placeholder={t('checkout_card_number')} className="w-full px-4 py-3 rounded-xl border border-primary-100 text-primary-600 placeholder:text-primary-300 ring-focus focus:border-primary-300" />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder={t('checkout_card_expiry')} className="px-4 py-3 rounded-xl border border-primary-100 text-primary-600 placeholder:text-primary-300 ring-focus focus:border-primary-300" />
                        <input type="text" placeholder={t('checkout_card_cvc')} className="px-4 py-3 rounded-xl border border-primary-100 text-primary-600 placeholder:text-primary-300 ring-focus focus:border-primary-300" />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <input type="tel" placeholder={t('checkout_mobile_placeholder')} className="w-full px-4 py-3 rounded-xl border border-primary-100 text-primary-600 placeholder:text-primary-300 ring-focus focus:border-primary-300" />
                      <p className="text-2xs text-primary-300">{t('checkout_mobile_hint')}</p>
                    </div>
                  )}
                </div>
                {/* Security */}
                <div className="mt-6 flex items-center gap-2 p-3 rounded-2xl bg-primary-50/60">
                  <Shield className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <p className="text-xs text-primary-400">{t('checkout_security')}</p>
                </div>
              </div>
            )}

            {/* CTA button */}
            <button
              onClick={nextStep}
              disabled={processing}
              className="w-full py-4 rounded-2xl bg-primary-500 hover:bg-primary-400 text-white font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-soft hover:shadow-soft-lg ring-focus disabled:opacity-60"
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('checkout_processing')}
                </>
              ) : step === 'payment' ? (
                <>{t('checkout_pay')} {new Intl.NumberFormat('fr-FR').format(total)} FCFA</>
              ) : (
                <>{t('checkout_continue')} <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </div>

          {/* AI Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-4 shadow-soft sticky top-24">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center shadow-soft">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-semibold text-primary-600">{t('checkout_ai_assistant')}</span>
              </div>
              <p className="text-xs text-primary-400 leading-relaxed mb-3">{t('checkout_ai_here')}</p>
              <div className="space-y-1.5">
                {[t('checkout_ask_breakfast'), t('checkout_ask_installments'), t('checkout_ask_transfer')].map((q) => (
                  <button key={q} className="w-full text-left px-3 py-2 rounded-xl bg-primary-50 hover:bg-primary-100 text-xs font-medium text-primary-500 transition-colors">
                    {q}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center bg-primary-50/60 rounded-full px-3 py-2">
                <input type="text" placeholder={t('checkout_ask_placeholder')} className="flex-1 bg-transparent text-xs text-primary-600 placeholder:text-primary-300 ring-focus focus:outline-none" />
                <ArrowRight className="w-3.5 h-3.5 text-primary-400" />
              </div>
            </div>

            {/* Price summary */}
            <div className="bg-white rounded-3xl p-5 shadow-soft">
              <h3 className="font-semibold text-primary-600 mb-3">{t('checkout_price_summary')}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-primary-400">
                  <span>{selectedRoom.name}</span>
                  <span>{new Intl.NumberFormat('fr-FR').format(basePrice)} FCFA</span>
                </div>
                <div className="flex justify-between text-primary-400">
                  <span>{nights} {t('checkout_for_nights')} × {guests}</span>
                  <span>—</span>
                </div>
                <div className="flex justify-between text-primary-400">
                  <span>{t('details_service_fee')}</span>
                  <span>{new Intl.NumberFormat('fr-FR').format(serviceFee)} FCFA</span>
                </div>
                <div className="h-px bg-primary-50 my-2" />
                <div className="flex justify-between font-bold text-primary-600">
                  <span>{t('details_total')}</span>
                  <span>{new Intl.NumberFormat('fr-FR').format(total)} FCFA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
