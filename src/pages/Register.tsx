import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Loader2, Phone } from 'lucide-react';
import { useI18n } from '../i18n';
import { Logo } from '../components/ui/Logo';

interface RegisterProps {
  onBack?: () => void;
  onSignUp: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
  onSignIn?: () => void;
}

export function Register({ onBack, onSignUp, onSignIn }: RegisterProps) {
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (password !== confirmPassword) {
      setError(t('signup_password_mismatch'));
      return;
    }
    
    if (!termsAccepted) {
      setError('Vous devez accepter les conditions générales');
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await onSignUp(name, email, password, phone || undefined);
      if (success) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhone('');
        setTermsAccepted(false);
      } else {
        setError(t('signup_error'));
      }
    } catch {
      setError(t('signup_error'));
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = name.trim() !== '' && 
                    email.trim() !== '' && 
                    password.trim() !== '' && 
                    confirmPassword.trim() !== '' &&
                    password === confirmPassword &&
                    termsAccepted;

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream via-fog to-cream flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="relative w-full max-w-md mx-auto z-10">
          <div className="glass-dark rounded-5xl p-8 sm:p-10 shadow-soft-2xl border border-primary-100/20 text-center animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <Logo size="lg" variant="light" />
            </div>
            
            <div className="w-16 h-16 bg-emerald-accent rounded-full flex items-center justify-center mx-auto mb-6">
              ✅
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('signup_title')}
            </h1>
            <p className="text-primary-200 text-sm sm:text-base mb-6">
              Votre compte a été créé avec succès !
            </p>
            
            <button
              onClick={onSignIn}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-accent to-primary-500 text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl ring-focus"
            >
              {t('signin_button')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-fog to-cream flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Decorative floating shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-primary-100 rounded-4xl opacity-50 blur-2xl animate-float" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-accent rounded-5xl opacity-40 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-5 w-16 h-16 bg-gold rounded-3xl opacity-40 blur-2xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative w-full max-w-md mx-auto z-10">
        {/* Card container */}
        <div className="glass-dark rounded-5xl p-8 sm:p-10 shadow-soft-2xl border border-primary-100/20 animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Logo size="lg" variant="light" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {t('signup_title')}
            </h1>
            <p className="text-primary-200 text-sm sm:text-base">
              {t('signup_subtitle')}
            </p>
          </div>

          {/* Social sign up buttons */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white text-primary-600 font-medium text-sm sm:text-base hover:bg-primary-50 transition-colors ring-focus shadow-soft"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>{t('signup_with_google')}</span>
            </button>
            
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl bg-white text-primary-600 font-medium text-sm sm:text-base hover:bg-primary-50 transition-colors ring-focus shadow-soft"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
              </svg>
              <span>{t('signup_with_facebook')}</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/20" />
            <span className="text-white/60 text-sm">{t('signup_divider')}</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-fade-in">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Name field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-white/60" />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('signup_name')}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-accent/30 focus:border-emerald-accent/40 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Email field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-white/60" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('signup_email')}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-accent/30 focus:border-emerald-accent/40 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Password field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-white/60" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('signup_password')}
                className="w-full pl-12 pr-12 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-accent/30 focus:border-emerald-accent/40 transition-all text-sm sm:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-white/60 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Confirm Password field */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-white/60" />
              </div>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t('signup_confirm_password')}
                className="w-full pl-12 pr-12 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-accent/30 focus:border-emerald-accent/40 transition-all text-sm sm:text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-white/60 hover:text-white transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Phone field (optional) */}
            <div className="relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Phone className="w-5 h-5 text-white/60" />
              </div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('signup_phone') + ' (optionnel)'}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/15 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-accent/30 focus:border-emerald-accent/40 transition-all text-sm sm:text-base"
              />
            </div>

            {/* Terms and conditions */}
            <label className="flex items-start gap-3 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 rounded-full border-white/30 bg-transparent text-emerald-accent focus:ring-emerald-accent/30 focus:ring-offset-0 focus:ring-offset-transparent mt-0.5 flex-shrink-0"
              />
              <span className="text-white/80">
                {t('signup_terms')}{' '}
                <a href="#" className="text-gold hover:text-gold-light underline">{t('signup_terms_link')}</a>
                {' '}{t('signup_privacy')}{' '}
                <a href="#" className="text-gold hover:text-gold-light underline">{t('signup_privacy_link')}</a>
              </span>
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading || !isFormValid}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-accent to-primary-500 text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ring-focus"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('signup_button')}
                </>
              ) : (
                t('signup_button')
              )}
            </button>
          </form>

          {/* Sign in link */}
          <p className="text-center mt-6 text-white/80 text-sm">
            {t('signup_already_account')}{' '}
            <button
              onClick={onSignIn}
              className="text-gold hover:text-gold-light font-medium transition-colors"
            >
              {t('signup_signin')}
            </button>
          </p>
        </div>

        {/* Back button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mt-6 w-full py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-medium text-sm hover:bg-white/15 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
        )}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-emerald-accent rounded-full opacity-60 animate-pulse-soft" />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-gold rounded-full opacity-70 animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}

export default Register;