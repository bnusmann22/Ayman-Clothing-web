import React, { useState } from 'react';

const Input = ({ 
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  disabled = false,
  required = false,
  helperText = '',
  icon,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  const containerClass = fullWidth ? 'w-full' : '';
  
  const inputBaseStyles = 'font-sans px-4 py-2 rounded-lg border-2 transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const inputVariants = error
    ? 'border-red-500 text-brand-dark focus:border-red-600 focus:ring-2 focus:ring-red-500'
    : isFocused
    ? 'border-brand-gold text-brand-dark focus:ring-2 focus:ring-brand-gold'
    : 'border-brand-silver text-brand-dark hover:border-brand-gold';
    
  const iconClass = icon ? 'pl-10' : '';
  
  return (
    <div className={`${containerClass} ${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-semibold font-sans text-brand-dark">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${inputBaseStyles} ${inputVariants} ${iconClass} ${fullWidth ? 'w-full' : ''}`}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500 font-sans">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-brand-silver font-sans">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
