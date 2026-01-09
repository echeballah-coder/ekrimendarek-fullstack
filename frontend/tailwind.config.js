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
                // Tokens sémantiques ALGERENT
                bg: 'rgb(var(--bg) / <alpha-value>)',
                'bg-warm': 'rgb(var(--bg-warm) / <alpha-value>)',
                surface: 'rgb(var(--surface) / <alpha-value>)',
                surface2: 'rgb(var(--surface2) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',

                // Main Semantic Roles
                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                    foreground: 'rgb(var(--onBrand) / <alpha-value>)',
                    hover: 'rgb(var(--primary-hover) / <alpha-value>)',
                    active: 'rgb(var(--primary-active) / <alpha-value>)',
                },
                cta: {
                    DEFAULT: 'rgb(var(--cta) / <alpha-value>)',
                    hover: 'rgb(var(--cta-hover) / <alpha-value>)',
                    active: 'rgb(var(--cta-active) / <alpha-value>)',
                },
                focus: 'rgb(var(--focus) / <alpha-value>)',

                // Raw Brand Palette
                laranja: 'rgb(var(--c-laranja) / <alpha-value>)',
                ceu: 'rgb(var(--c-ceu) / <alpha-value>)',
                deep: 'rgb(var(--c-deep) / <alpha-value>)',
                neve: 'rgb(var(--c-neve) / <alpha-value>)',
                midnight: 'rgb(var(--c-midnight) / <alpha-value>)',
                azure: {
                    800: 'rgb(var(--c-azure-800) / <alpha-value>)',
                    600: 'rgb(var(--c-azure-600) / <alpha-value>)',
                    500: 'rgb(var(--c-azure-500) / <alpha-value>)',
                    300: 'rgb(var(--c-azure-300) / <alpha-value>)',
                },

                // Legacy / Compat
                brand: 'rgb(var(--brand) / <alpha-value>)',
                brand2: 'rgb(var(--brand2) / <alpha-value>)',
                brandSoft: 'rgb(var(--brandSoft) / <alpha-value>)',

                warning: 'rgb(var(--warning) / <alpha-value>)',
                danger: 'rgb(var(--danger) / <alpha-value>)',
                info: 'rgb(var(--info) / <alpha-value>)',
                success: 'rgb(var(--success) / <alpha-value>)',

                ring: 'rgb(var(--ring) / <alpha-value>)',
                onBrand: 'rgb(var(--onBrand) / <alpha-value>)',

                // Compatibilite pour eviter erreurs de build
                'brand-background': 'rgb(var(--bg) / <alpha-value>)',
                'brand-surface': 'rgb(var(--surface) / <alpha-value>)',

                // Lovable (Organic Tech) Colors
                lovable: {
                    background: "hsl(var(--lovable-background))",
                    foreground: "hsl(var(--lovable-foreground))",
                    card: "hsl(var(--lovable-card))",
                    "card-foreground": "hsl(var(--lovable-card-foreground))",
                    surface: "hsl(var(--lovable-surface))",
                    "surface-elevated": "hsl(var(--lovable-surface-elevated))",
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
                sans: ['var(--font-ui)', 'sans-serif'], // Remplace Inter par Fraunces (UI)
                ui: ['var(--font-ui)', 'sans-serif'],
                display: ['var(--font-display)', 'serif'],
                serif: ['var(--font-display)', 'serif'],
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
