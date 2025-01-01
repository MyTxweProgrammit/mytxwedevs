/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'spin-slow': 'spin 4s linear infinite'
  		},
  		fontFamily: {
  			Jura: [
  				'Jura',
  				'serif'
  			],
  			Noto: [
  				'Noto Sans',
  				'serif'
  			]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			glass: 'rgba(var(--color-glass))',
  		},
  	}
  },
  plugins: [
    require('daisyui'),
    require("tailwindcss-animate")
  ],
  darkMode: 'class',
};
