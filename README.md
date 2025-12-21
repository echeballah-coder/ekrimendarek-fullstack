# EkriMenDarek - Monorepo Fullstack

Bienvenue sur le repository principal du projet **EkriMenDarek**, la plateforme de location de voitures en Algérie.

## 📂 Structure du Monorepo

Ce repository contient l'ensemble du code source du projet :

- `frontend/` : Application Web (Next.js 14 + TailwindCSS + TypeScript)
- `backend/` : Application Serveur (NestJS - à venir)
- `docs/` : Documentation technique et fonctionnelle
- `shared/` : Code partagé (Types, Constantes)

## 🚀 Démarrage Rapide

### Frontend

Allez dans le dossier frontend pour lancer l'application web :

```bash
cd frontend
npm install
npm run dev
```

### Backend (à venir)

Le backend sera développé avec NestJS.

## 🛠️ Stack Technique

- **Frontend** : Next.js 14 (App Router), TypeScript, TailwindCSS
- **Backend** : NestJS, Prisma, PostgreSQL (prévu)
- **Outils** : Monorepo Git

## ✅ Smoke Test (avant push)

Checklist rapide (5–10 min) pour vérifier que le frontend fonctionne correctement avant chaque push.

### A) Commandes (dans `/frontend`)

```bash
cd frontend
npm install          # Si nécessaire
npm run check        # Lint + Build (validation complète)
npm run dev          # Lancer le serveur de développement
```

### B) UI : Pages à tester rapidement

Ouvrir chaque page et vérifier visuellement :

- **`/` (Home)** : Header présent, toggle thème (light/dark/system) fonctionne, Hero section OK
- **`/recherche`** : Résultats affichés correctement, sans latence artificielle
- **`/vehicule/[id]`** : Page détail s'affiche (ex: `/vehicule/1` ou `/vehicule/2`)
- **`/reservation`** : Acompte 5% affiché + calcul total cohérent
- **`/auth/login`** : Validations + messages d'erreur visibles
- **`/auth/signup`** : Validations + messages d'erreur visibles
- **`/account`** : 
  - Non connecté → Card "accès réservé" visible
  - Connecté → Profil + liste réservations affichés

### C) États critiques

- **Console** : Aucune erreur grave (hydration, key manquante, etc.) ni warning bloquant
- **Liste réservations** : Si bloc vide apparaît, rafraîchir 2–3 fois et noter le comportement
- **Thèmes** : Vérifier que dark/light/system s'appliquent correctement (pas de flash)
- **Connecté** : Header affiche "Bienvenue, Utilisateur", bouton Déconnexion fonctionne
- **Déconnecté** : Header affiche "Connexion/Adhésion"
- **Formulaires** : Les validations côté client fonctionnent (signup, login, KYC docs)

### D) Notes

- **Mode démo** : Toutes les pages utilisent des données mockées (pas de backend)
- **Build sous Windows** : Si `npm run build` échoue avec EBUSY/EINVAL, c'est lié à OneDrive/antivirus (pas un bug du code). Le `npm run lint` valide le code.

## 🧪 P4 — Flow Smoke Tests (E2E Auth)

Validation bout-en-bout du flow authentification (P4.1–P4.3) : anonyme → login/signup → retour automatique avec contexte restauré.

### Scénarios à tester

**S1 — Anonyme, accès direct /reservation (sans query)**
1. Déconnexion (si connecté)
2. Accéder à `/reservation` (sans query params)
3. **Attendu** :
   - Redirection vers `/auth/login?returnTo=%2Freservation`
   - Draft réservation : **NON créé** (pas de contexte utile)
   - Micro-copy affiché : "Après connexion, vous serez renvoyé vers l'étape où vous étiez"

**S2 — Anonyme, accès /reservation avec contexte complet**
1. Déconnexion
2. Accéder à `/reservation?vehicleId=1&pickupWilaya=Alger&pickupPlace=Hydra&pickupDate=2025-12-26&pickupTime=10:00&returnDate=2025-12-29&returnTime=10:00`
3. **Attendu** :
   - Draft créé en `localStorage["emd_reservation_draft_v1"]` (JSON avec tous les params)
   - Redirection vers `/auth/login?returnTo=%2Freservation%3FvehicleId%3D1%26...`
