/**
 * Module de Validation Client-Side
 * 
 * Contient des helpers simples pour valider les données de formulaires
 * côté client avant soumission.
 * 
 * Note : Ces validations sont identiques côté serveur dans un vrai système.
 */

/**
 * Valide une adresse email
 * 
 * @param email - Email à valider
 * @returns true si valide, false sinon
 */
export function validateEmail(email: string): boolean {
    if (!email || email.trim() === "") return false;

    // Regex simple mais efficace pour emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

/**
 * Valide un mot de passe
 * 
 * Règles :
 * - Minimum 8 caractères
 * - Au moins 1 chiffre
 * - Au moins 1 lettre
 * 
 * @param password - Mot de passe à valider
 * @returns true si valide, false sinon
 */
export function validatePassword(password: string): boolean {
    if (!password || password.length < 8) return false;

    // Au moins un chiffre
    if (!/\d/.test(password)) return false;

    // Au moins une lettre
    if (!/[a-zA-Z]/.test(password)) return false;

    return true;
}

/**
 * Structure des erreurs de validation pour signup
 */
export interface SignupErrors {
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

/**
 * Payload d'inscription
 */
export interface SignupPayload {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

/**
 * Valide un payload d'inscription complet
 * 
 * @param payload - Données d'inscription
 * @returns Objet d'erreurs (vide si tout est valide)
 */
export function validateSignup(payload: SignupPayload): SignupErrors {
    const errors: SignupErrors = {};

    // Nom complet
    if (!payload.fullName || payload.fullName.trim().length < 2) {
        errors.fullName = "Le nom complet doit contenir au moins 2 caractères";
    }

    // Email
    if (!validateEmail(payload.email)) {
        errors.email = "Adresse email invalide";
    }

    // Mot de passe
    if (!validatePassword(payload.password)) {
        errors.password = "Le mot de passe doit contenir au moins 8 caractères, dont 1 chiffre et 1 lettre";
    }

    // Confirmation mot de passe
    if (payload.password !== payload.confirmPassword) {
        errors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    return errors;
}

/**
 * Structure des erreurs de validation pour login
 */
export interface LoginErrors {
    email?: string;
    password?: string;
}

/**
 * Payload de connexion
 */
export interface LoginPayload {
    email: string;
    password: string;
}

/**
 * Valide un payload de connexion
 * 
 * @param payload - Données de connexion
 * @returns Objet d'erreurs (vide si tout est valide)
 */
export function validateLogin(payload: LoginPayload): LoginErrors {
    const errors: LoginErrors = {};

    // Email
    if (!validateEmail(payload.email)) {
        errors.email = "Adresse email invalide";
    }

    // Mot de passe (juste vérifier qu'il n'est pas vide pour login)
    if (!payload.password || payload.password.trim() === "") {
        errors.password = "Mot de passe requis";
    }

    return errors;
}
