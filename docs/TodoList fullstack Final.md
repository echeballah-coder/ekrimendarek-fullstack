

1\. Mini-brief projet EkriMenDarek

Type d’appli / site  
Marketplace nationale de location de voitures en Algérie, avec :

Front web (Next.js) \+ futur app mobile,

Parcours client : recherche → fiche véhicule → réservation → acompte en ligne → récupération en agence,

Back-office agences \+ (plus tard) console admin. 

Stack technique cible

Frontend : Next.js (App Router) \+ TypeScript \+ Tailwind, architecture par features (auth, search, booking, agency, etc.). 

Backend : NestJS \+ TypeScript, Prisma \+ PostgreSQL, API REST v1 versionnée, modules par domaine (auth, users, agencies, vehicles, bookings, payments, reviews, KYC). 

Communication : HTTP/JSON, NEXT\_PUBLIC\_API\_URL côté front. 

Vision produit / contraintes métier

Acompte en ligne (10–15 %) via paiements locaux (CIB/Edahabia via passerelle type Chargily), reste et caution gérés en cash en agence. 

KYC léger (permis \+ selfie, OCR), blacklist de clients risqués, système d’avis. 

Notifications par email \+ WhatsApp (voucher). 

Roadmap & deadlines

Démarage immédiat : prototype Next.js \+ Tailwind 100 % mock pour démo (48h). 

Moyen terme (\~2 mois) : plateforme fullstack v1 (backend réel, front connecté, CI/CD, déploiement). 

Équipe cible (hypothèse)

1 chef de projet / product (toi),

1–2 dev frontend,

1–2 dev backend,

1 designer UI/UX (Figma),

éventuellement 1 DevOps (ou rôle partagé).

\---

2\. Todo list fullstack hiérarchisée

\> Astuce : tu peux transformer chaque bloc numéroté en Epic, et chaque sous-tâche en Issue avec labels frontend, backend, devops, phase:demo, phase:v1 comme dans ton fichier CSV. 

\---

Phase 0 – Cadrage & spécifications produit

0.1 Clarifier le scope MVP & v1

\[ \] Lister les parcours utilisateurs prioritaires (client, agence, admin minimal)  
But : figer ce qui doit absolument exister dans la v1 (recherche, réservation, paiement, KYC light, avis).

\[ \] Rédiger les user stories principales  
But : décrire “En tant que client, je peux…” pour recherche, booking, compte, KYC, etc.

\[ \] Prioriser les fonctionnalités en 2 paliers : MVP Demo vs Full Platform v1  
But : aligner les devs sur ce qui est nécessaire pour la démo vs ce qui vient après.

0.2 Spécifications fonctionnelles & UX

\[ \] Documenter les écrans clés (Home, Search, Vehicle, Booking, Account, Dashboard agence)  
But : servir de référence pour Figma et le front.

\[ \] Définir les règles métier de réservation (statuts, délais, annulation, no-show)  
But : alimenter les enums & workflows Booking côté backend. 

\[ \] Définir les règles de paiement (montant acompte, cas de remboursement)  
But : clarifier la logique Payment & transitions de statuts Booking. 

0.3 Spécifications techniques haut niveau

\[ \] Valider la stack (Next.js \+ NestJS \+ Prisma \+ PostgreSQL \+ Tailwind)  
But : figer la base technologique. 

\[ \] Valider la structure monorepo / multi-repo (EkriMenDarek-Web avec /frontend /backend)  
But : aligner sur l’organisation des dossiers. 

Dépendances : Phase 0 doit être faite avant la conception technique (Phase 1\) et le développement.

\---

Phase 1 – Conception technique & architecture

1.1 Architecture applicative & domaines

\[ \] Finaliser la liste des modules NestJS (auth, users, agencies, vehicles, bookings, payments, reviews, kyc, uploads, admin)  
But : découper le backend par domaines métier. 

\[ \] Finaliser la structure frontend (app/, components/, features/, lib/, types/)  
But : garantir un front modulaire, aligné avec les features métier. 

1.2 Modélisation des données (Prisma)

\[ \] Concevoir le schéma Prisma (User, Agency, Vehicle, Booking, Payment, Review, KYC, etc.)  
But : disposer d’un modèle de données cohérent avec les besoins. 

\[ \] Définir les enums (UserRole, BookingStatus, PaymentStatus, FuelType, Transmission, etc.)  
But : standardiser les états et types métier dans toute l’app.

\[ \] Documenter une vue d’ensemble DB (diagramme relationnel simple)  
But : faciliter la compréhension pour les devs & la maintenance.

1.3 Contrats d’API & DTO

\[ \] Lister les endpoints REST v1 par parcours (auth, search, booking, payment, review, kyc)  
But : figer les routes et payloads pour le front. 

\[ \] Définir les DTO de requête / réponse principaux  
But : servir de base à frontend/src/types/api.ts et aux contrôleurs Nest. 

Dépendances : Phase 1 s’appuie sur Phase 0 et prépare Backend (Phase 3\) et Frontend (Phase 4).

