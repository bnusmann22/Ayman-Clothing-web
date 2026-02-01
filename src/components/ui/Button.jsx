import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-sans font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-gold text-brand-dark hover:bg-opacity-90 focus:ring-brand-gold',
    secondary: 'bg-brand-silver text-brand-white hover:bg-opacity-90 focus:ring-brand-silver',
    dark: 'bg-brand-dark text-brand-gold border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark focus:ring-brand-gold',
    outline: 'bg-transparent text-brand-gold border-2 border-brand-gold hover:bg-brand-gold hover:text-brand-dark focus:ring-brand-gold',
    ghost: 'bg-transparent text-brand-gold hover:bg-brand-gold hover:bg-opacity-10 focus:ring-brand-gold',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
