1️⃣ Synthèse globale des todo / architecture

Vision d’ensemble

D’après tes docs et listes :

Architecture

Backend : NestJS \+ Prisma \+ PostgreSQL, modules par domaine : auth, users, agencies, vehicles, bookings, payments, reviews, KYC.

Frontend : Next.js \+ Tailwind, structure claire app/, components/, features/, lib/, types/ pour garder la logique par “feature métier” (auth, booking, search…).

DevOps : Docker, CI/CD, Swagger, environnement .env, monitoring.

Backend todo list

Phases B2–B7 : modèles Prisma (User, Agency, Vehicle, Booking, Payment, Review), intégration Prisma↔Nest, modules User/Auth, Agency, Vehicle (CRUD \+ filtres), Booking (statuts, création, listing), Payment (mock \+ webhook), Reviews. 

Frontend todo list

Phases F2–F4 : UI kit (cards, badges, skeletons), layout global (Header, Footer, nav), homepage avec hero \+ barre de recherche flottante, page résultats, fiches véhicules, etc. 

Stratégie “démo dans 2 jours” \+ continuité

On va marquer les issues de démo (MVP) avec :

Milestone : MVP Demo

Label : phase:demo

Et les issues qui préparent la suite avec :

Milestone : Full Platform v1

Labels : phase:v1 (ou phase:post-demo)

Comme ça :

Tu commences par une petite démo fonctionnelle (recherche → fiche véhicule → fausse réservation \+ faux paiement),

Puis tu continues sur la même base de code sans rien jeter (on ne crée pas un “projet démo jetable”).

\---

2️⃣ Fichier CSV d’import GitHub (exemple complet)

👉 À faire dans VS Code

1\. Crée un fichier issues-ekrimendarek.csv à la racine de ton repo.

2\. Colle le contenu ci-dessous tel quel.

3\. Sauvegarde en UTF-8.

\> Important :

En-têtes utilisés : title,body,labels,milestone

Tu peux bien sûr rajouter des lignes en copiant le format.

title,body,labels,milestone  
"BE: Setup NestJS \+ Prisma","Objectif: Initialiser le backend NestJS avec Prisma et une base PostgreSQL minimale.

Critères d'acceptation:  
\- La commande de démarrage NestJS fonctionne en local.  
\- Prisma est configuré avec une datasource PostgreSQL.  
\- Une migration initiale est appliquée avec au moins User, Agency, Vehicle, Booking.

