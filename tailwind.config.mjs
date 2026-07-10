// tailwind.config.mjs
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#acc6ff",
        "surface-container": "#1e1f23",
        "secondary-fixed": "#ffdcc3",
        "on-primary": "#002e69",
        "on-secondary": "#4d2600",
        "surface-container-high": "#292a2d",
        "on-surface": "#e3e2e7",
        "surface-border": "#222222",
        "on-secondary-fixed-variant": "#6b3b0a",
        "primary-fixed-dim": "#adc6ff",
        "on-background": "#e3e2e7",
        "tertiary-fixed": "#e4e2e1",
        "inverse-primary": "#005bc1",
        "on-secondary-container": "#efa971",
        "surface-dim": "#121317",
        "on-error": "#690005",
        "primary": "#d7e2ff",
        "surface-card": "#111111",
        "error": "#ffb4ab",
        "background": "#121317",
        "error-container": "#93000a",
        "on-primary-fixed-variant": "#004493",
        "tertiary": "#e4e2e1",
        "on-tertiary-fixed": "#1b1c1b",
        "surface-tint": "#adc6ff",
        "secondary-container": "#6e3d0d",
        "tertiary-container": "#c8c6c5",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#004fa9",
        "tertiary-fixed-dim": "#c8c6c5",
        "on-surface-variant": "#c4c6d0",
        "on-secondary-fixed": "#2f1500",
        "primary-fixed": "#d8e2ff",
        "surface-container-lowest": "#0d0e11",
        "on-primary-fixed": "#001a41",
        "secondary-fixed-dim": "#ffb77d",
        "outline": "#8e909a",
        "on-tertiary-container": "#535252",
        "surface-variant": "#343538",
        "inverse-on-surface": "#2f3034",
        "secondary": "#ffb77d",
        "surface-container-highest": "#343538",
        "surface-container-low": "#1a1b1f",
        "cyber-orange": "#FF8C00",
        "surface-bright": "#38393d",
        "electric-blue": "#007AFF",
        "surface": "#121317",
        "on-tertiary-fixed-variant": "#474746",
        "text-muted": "#888888",
        "inverse-surface": "#e3e2e7",
        "on-tertiary": "#303030",
        "outline-variant": "#44474f",
        "surface-main": "#0A0A0B"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "stack-sm": "0.5rem",
        "stack-md": "1.5rem",
        "stack-lg": "3rem",
        "margin-page": "5vw",
        "gutter-grid": "2rem",
        "section-gap": "8rem"
      },
      fontFamily: {
        "headline-xl": ["Geist", "Inter", "sans-serif"],
        "headline-md": ["Geist", "Inter", "sans-serif"],
        "label-md": ["Geist", "Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Geist", "Inter", "sans-serif"],
        "headline-lg": ["Geist", "Inter", "sans-serif"],
        "headline-xl-mobile": ["Geist", "Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "label-md": ["14px", {"lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "1.0", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "headline-xl-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
      }
    },
  },
  plugins: [forms, containerQueries],
}