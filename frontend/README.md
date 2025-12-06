# 🇩🇿 EkriMenDarek (Version Démo)

## 📌 Présentation
**EkriMenDarek** est une plateforme moderne de location de voitures en Algérie, conçue pour simplifier la mise en relation entre agences et particuliers.

Ce dépôt contient une **démonstration frontend locale** (Prototype).
> **Note Importante** : Cette version utilise des données simulées (mock data) pour illustrer le parcours utilisateur. Il n'y a pas de backend réel ni de traitement de paiement effectif.

---

## 🛠️ Stack Technique & Prérequis

### Technologies
*   **Framework** : Next.js 14 (App Router)
*   **Langage** : TypeScript (mode strict)
*   **Styling** : TailwindCSS
*   **Animations** : Framer Motion & Anime.js
*   **Design System** : Emerald Road (thème Algérie moderne)
*   **Graphiques** : Recharts (dashboard agence)
*   **Notifications** : Sonner (toasts)
*   **Persistance** : localStorage (simulation côté client)

### Prérequis
*   **Node.js** (v18 ou supérieur recommandé)
*   **npm** (installé avec Node.js)
*   **Git**

---

## 🚀 Installation & Lancement

1.  **Cloner le projet**
    ```bash
    git clone https://github.com/echeballah-coder/ekrimendarek-fullstack.git
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

---

## 🏗️ Architecture du Projet

```
frontend/
├── app/                      # Pages & Routes (Next.js App Router)
│   ├── page.tsx             # Page d'accueil
│   ├── recherche/           # Page de recherche de véhicules
│   ├── vehicule/[id]/       # Page détails véhicule (dynamique)
│   ├── reservation/         # Page de réservation
│   ├── kyc/                 # Page vérification d'identité
│   ├── account/             # Page compte utilisateur
│   └── agence/dashboard/    # Dashboard B2B pour agences
│
├── components/              # Composants réutilisables
│   ├── ui/                  # Composants UI de base (Button, Card, Badge...)
│   ├── layout/              # Header, Footer
│   ├── home/                # Composants spécifiques à l'accueil
│   ├── animations/          # Wrappers d'animation (Motion)
│   ├── account/             # Composants du compte (BookingsList)
│   └── agency/              # Composants dashboard (StatCard, Chart)
│
├── data/                    # Données mockées
│   ├── mockVehicles.ts      # Véhicules simulés (Algérie)
│   ├── mockBookings.ts      # Réservations mockées
│   └── mockAgencyStats.ts   # Statistiques dashboard B2B
│
├── features/                # Modules fonctionnels
│   └── vehicle/             # Logique véhicules (VehicleCard, filters...)
│
├── lib/                     # Utilitaires & helpers
│   ├── utils.ts             # Fonctions utilitaires (cn, etc.)
│   ├── animations.ts        # Presets animations Framer Motion
│   ├── mockDataHelpers.ts   # Helpers pour enrichir mock data
│   └── localBookings.ts     # Gestion localStorage réservations
│
└── styles/                  # Styles globaux (globals.css)
```

### Flux de Données
1. **Données Mock** : `data/mock*.ts` → sources de vérité
2. **Persistance Locale** : `lib/localBookings.ts` → localStorage navigateur
3. **Enrichissement** : `lib/mockDataHelpers.ts` → fusion mock + local
4. **Affichage** : Composants UI → rendu utilisateur

---

## ✨ Fonctionnalités de la Démo

Cette version de démonstration inclut les fonctionnalités clés suivantes :

*   **Page d'Accueil Immersive** : Hero section avec titres animés, barre de recherche intuitive et arguments de réassurance (CIB, 58 Wilayas).
*   **Recherche de Véhicules** : Listing dynamique avec filtres, affichant des données réalistes (prix en DZD, villes algériennes).
*   **Fiche Véhicule Complète** : Photos, caractéristiques techniques, et conditions de location adaptées au marché local (âge, permis biométrique).
*   **Tunnel de Réservation** : Calcul automatique du montant total et de l'acompte (15%), avec simulation de paiement.
*   **Parcours KYC (Vérification)** : Simulation d'envoi de documents (Permis, Selfie) avec feedback instantané.
*   **Espace Client** : Page "Mon Compte" affichant l'historique des réservations et leurs statuts (En attente, Confirmée, etc.).
*   **Persistance Locale** : Les réservations sont sauvegardées dans le navigateur et persistent après refresh.
*   **Notifications Toasts** : Feedback visuel pour actions importantes (Sonner).
*   **Dashboard Agence B2B** : Vue professionnelle avec KPIs, graphique de revenus, et tableau de réservations (accessible via "Espace Agence").

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
*   **À dire** : *"Pour sécuriser les loueurs, nous intégrons une étape de vérification d'identité numérique. Ici, nous simulons l'envoi du permis et d'un selfie."* → *Valider le formulaire.*

### 6. Mon Compte : Suivi
*   **Action** : Se rendre sur la page "Mon Compte".
*   **À dire** : *"Enfin, le client retrouve toutes ses réservations dans son espace personnel, avec un statut clair pour chacune. L'expérience est bouclée."*

### 7. Dashboard Agence (B2B)
*   **Action** : Cliquer sur "Espace Agence" dans le header.
*   **À dire** : *"Côté business, les agences ont accès à un tableau de bord professionnel : revenus du mois, taux d'occupation, historique graphique, et réservations en temps réel. Tout pour piloter l'activité."*

---

## 🔮 Prochaines Étapes (Roadmap)

Cette démo frontend est prête pour présentation. Pour passer en production, voici les étapes suivantes :

### Phase 1 : Backend & Infrastructure
- [ ] Développer l'API REST (Node.js/Express ou Nest.js)
- [ ] Base de données (PostgreSQL ou MongoDB)
- [ ] Authentification JWT
- [ ] Intégration passerelle de paiement (CIB/Edahabia)

### Phase 2 : Features Manquantes
- [ ] Upload réel de documents KYC (AWS S3 ou Cloudinary)
- [ ] Système de messagerie agence ↔ client
- [ ] Gestion de calendrier de disponibilité véhicules
- [ ] Système d'avis et notations

### Phase 3 : Production & Déploiement
- [ ] Tests E2E (Playwright ou Cypress)
- [ ] CI/CD (GitHub Actions)
- [ ] Déploiement (Vercel pour frontend, Railway/Render pour backend)
- [ ] Monitoring (Sentry, Analytics)

### Phase 4 : Évolution
- [ ] Application mobile (React Native ou Flutter)
- [ ] Géolocalisation temps réel
- [ ] Assurance intégrée
- [ ] Programme de fidélité

---

## 🧪 Commandes Utiles

```bash
# Développement
npm run dev              # Lancer le serveur de développement

# Build
npm run build            # Créer un build de production
npm start                # Lancer le serveur de production

# Qualité
npm run lint             # Vérifier le code (ESLint)
```

---

## 📞 Support & Contribution

Pour toute question ou suggestion d'amélioration, n'hésitez pas à ouvrir une issue sur GitHub.

---

**Créé avec ❤️ pour révolutionner la location de voitures en Algérie 🇩🇿**
