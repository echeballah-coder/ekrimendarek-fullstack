✅ Prototype NEXT.JS \+ Tailwind prêt pour présentation dans 2 jours (sans backend, sans logique réelle).  
🎯 Préparation propre du projet fullstack pour développement complet jusqu’au déploiement.  
📌 Avec création d’un Kanban GitHub.

\---

✅ 1\) Synthèse claire avant de commencer

Voici ce que j’ai compris et validé :

🎯 Objectif court terme (48h)

Créer une maquette complète du site EkriMenDarek avec Next.js \+ Tailwind, sans logique métier réelle, mais avec toutes les pages principales, les composants, les sections visuelles, pour une démonstration investisseur.

➡️ Ce prototype doit ressembler à un vrai site, même si tout est mock.

🎯 Objectif moyen terme (2 mois)

Construire le vrai site web SaaS :  
backend NestJS, API, base PostgreSQL, système de réservation, paiement, KYC, dashboards, CI/CD, déploiement.

🎯 Structure demandée

Tu veux une todolist très fractionnée, pas-à-pas, depuis :

1\. la création du dossier mère

2\. création dossier backend & frontend

3\. initialisation GitHub

4\. création du Kanban

5\. mise en place du prototype

6\. mise en place du vrai backend

7\. développement du vrai frontend

8\. jusqu’au déploiement

🎯 Contraintes

Réunion investisseurs dans 2 jours

Prototype local sans backend \= OUI

Stack prototype : Next.js \+ Tailwind

Stack production : NestJS \+ Prisma \+ PostgreSQL / Next.js

Tu veux QUOTIDIENNEMENT des petites étapes claires à valider.

\---

🚀 2\) TODO-LIST FULLSTACK ULTRA FRACTIONNÉE

📁 Phase 0 — Mise en place globale du projet (jour 0\)

0.1 — Création des dossiers

\[ \] Créer un dossier parent : ekrimendarek/

\[ \] Créer sous-dossier : /frontend

\[ \] Créer sous-dossier : /backend

\[ \] Créer sous-dossier : /docs (pour cahier de charge \+ PDF \+ brand)

\---

0.2 — Initialisation Git

\[ \] Ouvrir VS Code → ouvrir le dossier ekrimendarek/

\[ \] Initialiser git init

\[ \] Créer un repo GitHub → EkriMenDarek

\[ \] Connecter repo local :  
git remote add origin \<url\>

\[ \] Créer un .gitignore global (frontend \+ backend)

\[ \] Premier commit :  
chore: init project structure

\---

0.3 — Création du Kanban GitHub Project

👉 Utilité (simple) :

Un Kanban sert à organiser les tâches visuellement pour que l’équipe sache :

ce qui est à faire

ce qui est en cours

ce qui est terminé

👉 Fonctionnement :

3 colonnes :  
To Do → In Progress → Done

👉 Pourquoi l’avoir :

✔ évite l’oubli  
✔ tout le monde avance dans le bon ordre  
✔ on voit les priorités et les dépendances

👉 Comment travailler avec :

Chaque tâche \= une carte.  
Tu la déplaces de colonne en colonne selon l’avancement.

Tâches pour le Kanban :

\[ \] Aller dans GitHub → Projects → New Project

\[ \] Choisir template "Kanban"

\[ \] Ajouter colonnes : A faire, En cours, Terminé

\[ \] Ajouter les grandes catégories :

Setup général

Prototype Frontend

Backend réel

Frontend réel

Déploiement

\[ \] Ajouter les premières cartes (issues) liées aux tâches ci-dessous

\---

🎨 3\) PHASE FRONTEND : Prototype pour investisseurs (48h)

🎯 Objectif :

👉 Un site NEXT.JS \+ Tailwind, entièrement visuel, zéro API, mais qui montre :

Accueil

Recherche (UI)

Listing véhicules (mock)

Fiche véhicule

Formulaire de réservation (mock)

Dashboard simple (mock)

