import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'gold';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 hover:bg-primary-400 text-white shadow-soft hover:shadow-soft-lg active:scale-[0.98]',
  secondary: 'bg-primary-300 hover:bg-primary-400/70 text-primary-600 active:scale-[0.98]',
  ghost: 'text-primary-500 hover:bg-primary-50 active:scale-[0.98]',
  outline: 'border border-primary-200 hover:border-primary-400 text-primary-500 hover:bg-primary-50 active:scale-[0.98]',
  gold: 'bg-gold hover:bg-gold-light text-primary-600 shadow-soft hover:shadow-soft-lg active:scale-[0.98]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
  xl: 'px-8 py-4 text-lg gap-2.5',
};

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  type = 'button',
  fullWidth,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 spring ring-focus disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info' | 'gold' | 'glass' | 'dark';
  className?: string;
  icon?: ReactNode;
}

export function Badge({ children, variant = 'default', className = '', icon }: BadgeProps) {
  const variants: Record<string, string> = {
    default: 'bg-primary-50 text-primary-500 border border-primary-100',
    success: 'bg-primary-200/60 text-primary-500 border border-primary-300/50',
    warning: 'bg-orange-50 text-warning border border-orange-200',
    info: 'bg-blue-50 text-blue-600 border border-blue-200',
    gold: 'bg-gold/15 text-gold border border-gold/30',
    glass: 'glass text-primary-600 border border-white/40',
    dark: 'bg-primary-600 text-white border border-primary-500',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {icon}
      {children}
    </span>
  );
}

interface StarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

export function Stars({ rating, size = 'sm', showValue }: StarsProps) {
  const sizeMap = { sm: 'w-3.5 h-3.5', md: 'w-4 h-4', lg: 'w-5 h-5' };
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeMap[size]} ${star <= Math.round(rating) ? 'text-gold' : 'text-primary-100'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {showValue && <span className="text-sm font-semibold text-primary-500">{rating.toFixed(1)}</span>}
    </div>
  );
}

interface PriceProps {
  amount: number;
  currency?: string;
  period?: string;
  className?: string;
}

export function Price({ amount, currency = 'FCFA', period, className = '' }: PriceProps) {
  const formatted = new Intl.NumberFormat('fr-FR').format(amount);
  return (
    <div className={`flex items-baseline gap-1 ${className}`}>
      <span className="font-bold text-primary-500">
        {formatted} <span className="text-sm font-medium text-primary-400">{currency}</span>
      </span>
      {period && <span className="text-xs text-primary-300">/{period}</span>}
    </div>
  );
}

interface AvatarProps {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ label, size = 'md', className = '' }: AvatarProps) {
  const sizeMap = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
  };
  return (
    <div className={`${sizeMap[size]} rounded-full bg-gradient-to-br from-primary-500 to-primary-400 flex items-center justify-center text-white font-semibold ${className}`}>
      {label}
    </div>
  );
}