Checklist:  
\- \[ \] Créer le projet NestJS (tsconfig, eslint, prettier).  
\- \[ \] Installer Prisma et initialiser \`schema.prisma\`.  
\- \[ \] Définir les modèles de base (User, Agency, Vehicle, Booking).  
\- \[ \] Exécuter \`npx prisma migrate dev\` pour la migration initiale.","backend,setup,db,priority:high,phase:demo","MVP Demo"  
"FE: Setup Next.js \+ Tailwind \+ structure","Objectif: Initialiser l'application frontend Next.js avec TailwindCSS et la structure de dossiers (app, components, features, lib, types).

Critères d'acceptation:  
\- L'app Next.js démarre avec \`npm run dev\`.  
\- Tailwind est actif et fonctionnel.  
\- Les dossiers de base sont créés (app/, components/, features/, lib/, types/).

Checklist:  
\- \[ \] Créer le projet Next.js en TypeScript.  
\- \[ \] Installer et configurer TailwindCSS.  
\- \[ \] Créer la structure de dossiers décrite dans la doc.  
\- \[ \] Ajouter une page d'accueil minimale pour vérifier l'affichage.","frontend,setup,ui,priority:high,phase:demo","MVP Demo"  
"BE: Authentification JWT (register \+ login)","Objectif: Permettre aux utilisateurs (CLIENT/AGENCY) de s'inscrire et de se connecter via JWT.

Critères d'acceptation:  
\- Endpoint POST /api/v1/auth/register fonctionnel.  
\- Endpoint POST /api/v1/auth/login renvoie un JWT valide.  
\- Les mots de passe sont hashés en base.

Checklist:  
\- \[ \] Créer UserModule, UserService, UserController.  
\- \[ \] Créer AuthModule, AuthService, AuthController.  
\- \[ \] Installer @nestjs/passport, passport-jwt, bcrypt.  
\- \[ \] Implémenter register \+ login avec payload (id, role).  
\- \[ \] Protéger une route simple GET /api/v1/users/me avec JwtGuard.","backend,auth,security,priority:high,phase:demo","MVP Demo"  
"BE: Agencies \+ Vehicles (modèle et endpoints de base)","Objectif: Permettre à une agence de se créer et de gérer des véhicules de base.

Critères d'acceptation:  
\- Modèles Agency et Vehicle présents dans Prisma.  
\- Routes POST /api/v1/agencies et POST /api/v1/vehicles fonctionnelles.  
\- Un véhicule est toujours lié à une agency existante.

Checklist:  
\- \[ \] Définir modèles Agency et Vehicle dans Prisma (wilaya, city, pricePerDay, gearbox, fuel, deposit, isActive, etc.).  
\- \[ \] Créer AgencyModule \+ CRUD minimal (create \+ get self).  
\- \[ \] Créer VehicleModule avec création et update de véhicule.  
\- \[ \] Gérer le champ isActive pour afficher/masquer dans les recherches.","backend,domain,priority:high,phase:demo","MVP Demo"  
"BE: Liste des véhicules avec filtres (recherche)","Objectif: Fournir un endpoint de recherche de véhicules avec filtres alignés sur le front.

Critères d'acceptation:  
\- GET /api/v1/vehicles accepte au moins: location, startDate, endDate, priceMin, priceMax, gearbox, fuel.  
\- La réponse contient une liste optimisée pour les cartes: id, titre, prix, localisation, boîte, carburant, caution, image principale, hostVerified.

Checklist:  
\- \[ \] Implémenter GET /api/v1/vehicles avec query params.  
\- \[ \] Appliquer les filtres Prisma correspondants.  
\- \[ \] Retourner un DTO allégé pour la liste de résultats.  
\- \[ \] Ajouter des tests d'intégration simples.","backend,feature,priority:high,phase:demo","MVP Demo"  
"BE: Booking de base (création de réservation)","Objectif: Permettre la création d'une réservation avec calcul du prix et de l'acompte.

Critères d'acceptation:  
\- Modèle Booking ajouté avec BookingStatus.  
\- POST /api/v1/bookings crée une réservation en PENDING\_PAYMENT.  
\- Le total et l'acompte (ex: 15%) sont calculés côté backend.

Checklist:  
\- \[ \] Ajouter modèle Booking dans Prisma (clientId, vehicleId, dates, totalPrice, depositAmount, status).  
\- \[ \] Créer BookingModule, BookingService, BookingController.  
\- \[ \] Implémenter POST /api/v1/bookings (CLIENT).  
\- \[ \] Retourner { bookingId, totalPrice, depositAmount, status } utilisable par le front.","backend,feature,priority:high,phase:demo","MVP Demo"  
"BE: Paiement mock d'acompte (pour démo)","Objectif: Simuler un paiement d'acompte côté backend pour la démo, sans vraie passerelle bancaire.

Critères d'acceptation:  
\- Modèle Payment défini (bookingId, amount, status, method, transactionRef).  
\- POST /api/v1/payments/mock met à jour Booking en PENDING\_CONFIRMATION.  
\- Le flux search \-\> booking \-\> paiement mock est complet en démo.

Checklist:  
\- \[ \] Ajouter modèle Payment et enum PaymentStatus dans Prisma.  
\- \[ \] Créer PaymentModule, PaymentService, PaymentController.  
\- \[ \] Implémenter POST /api/v1/payments/mock (SUCCESS automatique).  
\- \[ \] Mettre à jour la réservation liée avec le bon status.","backend,payment,priority:high,phase:demo","MVP Demo"  
"FE: Design system minimal (boutons, inputs, cartes)","Objectif: Créer un petit design system Tailwind pour réutiliser les composants (Button, Input, Card, Badge).

Critères d'acceptation:  
\- Composants réutilisables disponibles dans components/ui/.  
\- Style cohérent avec la charte EkriMenDarek (couleurs, arrondis, ombres).

Checklist:  
\- \[ \] Créer Button, Input, Card, Badge dans components/ui/.  
\- \[ \] Ajouter un style de skeleton pour chargement des cartes véhicules.  
\- \[ \] Documenter rapidement comment utiliser ces composants (README ou Storybook léger).","frontend,ui,design-system,priority:high,phase:demo","MVP Demo"  
"FE: Header, navigation et footer","Objectif: Mettre en place le layout global avec Header (logo, nav, CTA) et Footer (liens légaux, logos paiement).

Critères d'acceptation:  
\- Header sticky avec logo EkriMenDarek et liens Accueil / Rechercher / Mon compte.  
\- Footer avec mini texte légal, CGU/CGV, contact et zone confiance paiement.

Checklist:  
\- \[ \] Ajouter Header.tsx avec navigation responsive.  
\- \[ \] Ajouter Footer.tsx avec liens et placeholders logos CIB/Edahabia.  
\- \[ \] Envelopper les pages dans MainLayout.tsx.","frontend,layout,priority:medium,phase:demo","MVP Demo"  
"FE: Homepage avec hero \+ barre de recherche","Objectif: Créer la page d'accueil avec une hero section et une barre de recherche flottante.

Critères d'acceptation:  
\- Hero avec titre clair (location en Algérie) et 1–2 boutons.  
\- Barre de recherche contenant Lieu, Date début, Date fin, bouton Rechercher.

Checklist:  
\- \[ \] Créer la section hero (titre, texte, CTA).  
\- \[ \] Créer le composant SearchBar (lieu \+ dates).  
\- \[ \] Appliquer un style flottant (glassmorphism léger) à la barre de recherche.  
\- \[ \] Connecter le bouton Rechercher à la page de résultats (routing).","frontend,feature,priority:high,phase:demo","MVP Demo"  
"FE: Page résultats de recherche \+ cartes véhicules","Objectif: Afficher les résultats de recherche sous forme de cartes avec filtres de base.

Critères d'acceptation:  
\- La page consomme l'API GET /api/v1/vehicles.  
\- Les résultats s'affichent sous forme de cartes avec image, titre, prix, caution, note.  
\- Les filtres principaux (prix min/max, gearbox, fuel) sont utilisables.

Checklist:  
\- \[ \] Créer SearchResultCard.tsx pour une carte véhicule.  
\- \[ \] Implémenter la page de résultats (routing \+ récupération query params).  
\- \[ \] Appeler l'API /vehicles et gérer l'état de chargement \+ erreurs.  
\- \[ \] Ajouter UI simple pour les filtres.","frontend,feature,priority:high,phase:demo","MVP Demo"  
"FE: Fiche véhicule et formulaire de réservation","Objectif: Créer la page de détail d'un véhicule avec affichage complet et formulaire de réservation.

Critères d'acceptation:  
\- Page /vehicles/\[id\] affiche photos, infos techniques, conditions et avis (placeholder).  
\- Formulaire de réservation (dates) déclenche POST /api/v1/bookings.  
\- En cas de succès, redirection vers une page de confirmation avec recap.

Checklist:  
\- \[ \] Créer CarGallery.tsx, CarDetails.tsx, CarConditions.tsx.  
\- \[ \] Intégrer le formulaire de réservation dans la page.  
\- \[ \] Connecter le formulaire à l'API bookings.  
\- \[ \] Rediriger vers une page de succès avec les infos renvoyées par l'API.","frontend,feature,priority:high,phase:demo","MVP Demo"  
"FE: Page de confirmation de réservation (succès)","Objectif: Afficher un résumé clair de la réservation et du paiement mock pour la démo.

Critères d'acceptation:  
\- La page affiche bookingId, véhicule, dates, montant total et acompte.  
\- Un message clair indique que la réservation est confirmée côté plateforme.

Checklist:  
\- \[ \] Créer une page success avec un design simple mais rassurant.  
\- \[ \] Récupérer les infos de la réservation via API ou via state.  
\- \[ \] Ajouter un bouton pour revenir à la page d'accueil ou à Mes réservations.","frontend,feature,priority:medium,phase:demo","MVP Demo"  
"FE: Compte utilisateur simplifié (Mes réservations)","Objectif: Permettre à l'utilisateur connecté de voir ses réservations (liste simple).

Critères d'acceptation:  
\- Page protégée listant les réservations de l'utilisateur.  
\- Affichage du statut (PENDING\_PAYMENT, PENDING\_CONFIRMATION, CONFIRMED, etc.).

Checklist:  
\- \[ \] Créer page /account avec protection par auth.  
\- \[ \] Appeler GET /api/v1/bookings/me.  
\- \[ \] Afficher liste simple avec statut et lien vers le détail.","frontend,account,priority:medium,phase:demo","MVP Demo"  
"DevOps: README \+ pipeline CI minimal (lint \+ test)","Objectif: Mettre en place une base de qualité de code avec lint et tests automatiques sur chaque push.

Critères d'acceptation:  
\- README décrit rapidement l'architecture et comment lancer front/back.  
\- Une action GitHub CI exécute lint et tests backend (et éventuellement frontend) sur chaque push.

Checklist:  
\- \[ \] Rédiger README (structure dossiers, commandes de base).  
\- \[ \] Configurer ESLint/Prettier côté front et back.  
\- \[ \] Ajouter un workflow GitHub Actions pour lancer lint \+ tests.","devops,ci,docs,priority:medium,phase:v1","Full Platform v1"  
"BE: Swagger et documentation API","Objectif: Générer une documentation API Swagger pour faciliter le travail front et futur mobile.

Critères d'acceptation:  
\- Swagger UI accessible en dev (ex: /api-docs).  
\- Les principaux endpoints (auth, agencies, vehicles, bookings, payments) sont documentés.

Checklist:  
\- \[ \] Installer @nestjs/swagger.  
\- \[ \] Annoter les controllers principaux.  
\- \[ \] Configurer et exposer la route de documentation.","backend,docs,priority:medium,phase:v1","Full Platform v1"

👉 Ça te donne une base directement importable pour :

la démo (MVP Demo)

et déjà 2 issues de continuité (Full Platform v1).

Tu pourras dupliquer ces lignes pour rajouter d’autres issues backend/frontend (KYC, notifications, reviews, i18n, etc.) en gardant le même format.

\---

3️⃣ Fichier JSONL pour gh issue import (option CLI GitHub)

Si tu préfères utiliser le CLI GitHub dans VS Code (terminal intégré), tu peux créer un fichier issues-ekrimendarek.jsonl avec ce format JSONL (un objet JSON par ligne) :

{"title":"BE: Setup NestJS \+ Prisma","body":"Objectif: Initialiser le backend NestJS avec Prisma et PostgreSQL.\\n\\nCritères d'acceptation:\\n- La commande de démarrage NestJS fonctionne.\\n- Prisma est configuré.\\n- Une migration initiale est appliquée.\\n\\nChecklist:\\n- \[ \] Créer le projet NestJS.\\n- \[ \] Installer Prisma.\\n- \[ \] Définir les modèles de base.\\n- \[ \] Exécuter \`npx prisma migrate dev\`.","labels":\["backend","setup","db","priority:high","phase:demo"\],"milestone":"MVP Demo"}  
{"title":"FE: Setup Next.js \+ Tailwind \+ structure","body":"Objectif: Initialiser le frontend Next.js avec Tailwind et la structure de dossiers.\\n\\nCritères d'acceptation:\\n- L'app démarre.\\n- Tailwind fonctionne.\\n- La structure app/components/features/lib/types existe.\\n\\nChecklist:\\n- \[ \] Créer le projet Next.js.\\n- \[ \] Installer Tailwind.\\n- \[ \] Créer la structure de dossiers.\\n- \[ \] Ajouter une page d'accueil minimale.","labels":\["frontend","setup","ui","priority:high","phase:demo"\],"milestone":"MVP Demo"}  
{"title":"BE: Authentification JWT (register \+ login)","body":"Objectif: Mettre en place l'inscription et la connexion avec JWT.\\n\\nCritères d'acceptation:\\n- /auth/register fonctionne.\\n- /auth/login renvoie un token valide.\\n- Les mots de passe sont hashés.\\n\\nChecklist:\\n- \[ \] Créer UserModule.\\n- \[ \] Créer AuthModule.\\n- \[ \] Implémenter register \+ login.\\n- \[ \] Protéger GET /users/me avec JwtGuard.","labels":\["backend","auth","security","priority:high","phase:demo"\],"milestone":"MVP Demo"}

(Tu peux continuer sur ce modèle pour les autres issues si tu veux tout gérer en JSONL.)

\---

4️⃣ Comment créer automatiquement les issues (pas à pas)

Option A — Import CSV via GitHub web

1\. Pousse ton repo sur GitHub (si ce n’est pas déjà fait).

2\. Sur GitHub, va dans : Issues → New issue → ⋯ → Import issues (ou via GitHub Projects → Import CSV).

3\. Sélectionne ton fichier issues-ekrimendarek.csv.

4\. Mappe les colonnes :

title → Title

body → Body

labels → Labels (GitHub les créera si besoin)

milestone → Milestone

5\. Valide l’import → GitHub crée toutes les issues d’un coup.

Option B — Import JSONL via GitHub CLI (gh issue import)

1\. Installer le CLI GitHub si pas déjà fait (une fois sur ta machine).

2\. Dans VS Code, ouvre le terminal et exécute :

gh auth login

(choisir GitHub.com, HTTPS, et suivre les instructions).

3\. Place-toi dans le dossier du repo :

cd EkriMenDarek-Web

4\. Lance l’import :

gh issue import \-f issues-ekrimendarek.jsonl

5\. Vérifie ensuite dans l’onglet Issues de GitHub : toutes les issues seront créées avec labels \+ milestone.

\---

5️⃣ Comment “commencer petit” sans casser la suite

Avec cette structure :

Tu travailles d’abord uniquement sur les issues phase:demo / Milestone MVP Demo :

Setup front/back

Auth basique

Agencies \+ Vehicles minimal

Search \+ fiche véhicule

Booking \+ paiement mock

UI de base (hero, recherche, cartes, confirmation)

Une fois la démo clean :

Tu continues simplement avec les issues phase:v1 (Full Platform v1) : paiement réel, KYC complet, notifications, reviews, i18n, etc., sans recréer le projet.