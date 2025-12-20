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
npm run lint         # Vérifier qu'il n'y a pas d'erreurs ESLint
npm run build        # Vérifier que le build passe sans erreur
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

### Notes importantes

- **Thème** : Le toggle dark/light/system doit persister après refresh
- **Acompte** : Toujours affiché à 5% du montant total sur `/reservation`
- **Auth démo** : Les pages login/signup sont en mode démo (pas de backend)

---

## 📋 À ajouter quand disponible

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