4. Se connecter (email valide + password 8+ caractères)
5. **Attendu** :
   - Retour automatique vers `/reservation` avec **tous les params restaurés** dans l'URL
   - Draft **purgé** de localStorage (clé absente)
   - Page réservation s'affiche normalement avec contexte préservé

**S3 — returnTo malicieux (open redirect protection)**
1. Ouvrir `/auth/login?returnTo=https://evil.com`
2. Se connecter
3. **Attendu** :
   - `sanitizeReturnTo()` bloque l'URL externe
   - Redirection vers `/` (fallback sécurisé)
   - **PAS** de redirection vers `https://evil.com`

**S4 — Draft présent mais returnTo absent**
1. Créer manuellement un draft en localStorage (via `/dev/flow` ou console) :
   ```json
   {
     "version": 1,
     "createdAt": "2025-12-21T00:00:00.000Z",
     "vehicleId": "2",
     "pickupDate": "2025-12-25"
   }
   ```
2. Ouvrir `/auth/login` (sans query returnTo)
3. Se connecter
4. **Attendu** :
   - Redirection vers `/` (fallback)
   - Aucun crash console
   - Draft **non purgé** (car route cible "/" n'est pas pertinente)

**S5 — Draft partiel (hasUsefulData = false)**
1. Déconnexion
2. Accéder à `/reservation` (sans query)
3. **Attendu** :
   - `saveReservationDraft()` détecte `hasUsefulData = false`
   - Draft **NON créé** en localStorage
   - Pas de pollution localStorage

**S6 — Logout (purge complète)**
1. Créer un draft (S2) + session active + KYC state (via signup)
2. Cliquer "Déconnexion"
3. **Attendu** :
   - `localStorage["ekrimendarek_auth_v1"]` supprimé (session)
   - `localStorage["emd_kyc_v1"]` supprimé (KYC)
   - `localStorage["emd_reservation_draft_v1"]` supprimé (draft)
   - Aucun résidu de l'utilisateur précédent

**S7 — Signup au lieu de login (comportement identique)**
1. Répéter S2 mais cliquer "Créer un compte" au lieu de "Se connecter"
2. Remplir formulaire signup + documents KYC obligatoires
3. Soumettre
4. **Attendu** :
   - Micro-copy affichée : "Après création du compte, vous reprenez là où vous vous étiez arrêté"
   - Même comportement de redirection et restauration que S2
   - Draft purgé après retour

**S8 — Multi-user demo (isolation des données)**
1. User A : signup → créer draft/KYC → logout
2. Vérifier localStorage vide (S6)
3. User B : signup avec email différent
4. **Attendu** :
   - Aucune trace de User A (draft/KYC/session)
   - User B démarre avec localStorage propre
   - Isolation parfaite entre utilisateurs démo

### Outil de test

Page DEV-only : `/dev/flow` (disponible uniquement en `NODE_ENV=development`)
- **État actuel** : session, draft, KYC (présence/absence)
- **Actions rapides** : seed draft, clear draft/session/KYC
- **Lanceurs scénarios** : boutons pour déclencher S1-S4 directement
- **Résultats attendus** : checklist des attendus en mode collapsible

---

## 📝 À ajouter quand disponible

Pages futures à tester lors de leur création :

- [ ] `/reservation/start` - Formulaire de réservation simplifié
- [ ] `/reservation/manage` - Gestion des réservations actives
- [ ] `/locations` - Liste des emplacements/agences
- [ ] `/help` - Aide / FAQ
- [ ] `/contact` - Formulaire de contact
- [ ] `/receipt` - Reçu de réservation
- [ ] `/legal` - Mentions légales
- [ ] `/dev/health` - Page de santé / diagnostics

---

**Projet EkriMenDarek**
