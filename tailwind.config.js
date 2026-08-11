/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04060b",
          900: "#080b13",
          800: "#0d1119",
          700: "#131a27",
          600: "#1c2537",
          500: "#2a3448",
        },
        brand: {
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
        accent: {
          400: "#c084fc",
          500: "#a855f7",
        },
        text: {
          primary: "#f8fafc",
          secondary: "#a3adc2",
          tertiary: "#7c87a0",
        },
        border: {
          subtle: "rgba(148, 163, 184, 0.12)",
          DEFAULT: "rgba(148, 163, 184, 0.18)",
          strong: "rgba(148, 163, 184, 0.28)",
        },
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "28px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.4), 0 12px 28px -12px rgba(0,0,0,0.55)",
        elevated: "0 24px 48px -16px rgba(0,0,0,0.65), 0 0 0 1px rgba(148,163,184,0.08)",
        glow: "0 0 0 1px rgba(59,130,246,0.25), 0 0 32px -4px rgba(59,130,246,0.35)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "app-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.18), transparent), radial-gradient(ellipse 60% 40% at 85% 20%, rgba(168,85,247,0.10), transparent), linear-gradient(180deg, #04060b 0%, #0a0e17 40%, #0d1a2e 100%)",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}