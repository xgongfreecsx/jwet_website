/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#050713",
          900: "#070A1A",
          800: "#0B1020",
          700: "#111827",
          200: "#CBD5E1",
        },
        neon: {
          blue: "#60A5FA",
          gold: "#FBBF24",
          violet: "#A78BFA",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        twinkle: "twinkle 4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
