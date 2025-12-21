/**
 * Return URL Helper (SSR-safe)
 * 
 * Utilities for managing returnTo redirect URLs after login/signup.
 */

/**
 * Build a return URL from pathname and search params
 * @param pathname - Current pathname (e.g., "/reservation")
 * @param search - Search params string (e.g., "?from=search")
 * @returns Full return URL (e.g., "/reservation?from=search")
 */
export function buildReturnTo(pathname: string, search: string): string {
    if (!pathname) return "/"

    // Combine pathname and search
    return search ? `${pathname}${search}` : pathname
}

/**
 * Build login URL with returnTo parameter
 * @param returnTo - URL to return to after login
 * @returns Login URL with encoded returnTo param
 */
export function buildLoginUrl(returnTo: string): string {
    if (!returnTo || returnTo === "/") {
        return "/auth/login"
    }

    return `/auth/login?returnTo=${encodeURIComponent(returnTo)}`
}

/**
 * Build signup URL with returnTo parameter
 * @param returnTo - URL to return to after signup
 * @returns Signup URL with encoded returnTo param
 */
export function buildSignupUrl(returnTo: string): string {
    if (!returnTo || returnTo === "/") {
        return "/auth/signup"
    }

    return `/auth/signup?returnTo=${encodeURIComponent(returnTo)}`
}
