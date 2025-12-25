/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Activation du dark mode via class="dark" sur <html>
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
                // Tokens sémantiques EMD (avec support alpha /xx)
                bg: 'rgb(var(--bg) / <alpha-value>)',
                surface: 'rgb(var(--surface) / <alpha-value>)',
                surface2: 'rgb(var(--surface2) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',

                brand: 'rgb(var(--brand) / <alpha-value>)',
                brand2: 'rgb(var(--brand2) / <alpha-value>)',
                brandSoft: 'rgb(var(--brandSoft) / <alpha-value>)',

                warning: 'rgb(var(--warning) / <alpha-value>)',
                danger: 'rgb(var(--danger) / <alpha-value>)',
                info: 'rgb(var(--info) / <alpha-value>)',

                ring: 'rgb(var(--ring) / <alpha-value>)',
                onBrand: 'rgb(var(--onBrand) / <alpha-value>)',

                // ⚠️ COMPATIBILITÉ : Anciens noms brand.* pour éviter build errors
                // Ces alias pointent vers les mêmes variables pour rétro-compatibilité
                'brand-background': 'rgb(var(--bg) / <alpha-value>)',
                'brand-surface': 'rgb(var(--surface) / <alpha-value>)',
                'brand-border': 'rgb(var(--border) / <alpha-value>)',
                'brand-text': 'rgb(var(--text) / <alpha-value>)',
                'brand-textMuted': 'rgb(var(--muted) / <alpha-value>)',
                'brand-accent': 'rgb(var(--brand) / <alpha-value>)',
                'brand-accentHighlight': 'rgb(var(--brand2) / <alpha-value>)',
                'brand-accentSoft': 'rgb(var(--brandSoft) / <alpha-value>)',
                'brand-success': 'rgb(var(--brand) / <alpha-value>)', // Success = brand
                'brand-error': 'rgb(var(--danger) / <alpha-value>)',
                'brand-warning': 'rgb(var(--warning) / <alpha-value>)',

                // Lovable (Organic Tech) Colors
                lovable: {
                    background: "hsl(var(--lovable-background))",
                    foreground: "hsl(var(--lovable-foreground))",
                    card: "hsl(var(--lovable-card))",
                    "card-foreground": "hsl(var(--lovable-card-foreground))",
                    popover: "hsl(var(--lovable-popover))",
                    "popover-foreground": "hsl(var(--lovable-popover-foreground))",
                    primary: "hsl(var(--lovable-primary))",
                    "primary-foreground": "hsl(var(--lovable-primary-foreground))",
                    secondary: "hsl(var(--lovable-secondary))",
                    "secondary-foreground": "hsl(var(--lovable-secondary-foreground))",
                    muted: "hsl(var(--lovable-muted))",
                    "muted-foreground": "hsl(var(--lovable-muted-foreground))",
                    accent: "hsl(var(--lovable-accent))",
                    "accent-foreground": "hsl(var(--lovable-accent-foreground))",
                    destructive: "hsl(var(--lovable-destructive))",
                    "destructive-foreground": "hsl(var(--lovable-destructive-foreground))",
                    border: "hsl(var(--lovable-border))",
                    input: "hsl(var(--lovable-input))",
                    ring: "hsl(var(--lovable-ring))",
                    terracotta: "hsl(var(--lovable-terracotta))",
                    forest: "hsl(var(--lovable-forest))",
                    sage: "hsl(var(--lovable-sage))",
                    sand: "hsl(var(--lovable-sand))",
                    cream: "hsl(var(--lovable-cream))",
                    mint: "hsl(var(--lovable-mint))",
                },
            },
            backgroundImage: {
                'brand-gradient': 'linear-gradient(135deg, rgb(var(--brand)), rgb(var(--brand2)))',
                'brand-gradient-hero': 'linear-gradient(135deg, rgb(var(--brand)), rgb(var(--brand2)), rgb(var(--bg)))',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                lovable: ['var(--font-dm-sans)', 'sans-serif'],
                serif: ['var(--font-dm-serif)', 'serif'],
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