\---

📁 Phase F1 — Initialisation du Frontend

\[ \] Aller dans /frontend

\[ \] Lancer :  
npx create-next-app@latest .

\[ \] Choisir TypeScript : YES

\[ \] Installer Tailwind :  
npx tailwindcss init \-p

\[ \] Configurer Tailwind dans globals.css

\[ \] Ajouter police (Inter / Poppins)

\---

🎨 Phase F2 — Design System rapide

\[ \] Créer fichier src/styles/variables.css

\[ \] Ajouter palette Wraith (tes couleurs)

\[ \] Définir styles globaux (h1, h2, p)

\[ \] Créer composants :

\[ \] Bouton (components/ui/Button.tsx)

\[ \] Input (components/ui/Input.tsx)

\[ \] Card (components/ui/Card.tsx)

\---

🧭 Phase F3 — Layout

\[ \] Créer components/layout/Header.tsx

\[ \] Ajouter logo texte \+ menu simple

\[ \] Créer components/layout/Footer.tsx

\[ \] Créer components/layout/Container.tsx

\[ \] Vérifier responsive

\---

🏠 Phase F4 — Page d’accueil

\[ \] Créer /app/page.tsx

\[ \] Section Hero

\[ \] Barre de recherche (UI seulement)

\[ \] CTA "Voir les offres"

\---

🔍 Phase F5 — Page Résultats

\[ \] Créer /app/recherche/page.tsx

\[ \] Ajouter barre de recherche

\[ \] Créer mock JSON des véhicules

\[ \] Afficher résultats sous forme de cartes

\[ \] Ajouter filtres (non fonctionnels)

\---

🚗 Phase F6 — Fiche Véhicule

\[ \] Créer /app/vehicule/\[id\]/page.tsx

\[ \] Galerie photo (mock)

\[ \] Caractéristiques

\[ \] CTA Réserver (non fonctionnel)

\[ \] Conditions & Caution

\---

💳 Phase F7 — Page Réservation (mock)

\[ \] Créer /app/reservation/page.tsx

\[ \] Récap véhicule \+ dates

\[ \] Calcul prix (mock JS)

\[ \] Bouton “Simuler paiement” → affiche succès

\---

🧪 Phase F8 — KYC page (UI)

\[ \] Créer /app/kyc/page.tsx

\[ \] Inputs fichier (mock)

\[ \] Retour visuel "fichier chargé"

\---

📌 Résultat attendu en 48h

Un site navigable, propre, cohérent, responsive.  
Les investisseurs pourront cliquer partout → illusion d’un vrai produit.

\---

🔧 4\) PHASE BACKEND — Mise en place (après la démo)

🎯 Objectif :  
Créer la structure mais ne pas coder la logique avant la démonstration.

\---

📁 Phase B1 — Setup Backend (préparation)

\[ \] Aller dans /backend

\[ \] Lancer npm init \-y

\[ \] Installer NestJS CLI  
npm i \-g @nestjs/cli

\[ \] Créer projet :  
nest new backend

\[ \] Supprimer module Cats

\[ \] Installer Prisma :  
npm i prisma @prisma/client

\---

📁 Phase B2 — Modélisation base

\[ \] npx prisma init

\[ \] Définir modèles :

User

Agency

Vehicle

Booking

Payment

Review

KYC

\[ \] npx prisma migrate dev

\---

📁 Phase B3 — Squelettes modules

\[ \] nest generate module auth

\[ \] nest generate module users

\[ \] nest generate module vehicles

\[ \] nest generate module agency

\[ \] nest generate module bookings

\[ \] nest generate module payments

(On ne code pas encore la logique)

\---

🚀 5\) PHASE DÉPLOIEMENT — Plus tard

\[ \] Docker backend

\[ \] Deploy backend (VPS / AWS)

\[ \] Deploy frontend (Vercel recommandé)

\[ \] CI/CD GitHub Actions

\[ \] Nom de domaine \+ SSL