\---

Phase 2 – Setup DevOps & outillage

2.1 Repos, branches & Kanban

\[ \] Créer le repo GitHub principal EkriMenDarek-Web (ou valider celui existant)  
But : disposer d’une base commune front/back. 

\[ \] Créer les dossiers /frontend, /backend, /docs, /infra  
But : structurer le monorepo comme prévu. 

\[ \] Mettre en place un GitHub Project (Kanban) avec colonnes ToDo / In Progress / Done  
But : suivre visuellement l’avancement. 

\[ \] Créer les labels & milestones (MVP Demo, Full Platform v1)  
But : distinguer démo et livrable v1. 

2.2 Standards de code & CI minimal

\[ \] Configurer ESLint \+ Prettier (front & back) \+ .editorconfig  
But : homogénéiser le style et éviter les diffs inutiles. 

\[ \] Ajouter scripts NPM pour lint, test, build (front & back)  
But : faciliter la CI et la qualité.

\[ \] Mettre en place un workflow GitHub Actions (lint \+ tests) sur chaque PR  
But : garantir une qualité minimale avant merge. 

2.3 Environnements & configuration

\[ \] Créer .env.example front & back (DATABASE\_URL, JWT\_SECRET, NEXT\_PUBLIC\_API\_URL, etc.)  
But : documenter les variables sans exposer de secrets. 

\[ \] Configurer CORS & préfixe /api/v1 dans main.ts Nest  
But : préparer le versioning d’API et l’accès depuis Next.js. 

Dépendances : Phase 2 doit être faite juste après la structure du projet, avant de coder sérieusement.

\---

Phase 3 – Backend (API, BDD, sécurité)

B3.0 – Bootstrap backend

3.0.1 Initialisation NestJS \+ Prisma

\[ \] Créer le projet NestJS dans /backend (nest new backend)  
But : obtenir la structure modulaire par défaut. 

\[ \] Installer Prisma \+ @prisma/client et exécuter prisma init  
But : préparer la couche ORM & DB. 

\[ \] Créer PrismaModule et PrismaService  
But : centraliser l’accès DB dans Nest. 

B3.1 – Auth & Users

3.1.1 Modèle & migration Users

\[ \] Définir modèle User \+ enum UserRole \+ champs KYC de base  
But : distinguer CLIENT / AGENCY / ADMIN, préparer KYC. 

\[ \] Lancer prisma migrate dev \--name init\_core\_models  
But : créer la structure DB initiale. 

3.1.2 AuthModule & UserModule

\[ \] Créer UserModule, UserService, UserController  
But : isoler la logique utilisateur (profil, GET /users/me). 

\[ \] Créer AuthModule, AuthService, AuthController  
But : gérer POST /auth/register \+ POST /auth/login avec JWT. 

\[ \] Configurer JWT (JwtStrategy, JwtAuthGuard, hashage bcrypt)  
But : sécuriser les routes privées. 

Dépendances : nécessite Phase 1 (modèle) et Phase 2 (config env).

B3.2 – Agencies & Vehicles

3.2.1 Modèles & migration

\[ \] Ajouter modèles Agency & Vehicle (relations, filtres, deposit, isActive, images)  
But : couvrir les besoins de recherche & fiches véhicules. 

3.2.2 Modules & endpoints

\[ \] Créer AgencyModule (POST /agencies, GET /agencies/me)  
But : permettre aux agences de se configurer. 

\[ \] Créer VehicleModule (POST /vehicles, PUT /vehicles/:id, gestion isActive)  
But : gérer la flotte des agences. 

\[ \] Implémenter GET /vehicles avec filtres \+ DTO de liste  
But : alimenter la page Search. 

\[ \] Implémenter GET /vehicles/:id (détails \+ agence \+ conditions)  
But : alimenter la fiche véhicule. 

B3.3 – Bookings & Payments

3.3.1 Booking

\[ \] Ajouter modèle Booking \+ enum BookingStatus  
But : décrire le cycle PENDING\_PAYMENT → … → COMPLETED. 

\[ \] Créer BookingModule (POST /bookings, GET /bookings/me, GET /bookings/:id)  
But : gérer création & consultation des réservations.

3.3.2 Payment (mock puis réel)

\[ \] Ajouter modèle Payment \+ enum PaymentStatus  
But : tracer les acomptes. 

\[ \] Créer PaymentModule \+ POST /payments/mock (pour la démo)  
But : simuler un paiement et passer Booking en PENDING\_CONFIRMATION. 

\[ \] Créer stub POST /payments/webhook  
But : préparer l’intégration future de la passerelle réelle. 

B3.4 – Reviews & KYC

\[ \] Ajouter modèle Review \+ module Reviews (POST /reviews, GET /agencies/:id/reviews)  
But : permettre les avis post-location. 

\[ \] Étendre User avec champs KYC \+ endpoint POST /users/me/kyc  
But : soumettre les documents (URL fichiers dans un premier temps). 

