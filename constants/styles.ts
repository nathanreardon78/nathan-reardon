// American-themed color palette and design constants
export const COLORS = {
  // Primary American theme colors
  primary: {
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    white: '#ffffff',
  },
  
  // Background and neutral colors
  background: {
    primary: '#0a0a0a',
    secondary: '#1a1a1a',
    card: '#1e2939',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  
  // Text colors
  text: {
    primary: '#f9fafb',
    secondary: '#d1d5dc',
    muted: '#6b7280',
    accent: '#dc2626',
  },
  
  // Gray scale
  gray: {
    100: '#f3f4f6',
    300: '#d1d5dc',
    400: '#99a1af',
    700: '#364153',
    800: '#1e2939',
    900: '#101828',
    950: '#030712',
  }
} as const;

// Gradient definitions
export const GRADIENTS = {
  // Primary CTA gradient - Patriotic red to blue gradient
  primaryCTA: 'bg-gradient-to-r from-red-500 to-blue-600',
  primaryCTAHover: 'bg-gradient-to-r from-red-600 to-blue-700',
  
  // Alternative CTA gradients
  redToWhite: 'bg-gradient-to-r from-red-500 to-red-200',
  blueToRed: 'bg-gradient-to-r from-blue-500 to-red-500',
  patrioticTriple: 'bg-gradient-to-r from-blue-500 via-white to-red-500',
  
  // Secondary gradients
  secondaryCTA: 'bg-gradient-to-r from-blue-600 to-blue-400',
  secondaryCTAHover: 'bg-gradient-to-r from-blue-700 to-blue-500',
  
  // Text gradients
  heroText: 'bg-gradient-to-r from-blue-400 to-red-500',
  accentText: 'bg-gradient-to-r from-red-500 to-blue-500',
  
  // Background gradients
  heroBackground: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
  cardGradient: 'bg-gradient-to-br from-gray-800/50 to-gray-900/50',
} as const;

// Common styling patterns
export const STYLES = {
  // Button styles
  buttons: {
    primary: `${GRADIENTS.primaryCTA} hover:${GRADIENTS.primaryCTAHover} text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`,
    secondary: `border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300`,
    accent: `border border-red-600 text-red-500 hover:${GRADIENTS.primaryCTA} hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300`,
  },
  
  // Card styles
  cards: {
    primary: 'bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-red-500 transition-all duration-300 group',
    secondary: 'bg-gray-800/50 border border-gray-700 rounded-lg backdrop-blur-sm',
    featured: 'bg-gray-900 border border-gray-800 rounded-xl hover:border-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]',
  },
  
  // Text styles
  text: {
    heading: 'text-3xl font-semibold text-red-500',
    subheading: 'text-xl font-medium text-gray-100',
    body: 'text-gray-300',
    accent: 'text-red-500 font-medium',
    link: 'text-blue-500 hover:text-blue-400 hover:underline transition-colors',
  },
  
  // Layout styles
  layout: {
    container: 'mx-auto max-w-6xl px-4',
    section: 'py-16',
    card: 'p-6',
    spacing: {
      xs: 'space-y-2',
      sm: 'space-y-4',
      md: 'space-y-6',
      lg: 'space-y-8',
      xl: 'space-y-12',
    }
  },
  
  // Effects and animations
  effects: {
    glow: {
      red: 'hover:drop-shadow-[0_0_4px_#dc2626]',
      blue: 'hover:drop-shadow-[0_0_4px_#3b82f6]',
    },
    blur: {
      backdrop: 'backdrop-blur-sm',
      heavy: 'blur-3xl',
    },
    shadow: {
      card: 'shadow-2xl shadow-red-900/30',
      button: 'shadow-lg hover:shadow-xl',
    }
  }
} as const;

// Animation constants
export const ANIMATIONS = {
  transition: 'transition-all duration-300',
  transitionFast: 'transition-all duration-150',
  transitionSlow: 'transition-all duration-500',
  hover: {
    scale: 'transform hover:scale-105',
    lift: 'transform hover:-translate-y-2',
    button: 'transform hover:-translate-y-0.5',
  }
} as const;

// Responsive breakpoints (for reference)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Component-specific style combinations
export const COMPONENT_STYLES = {
  heroButton: `${STYLES.buttons.primary} ${ANIMATIONS.hover.button}`,
  navLink: `hover:text-red-500 ${ANIMATIONS.transition}`,
  logo: `text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent`,
  sectionHeading: `${STYLES.text.heading} mb-10`,
  cardHover: `${STYLES.cards.primary} ${ANIMATIONS.hover.lift}`,
} as const;
