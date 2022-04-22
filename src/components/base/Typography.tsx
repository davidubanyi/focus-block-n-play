import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1Normal = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-5xl md:text-8xl  ${className}`}>{children}</h1>
);

export const H2Thin = ({ children, className }: TypographyProps) => {
  return <h2 className={`font-thin text-primary-500 text-5xl ${className}`}>{children}</h2>;
};

export const H2Med = ({ children, className }: TypographyProps) => {
  return <h2 className={`font-medium text-primary-500 text-5xl ${className}`}>{children}</h2>;
};

export const H3Thin = ({ children, className }: TypographyProps) => {
  return <h3 className={`font-thin text-primary-500 text-3xl ${className}`}>{children}</h3>;
};
export const H4Thin = ({ children, className }: TypographyProps) => {
  return <h4 className={`font-thin text-primary-500 text-2xl ${className}`}>{children}</h4>;
};
export const H5Thin = ({ children, className }: TypographyProps) => {
  return <h5 className={`font-thin text-primary-500 text-xl ${className}`}>{children}</h5>;
};

export const H5Light = ({ children, className }: TypographyProps) => {
  return <h5 className={`font-light text-primary-500 text-xl ${className}`}>{children}</h5>;
};