B3.5 – Sécurité & middlewares

\[ \] Activer ValidationPipe global \+ DTO \+ class-validator  
But : valider systématiquement toutes les entrées. 

\[ \] Activer Helmet, rate limiting, logging HTTP  
But : sécuriser et monitorer l’API. 

\[ \] Mettre en place guards métiers (KycGuard, RoleGuard, OwnershipGuard)  
But : contrôler les accès selon rôle et ressources. 

\---

Phase 4 – Frontend (UI/UX, composants, intégration API)

F4.0 – Bootstrap & design system

4.0.1 Initialisation Next.js \+ Tailwind

\[ \] Créer le projet Next.js (TypeScript) dans /frontend  
But : disposer de l’app shell. 

\[ \] Installer & configurer Tailwind \+ palette Wraith, typo, styles globaux  
But : mettre en place le design system de base. 

4.0.2 UI kit & layout global

\[ \] Créer composants UI (Button, Input, Card, Badge, skeletons)  
But : réutiliser partout un langage visuel cohérent. 

\[ \] Créer layout global (Header, Footer, MainLayout)  
But : encadrer toutes les pages avec nav \+ zone confiance. 

F4.1 – Pages publiques & funnel de réservation

\[ \] Implémenter Home avec Hero \+ barre de recherche flottante  
But : point d’entrée principal du funnel. 

\[ \] Implémenter page Search (listing \+ filtres \+ skeletons)  
But : afficher les véhicules depuis GET /vehicles. 

\[ \] Implémenter page Fiche véhicule (galerie, conditions, CTA “Réserver”)  
But : donner toutes les infos avant engagement. 

\[ \] Implémenter page Booking (récap, calcul prix, appel POST /bookings puis /payments/mock)  
But : compléter le tunnel de réservation pour la démo, puis pour la v1. 

\[ \] Implémenter page success réservation  
But : rassurer l’utilisateur, afficher recap & next steps. 

F4.2 – Espace compte & dashboards

\[ \] Créer espace client /account (profil, KYC, “Mes réservations” via GET /bookings/me)  
But : permettre à l’utilisateur de gérer ses infos et suivre ses bookings. 

\[ \] Créer dashboard agence (liste véhicules, liste réservations, stats simples)  
But : permettre aux agences de gérer leur activité. 

F4.3 – Hooks & gestion d’état

\[ \] Implémenter apiClient \+ hooks useAuth, useAPI, useNotifications  
But : centraliser les appels d’API et l’état d’auth. 

\[ \] Intégrer React Hook Form (ou équivalent) pour les formulaires critiques (auth, booking, KYC)  
But : validation côté front \+ UX propre.

\---

Phase 5 – Tests (unitaires, intégration, E2E)

5.1 Backend – tests unitaires & intégration

\[ \] Écrire tests unitaires pour services critiques (AuthService, BookingService, PaymentService)  
But : sécuriser la logique métier. 

\[ \] Écrire tests d’intégration sur endpoints clés (register/login, vehicles list, bookings)  
But : valider les flux end-to-end backend.

5.2 Frontend – tests UI & intégration

\[ \] Ajouter tests pour composants critiques (SearchBar, VehicleCard, BookingForm)  
But : éviter les régressions UI majeures.

\[ \] Tester les flux principaux (Home → Search → Vehicle → Booking → Success)  
But : garantir que le parcours standard fonctionne après chaque change.

5.3 E2E (optionnel v1+)

\[ \] Mettre en place Playwright ou Cypress pour 1–2 scénarios complets  
But : automatiser les tests de smoke sur l’ensemble de la stack.

\---

Phase 6 – Documentation

6.1 Docs techniques

\[ \] Configurer Swagger dans Nest (/api-docs)  
But : documenter l’API pour front & mobile. 

\[ \] Rédiger README racine (architecture, commandes, env)  
But : on-boarding rapide des nouveaux devs. 

6.2 Docs produit / usage

\[ \] Rédiger mini-guide back-office agence  
But : expliquer comment utiliser le dashboard agence.

\[ \] Lister les flows KYC et support client  
But : clarifier process pour l’équipe support/fonctionnel.

\---

Phase 7 – Déploiement & monitoring

7.1 Conteneurisation & environnements

\[ \] Écrire Dockerfile backend \+ docker-compose (backend \+ PostgreSQL)  
But : standardiser la mise en prod & staging. 

\[ \] Configurer déploiement frontend (Vercel ou équivalent)  
But : livrer rapidement le front en prod. 

7.2 CI/CD

\[ \] Ajouter pipelines de déploiement (GitHub Actions → VPS / cloud)  
But : automatiser la mise en ligne après validation CI. 

7.3 Monitoring & logs

\[ \] Mettre en place health-checks & endpoint /health côté backend  
But : suivre la disponibilité du service.

\[ \] Centraliser logs d’erreurs (par ex. Sentry) & métriques (CPU, RAM, requêtes)  
But : pouvoir réagir rapidement en cas de problème en prod.