const PrivaLexLogo = ({ className = "", variant = "default" }: { className?: string; variant?: "default" | "white" }) => {
  const navyColor = variant === "white" ? "#FFFFFF" : "#1A2B5E";
  const tealColor = variant === "white" ? "#FFFFFF" : "#2BBCD4";
  const textColor = variant === "white" ? "#FFFFFF" : "#1A2B5E";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="20" r="14" fill={navyColor} opacity="0.9" />
        <circle cx="24" cy="20" r="14" fill={tealColor} opacity="0.85" />
        <circle cx="20" cy="20" r="8" fill="none" stroke={variant === "white" ? "rgba(255,255,255,0.3)" : "#1E6FA5"} strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight" style={{ color: textColor }}>PrivaLex</span>
        <span className="text-xs font-medium tracking-widest uppercase" style={{ color: textColor, opacity: 0.8 }}>Advisory</span>
      </div>
    </div>
  );
};

export default PrivaLexLogo;
