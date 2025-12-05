/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './features/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                brand: {
                    background: '#F8F5F0', // --emd-bg
                    surface: '#FFFFFF', // --emd-surface
                    border: '#E5E7EB', // --emd-border-subtle
                    text: '#1E1B18', // --emd-text-main
                    textMuted: '#6B6A64', // --emd-text-muted
                    accent: '#046C4E', // --emd-primary (Emerald)
                    accentHighlight: '#1F7A8C', // --emd-secondary (Teal)
                    accentSoft: '#E1F3EC', // --emd-primary-soft
                    success: '#047857',
                    error: '#B91C1C',
                    warning: '#F7A500', // --emd-accent (Amber)
                },
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, #046C4E 0%, #1F7A8C 100%)',
                'brand-gradient-hero': 'linear-gradient(135deg, #046C4E 0%, #1F7A8C 45%, #F1ECE3 100%)',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            borderRadius: {
                lg: '0.5rem',
                md: 'calc(0.5rem - 2px)',
                sm: 'calc(0.5rem - 4px)',
            },
        },
    },
    plugins: [],
}
