import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}", // Note the addition of the `app` directory.
    "./common/**/*.{ts,tsx}",
    "./modules/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  important: true,
  // important: '#__next',
  // prefix: 'th-',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      },
    },
    extend: {
      colors: {
        primary: "rgba(6, 55, 118, 1)",
        secondary: "rgba(228, 241, 248, 1)",
        tertiary: "rgba(9, 134, 202, 0.2)",
        background: "rgba(248, 251, 253, 1)",
        light: "#F9F9F9",
        dark: "#2D2827",
        "dark-400": "#373737",
        orange: "#EF940C",
        "light-gray": "#D7D7D7",
        gray: "#9B9B9B",
        placeholder: "#D9D9D9",
      },
      fontSize: {
        xs: "0.75rem",
        "2xl": "1.875rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;