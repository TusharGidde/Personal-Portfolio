/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Orbitron: ["Orbitron", "monospace"],
      Rajdhani: ["Rajdhani", "sans-serif"],
      Space: ["Space Grotesk", "sans-serif"],
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#0A0A0A",
        bg_light_primary: "#0F0F0F",
        gray: {
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
        },
        neon_blue: "#00D4FF",
        neon_purple: "#8B5CF6",
        neon_pink: "#EC4899",
        neon_green: "#10B981",
        cyber_dark: "#1A1A1A",
        cyber_darker: "#0D0D0D",
        accent_glow: "#00F5FF",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #0A0A0A 100%)",
        neonGradient: "linear-gradient(135deg, #00D4FF 0%, #8B5CF6 50%, #EC4899 100%)",
        cyberGrid: "linear-gradient(rgba(0,212,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.1) 1px, transparent 1px)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.1)",
        cyber: "0 4px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 212, 255, 0.1)",
        glow: "0 0 60px rgba(139, 92, 246, 0.3)",
      },
      dropShadow: {
        primary: "0 0 20px rgba(0, 212, 255, 0.3)",
        neon: "0 0 30px rgba(139, 92, 246, 0.5)",
        glow: "0 0 40px rgba(0, 245, 255, 0.4)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'cyber-pulse': 'cyberPulse 2s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.8)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        cyberPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        matrix: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
};
