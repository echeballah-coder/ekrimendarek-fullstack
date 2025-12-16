/**
 * UI Tokens - Source unique de vérité pour les tokens de design
 * 
 * Ces tokens définissent les valeurs de base pour le design system.
 * Les couleurs sont gérées séparément via Tailwind (brand-*).
 * 
 * Usage : import { radius, shadow, spacing, typography } from '@/lib/uiTokens'
 */

/**
 * Border Radius Tokens
 */
export const radius = {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px - default pour cards, inputs
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px - pour sections importantes
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',   // Boutons circulaires, badges
} as const

/**
 * Shadow Tokens
 */
export const shadow = {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const

/**
 * Spacing Tokens
 */
export const spacing = {
    section: {
        xs: '2rem',     // 32px - mini sections
        sm: '3rem',     // 48px - sections compactes
        base: '4rem',   // 64px - espacement standard
        lg: '6rem',     // 96px - grandes sections
        xl: '8rem',     // 128px - très grande séparation
    },
    container: {
        padding: {
            mobile: '1rem',    // 16px
            tablet: '1.5rem',  // 24px
            desktop: '2rem',   // 32px
        },
        maxWidth: '1280px',  // 1280px - largeur max container
    },
    grid: {
        gap: {
            sm: '1rem',   // 16px
            base: '1.5rem', // 24px
            lg: '2rem',   // 32px
        }
    }
} as const

/**
 * Typography Tokens
 */
export const typography = {
    fontSize: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px - body
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '2xl': '1.5rem',   // 24px - H4
        '3xl': '1.875rem', // 30px - H3
        '4xl': '2.25rem',  // 36px - H2
        '5xl': '3rem',     // 48px - H1 desktop
        '6xl': '3.75rem',  // 60px - Hero titles
    },
    lineHeight: {
        tight: '1.25',
        base: '1.5',
        relaxed: '1.75',
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    }
} as const

/**
 * Animation Tokens
 */
export const animation = {
    duration: {
        fast: '150ms',
        base: '300ms',
        slow: '500ms',
    },
    easing: {
        default: 'cubic-bezier(0.4, 0, 0.2, 1)',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
} as const

/**
 * Type exports for TypeScript autocomplete
 */
export type Radius = typeof radius
export type Shadow = typeof shadow
export type Spacing = typeof spacing
export type Typography = typeof typography
export type Animation = typeof animation
