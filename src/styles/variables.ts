export const deviceSizes = {
  mobileS: 568,
  mobile: 768,
  tablet: 1024,
};

export const generalStyles = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    red: '#e91c24',
    darkGray: '#2b2b2b',
    lightGray: '#f8f9fa',
    light: '#fff5f5',
  },
  fonts: {
    primary: 'Helvetica, sans-serif',
    secondary: 'Arial, sans-serif',
  },
  mediaQuery: {
    mobileS: `(max-width: ${deviceSizes.mobileS}px)`,
    mobile: `(max-width: ${deviceSizes.mobile}px)`,
    tablet: `(max-width: ${deviceSizes.tablet}px)`,
  },
};
