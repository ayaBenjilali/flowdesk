import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#0B1220", blue: "#2563EB", mist: "#F8FAFC", success: "#10B981" },
      boxShadow: { soft: "0 24px 80px rgba(11, 18, 32, 0.12)", glow: "0 18px 60px rgba(37, 99, 235, 0.22)" }
    }
  },
  plugins: []
};

export default config;
