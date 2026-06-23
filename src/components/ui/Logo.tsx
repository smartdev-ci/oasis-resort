interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'light';
  showText?: boolean;
}

export function Logo({ size = 'md', variant = 'default', showText = true }: LogoProps) {
  const imgSizeMap = { sm: 'h-8', md: 'h-10', lg: 'h-12', xl: 'h-16' };
  const textSizeMap = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl', xl: 'text-3xl' };
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-600';

  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/Logo_oasisressort.png"
        alt="Oasis Ressort"
        className={`${imgSizeMap[size]} w-auto object-contain flex-shrink-0 ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
      {showText && (
        <span className={`${textSizeMap[size]} font-display font-bold ${textColor} tracking-tight leading-tight`}>
          Oasis<br className="hidden" /> <span className="hidden sm:inline">Ressort</span>
        </span>
      )}
    </div>
  );
}
