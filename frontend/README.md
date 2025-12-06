# 🇩🇿 EkriMenDarek (Version Démo)

## 📌 Présentation
**EkriMenDarek** est une plateforme moderne de location de voitures en Algérie, conçue pour simplifier la mise en relation entre agences et particuliers.

Ce dépôt contient une **démonstration frontend locale** (Prototype).
> **Note Importante** : Cette version utilise des données simulées (mock data) pour illustrer le parcours utilisateur. Il n'y a pas de backend réel ni de traitement de paiement effectif.

## 🛠️ Stack Technique & Prérequis

### Technologies
*   **Framework** : Next.js 14 (App Router)
*   **Langage** : TypeScript
*   **Styling** : TailwindCSS
*   **Animations** : Framer Motion & Anime.js
*   **Design System** : Emerald Road (thème Algérie moderne)

### Prérequis
*   **Node.js** (v18 ou supérieur recommandé)
*   **npm** (installé avec Node.js)
*   **Git**

## 🚀 Installation & Lancement

1.  **Cloner le projet**
    ```bash
    git clone https://github.com/votre-username/ekrimendarek-fullstack.git
    cd ekrimendarek-fullstack/frontend
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```

4.  **Accéder à la démo**
    Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000)

> 💡 **Utilisateurs Windows** : Si vous rencontrez des problèmes d'exécution de scripts, consultez le fichier [`INSTALLATION.md`](./INSTALLATION.md) pour configurer PowerShell.

## ✨ Fonctionnalités de la Démo

Cette version de démonstration inclut les fonctionnalités clés suivantes :

*   **Page d'Accueil Immersive** : Hero section avec titres animés, barre de recherche intuitive et arguments de réassurance (CIB, 58 Wilayas).
*   **Recherche de Véhicules** : Listing dynamique avec filtres, affichant des données réalistes (prix en DZD, villes algériennes).
*   **Fiche Véhicule Complète** : Photos, caractéristiques techniques, et conditions de location adaptées au marché local (âge, permis biométrique).
*   **Tunnel de Réservation** : Calcul automatique du montant total et de l'acompte (15%), avec simulation de paiement.
*   **Parcours KYC (Vérification)** : Simulation d'envoi de documents (Permis, Selfie) avec feedback instantané.
*   **Espace Client** : Page "Mon Compte" affichant l'historique des réservations et leurs statuts (En attente, Confirmée, etc.).

---

## 🎬 Scénario de Démo (Script de Présentation)

Utilisez ce guide étape par étape lors de votre présentation pour garantir un effet "Wow".

### 1. Accueil : L'Expérience Premium
*   **Action** : Arriver sur la page d'accueil.
*   **À dire** : *"Bienvenue sur EkriMenDarek. Nous avons voulu créer une expérience qui inspire confiance dès la première seconde. Notez les animations fluides et l'ancrage local immédiat avec la mention des 58 Wilayas et du paiement CIB."*

### 2. Recherche : Fluidité et Choix
*   **Action** : Cliquer sur la barre de recherche ou le bouton "Voir toutes les offres".
*   **À dire** : *"L'utilisateur accède instantanément au parc automobile disponible. Les résultats s'affichent avec des prix clairs en Dinars. Ici, nous avons par exemple une Dacia Stepway à Alger ou un Tucson à Constantine."*

### 3. Fiche Véhicule : Transparence
*   **Action** : Cliquer sur une carte véhicule (ex: Dacia Stepway).
*   **À dire** : *"La fiche détaille tout ce qu'il faut savoir pour louer sereinement : l'agence est vérifiée, et les conditions sont explicites (Permis biométrique, Caution). Plus de mauvaises surprises au comptoir."*

### 4. Réservation : Simplicité
*   **Action** : Cliquer sur "Réserver ce véhicule".
*   **À dire** : *"Le processus est simplifié. Le client voit exactement ce qu'il paie maintenant (l'acompte de 15%) et ce qu'il paiera à la récupération du véhicule."*

### 5. KYC : Sécurité (Simulation)
*   **Action** : Après la réservation, cliquer sur "Compléter mon profil" ou simuler le KYC.
*   **À dire** : *"Pour sécuriser les loueurs, nous intégrons une étape de vérification d'identité numérique. Ici, nous simulons l'envoi du permis et d'un selfie."* -> *Valider le formulaire.*

### 6. Mon Compte : Suivi
*   **Action** : Se rendre sur la page "Mon Compte".
*   **À dire** : *"Enfin, le client retrouve toutes ses réservations dans son espace personnel, avec un statut clair pour chacune. L'expérience est bouclée."*
