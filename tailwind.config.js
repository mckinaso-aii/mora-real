/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mora: {
          // Primary colors based on Mora Real logo
          purple: '#8B5CF6', // Main purple from logo
          'purple-dark': '#7C3AED',
          'purple-light': '#A78BFA',
          'purple-darker': '#6D28D9',
          white: '#FFFFFF', // White from logo
          'white-off': '#F8FAFC',
          black: '#000000',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          }
        }
      },
      backgroundImage: {
        'mora-primary': 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
        'mora-secondary': 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
        'mora-duotone': 'linear-gradient(135deg, #8B5CF6 0%, #FFFFFF 50%, #7C3AED 100%)',
        'mora-modern': 'linear-gradient(90deg, #8B5CF6 0%, #A78BFA 50%, #7C3AED 100%)',
        'mora-dark': 'linear-gradient(135deg, #000000 0%, #6D28D9 50%, #8B5CF6 100%)',
        'mora-light': 'linear-gradient(135deg, #FFFFFF 0%, #A78BFA 50%, #8B5CF6 100%)',
        'mora-glass': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        medical: ['Roboto', 'system-ui', 'sans-serif'],
        elegant: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'mora': '0 4px 6px -1px rgba(139, 92, 246, 0.2), 0 2px 4px -1px rgba(124, 58, 237, 0.1)',
        'mora-glow': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(124, 58, 237, 0.2)',
        'mora-modern': '0 10px 25px -3px rgba(139, 92, 246, 0.2), 0 4px 6px -2px rgba(124, 58, 237, 0.1)',
        'mora-glass': '0 8px 32px 0 rgba(139, 92, 246, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'mora': '10px',
      }
    },
  },
  plugins: [],
}
