import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'urgent';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900";
  
  const variants = {
    primary: "border-transparent text-zinc-950 bg-amber-500 hover:bg-amber-400 focus:ring-amber-500",
    secondary: "border-transparent text-zinc-200 bg-zinc-800 hover:bg-zinc-700 focus:ring-zinc-500",
    outline: "border-zinc-700 text-zinc-300 bg-transparent hover:bg-zinc-800 focus:ring-zinc-500",
    urgent: "border-transparent text-white bg-red-600 hover:bg-red-500 focus:ring-red-500 shadow-lg shadow-red-900/20"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};