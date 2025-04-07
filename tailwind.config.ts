import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales
        primary: "#c34d1a",    // Anaranjado-rosado principal
        secondary: "#ffa07a",  // Coral suave
        tertiary: "#ffd3c4",   // Melocotón claro

        // Fondos
        background: {
          DEFAULT: "#fff5f3",  // Fondo principal anaranjado-rosado suave
          secondary: "#fff0e8", // Fondo secundario melocotón muy suave
          dark: "#2f1e1c",     // Fondo oscuro
        },

        // Acentos y destacados
        accent: {
          DEFAULT: "#ff9966",  // Anaranjado brillante
          light: "#ffb38a",    // Anaranjado-rosado claro
          dark: "#e86a50",     // Anaranjado oscuro
        },

        // Tonos piel
        skin: {
          light: "#ffe6dc",    // Tono piel muy claro
          DEFAULT: "#ffcab8",  // Tono piel medio
          dark: "#ffad94",     // Tono piel más oscuro
        },

        // Estados y funcionales
        state: {
          hover: "#ffc9b6",    // Color para hover (anaranjado suave)
          active: "#ff8e6f",   // Color para elementos activos
          disabled: "#d9a89f", // Color para elementos deshabilitados
        },

        // Textos
        text: {
          primary: "#5a332f",   // Texto principal (anaranjado oscuro)
          secondary: "#774743", // Texto secundario
          muted: "#a47d79",    // Texto muted
        },

        // Bordes
        border: {
          DEFAULT: "#f0d2c9",  // Borde por defecto
          active: "#e6b1a8",   // Borde activo
          dark: "#4b302d",     // Borde en modo oscuro
        },
      },
      // Otras extensiones del tema
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(255, 134, 116, 0.1)", // Sombra con tono anaranjado
        medium: "0 4px 20px rgba(255, 134, 116, 0.15)",
        strong: "0 8px 30px rgba(255, 134, 116, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
