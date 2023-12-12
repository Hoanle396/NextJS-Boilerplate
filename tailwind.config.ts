import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          foreground: 'var(--text-color)'
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          foreground: 'var(--text-color)'
        },
        foreground: {
          DEFAULT: 'var(--fg)',
          secondary: 'var( --text-color-secondary)'
        },
        background: {
          DEFAULT: 'var(--bg)',
          secondary: 'var(--bg-secondary)'
        },
        border: {
          DEFAULT: 'hsl(var(--border))'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        success: {
          DEFAULT: 'hsl(var(--success))',
          light: 'hsl(var(--success-light))'
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          light: 'hsl(var(--error-light))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          light: 'hsl(var(--warning-light))'
        },
        readonly: {
          DEFAULT: '#E6E6E6',
          border: '#B6B6B6'
        }
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--bg-secondary)'
      },
      common: {
        white: '#fff',
        black: '#000'
      },
      fontFamily: {
        'source-sans': ['source-sans', 'sans-serif']
      },
      borderRadius: {
        '3xl': '36px',
        '2xl': '24px',
        xl: '16px',
        lg: '12px',
        md: '8px',
        sm: '4px',
        haft: '50%'
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
export default config
