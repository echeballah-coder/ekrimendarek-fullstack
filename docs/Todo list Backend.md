📁 Phase B0 – Préparation du projet backend

B0.1 – Initialisation & organisation

\[ \] Créer le dossier ekrimendarek-backend  
Structurer un espace dédié au backend de la plateforme.

\[ \] Initialiser Git (git init)  
Activer le versionnement pour tracer les évolutions du code.

\[ \] Créer et connecter le dépôt GitHub (origin)  
Assurer sauvegarde distante et collaboration possible.

\[ \] Ajouter un .gitignore adapté (Node, dist, .env, etc.)  
Empêcher l’inclusion de fichiers temporaires ou sensibles.

\[ \] Premier commit : chore: init backend project  
Fixer une première base propre dans l’historique.

B0.2 – Création du projet NestJS

\[ \] Générer un projet NestJS (nest new backend)  
Mettre en place un framework structuré et maintenable.

\[ \] Vérifier le démarrage (npm run start:dev)  
Confirmer que l’environnement fonctionne correctement.

\[ \] Nettoyer les modules d’exemple (ex : cats)  
Éliminer le code de démonstration pour partir d’un socle clair.

\[ \] Commit : chore: setup base nestjs structure  
Valider la structure de départ.

\---

⚙️ Phase B1 – Configuration, environnement & API de base

B1.1 – Gestion des variables d’environnement

\[ \] Installer et activer @nestjs/config  
Centraliser la gestion des variables sensibles (DB, JWT…).

\[ \] Créer .env.example (DATABASE\_URL, JWT\_SECRET, FRONTEND\_URL, etc.)  
Documenter les variables nécessaires sans exposer de secrets.

\[ \] Configurer ConfigModule.forRoot({ isGlobal: true })  
Rendre la configuration disponible dans tout le projet.

\[ \] Commit : chore: add env config and example env file  
Finaliser la base de configuration.

B1.2 – Préfixe API & CORS

\[ \] Définir un préfixe global /api/v1 dans main.ts  
Préparer la versioning de l’API dès le départ.

\[ \] Activer CORS pour le domaine du frontend (localhost \+ futur domaine prod)  
Permettre les appels sécurisés depuis l’interface EkriMenDarek.

\[ \] Commit : chore: configure api prefix and cors  
API prête à être consommée côté front.

\---

🗃️ Phase B2 – Base de données & Prisma

B2.1 – Initialisation Prisma

\[ \] Installer Prisma et le client (npm i prisma @prisma/client)  
Choisir un ORM moderne et typé.

\[ \] Exécuter npx prisma init  
Créer la configuration de base Prisma.

\[ \] Configurer datasource db avec DATABASE\_URL (PostgreSQL recommandé)  
Relier le backend à la base de données cible.

\[ \] Commit : chore: init prisma configuration  
Base technique prête pour la modélisation.

B2.2 – Modélisation des entités principales (v1)

\[ \] Définir le modèle User  
Gérer utilisateurs avec : id, email, passwordHash, role (CLIENT/AGENCY/ADMIN), KYC.

\[ \] Définir le modèle Agency  
Représenter les agences : id, name, ownerId, location, isVerified.

\[ \] Définir le modèle Vehicle  
Représenter les véhicules : id, agencyId, title, pricePerDay, location, gearbox, fuel, deposit, isActive, images.

\[ \] Exécuter npx prisma migrate dev \--name init\_core\_models  
Appliquer la structure initiale à la base.

\[ \] Commit : feat: add user, agency and vehicle models  
Pilier du domaine métier en place.

B2.3 – Intégration Prisma ↔ Nest

\[ \] Créer PrismaModule et PrismaService  
Centraliser les accès à la base via Prisma.

\[ \] Injecter PrismaService dans un service de test et exécuter un findMany  
Vérifier la bonne communication avec la base.

\[ \] Commit : feat: integrate prisma with nest application  
Backend prêt à manipuler les données.

\---

🔐 Phase B3 – Authentification & gestion des rôles

B3.1 – Module Utilisateur

\[ \] Créer UserModule, UserService, UserController  
Isoler la logique liée aux utilisateurs.

\[ \] Ajouter route GET /api/v1/users/me (dummy pour l’instant)  
Préparer le point d’entrée pour le profil utilisateur.

\[ \] Commit : feat: add basic user module skeleton

B3.2 – Authentification (JWT)

\[ \] Installer auth : @nestjs/passport, passport-jwt, bcrypt  
Support complet pour login sécurisé.

\[ \] Créer AuthModule, AuthService, AuthController  
Encapsuler la logique d’authentification.

\[ \] Implémenter POST /api/v1/auth/register  
Créer un utilisateur avec hash du mot de passe et rôle par défaut CLIENT.

\[ \] Implémenter POST /api/v1/auth/login  
Vérifier les identifiants et émettre un JWT (payload : id, role).

\[ \] Commit : feat: implement user registration and login with JWT

B3.3 – Sécurisation des routes

\[ \] Créer JwtStrategy et JwtAuthGuard  
Protéger les endpoints nécessitant une session utilisateur.

\[ \] Créer décorateur @CurrentUser() pour extraire l’utilisateur depuis le token  
Simplifier le code des contrôleurs.

\[ \] Protéger GET /api/v1/users/me avec le guard JWT  
Première route sécurisée.

\[ \] Commit : feat: add jwt guard and current user endpoint

\---

🚘 Phase B4 – Gestion des agences & véhicules (alignée avec la recherche front)

B4.1 – Module Agency

\[ \] Créer AgencyModule, AgencyService, AgencyController  
Isoler la logique spécifique aux agences.

\[ \] Implémenter POST /api/v1/agencies (rôle AGENCY)  
Permettre à un utilisateur de créer/configurer son agence.

\[ \] Implémenter GET /api/v1/agencies/me  
Renvoyer les informations de l’agence liée au user connecté.

\[ \] Commit : feat: add agency creation and self endpoints

B4.2 – Module Vehicle : création & gestion

\[ \] Créer VehicleModule, VehicleService, VehicleController  
Définir le module de gestion des véhicules.

\[ \] Implémenter POST /api/v1/vehicles (AGENCY)  
Création d’un véhicule pour l’agence propriétaire.

\[ \] Implémenter PUT /api/v1/vehicles/:id (AGENCY propriétaire)  
Mise à jour des caractéristiques du véhicule.

\[ \] Gérer isActive pour activer/désactiver un véhicule  
Contrôle de visibilité dans les résultats.

\[ \] Commit : feat: add vehicle creation and update logic

B4.3 – Liste des véhicules (pour la page search.html)

\[ \] Implémenter GET /api/v1/vehicles avec filtres :  
location, startDate, endDate, priceMin, priceMax, gearbox, fuel  
Répond directement aux filtres du frontend.

\[ \] Retourner une liste optimisée pour l’affichage :  
id, titre, prix, localisation, boîte, carburant, caution, image principale, hostVerified  
Données adaptées aux cartes de résultats.

\[ \] Commit : feat: add vehicle listing endpoint with filters

B4.4 – Détail d’un véhicule (pour vehicle.html)

\[ \] Implémenter GET /api/v1/vehicles/:id  
Point d’accès au détail complet du véhicule.

\[ \] Inclure :

données véhicule

agence (nom, statut vérifié)

images (tableau d’URLs)

conditions (caution, contraintes d’âge/permis…)  
Répond à tous les besoins de la fiche véhicule.

\[ \] Commit : feat: add vehicle detail endpoint with agency and conditions

\---

📅 Phase B5 – Réservations (Bookings) – Base métier

B5.1 – Modèle Booking & statuts

\[ \] Ajouter le modèle Booking dans Prisma  
Lier user, vehicle, agency, dates, prix, acompte, statut.

\[ \] Définir enum BookingStatus :  
PENDING\_PAYMENT, PENDING\_CONFIRMATION, CONFIRMED, CANCELLED, COMPLETED  
Cycle de vie standardisé.

\[ \] npx prisma migrate dev \--name add\_booking\_model  
Appliquer le schéma.

\[ \] Commit : feat: add booking model with status enum

B5.2 – Module Booking : création de réservation

\[ \] Créer BookingModule, BookingService, BookingController  
Module dédié au cycle de réservation.

\[ \] Implémenter POST /api/v1/bookings (CLIENT)

reçoit vehicleId, startDate, endDate

calcule nombre de jours

calcule totalPrice et depositAmount (ex: 15%)

crée la réservation en PENDING\_PAYMENT  
Correspond à la première étape du flow de paiement front.

\[ \] Retourner { bookingId, totalPrice, depositAmount, status }  
Utilisable directement par la page booking.html.

\[ \] Commit : feat: add booking creation with price and deposit calculation

B5.3 – Consultation des réservations

\[ \] Implémenter GET /api/v1/bookings/me (CLIENT)  
Permettra d’afficher “Mes réservations”.

\[ \] Implémenter GET /api/v1/bookings/:id (CLIENT ou AGENCY concernée)  
Permet au front de récupérer les détails pour l’écran de succès.

\[ \] Commit : feat: add booking listing and detail endpoints

\---

💳 Phase B6 – Paiement d’acompte (intégration progressive)

B6.1 – Modèle Payment & architecture

\[ \] Ajouter le modèle Payment (bookingId, amount, status, method, transactionRef)  
Tracer tous les paiements d’acompte.

\[ \] Définir enum PaymentStatus :  
INITIATED, SUCCESS, FAILED  
Suivi du cycle de paiement.

\[ \] npx prisma migrate dev \--name add\_payment\_model  
Mise à jour de la base.

\[ \] Commit : feat: add payment model and status enum

B6.2 – Endpoint de paiement mock (première version fonctionnelle)

\[ \] Créer PaymentModule, PaymentService, PaymentController  
Isoler la logique paiement.

\[ \] Implémenter POST /api/v1/payments/mock

reçoit bookingId

crée un Payment de type SUCCESS avec amount \= depositAmount

met à jour la réservation en PENDING\_CONFIRMATION  
Permet de remplacer le faux paiement JS par un vrai appel backend.

\[ \] Commit : feat: add mock payment endpoint wiring deposit and booking status

B6.3 – Préparation du webhook prestataire

\[ \] Implémenter POST /api/v1/payments/webhook (stub)  
Endpoint prévu pour recevoir les retours des paiements réels (CIB/Edahabia).

\[ \] Loguer les payloads reçus et définir les cas SUCCESS / FAILED  
Prépare l’intégration future sans impacter le reste du système.

\[ \] Commit : feat: add payment webhook stub for future gateway integration

\---

⭐ Phase B7 – Gestion des avis & confiance

B7.1 – Modèle Review

\[ \] Ajouter Review (bookingId, authorId, agencyId, rating, comment, createdAt)  
Collecter les retours clients.

\[ \] npx prisma migrate dev \--name add\_review\_model  
Appliquer la modification.

\[ \] Commit : feat: add review model

B7.2 – Endpoints Review

\[ \] Créer ReviewModule, ReviewService, ReviewController  
Module dédié aux avis.

\[ \] Implémenter POST /api/v1/reviews (CLIENT)

n’autoriser l’avis que si la réservation est COMPLETED  
Assurer la légitimité des avis.

\[ \] Implémenter GET /api/v1/agencies/:id/reviews  
Permet d’afficher les avis sur la page agence / véhicule.

\[ \] Commit : feat: add review creation and listing endpoints

\---

🪪 Phase B8 – KYC (Permis & identité)

B8.1 – Extension du modèle User

\[ \] Ajouter dans User :  
licenseNumber?, licenseImageUrl?, selfieUrl?, kycStatus (PENDING/VERIFIED/REJECTED)  
Stocker l’état de vérification.

\[ \] npx prisma migrate dev \--name add\_kyc\_fields\_to\_user  
Mise à jour du schéma.

\[ \] Commit : feat: extend user model with kyc fields

B8.2 – Endpoint KYC

\[ \] Implémenter POST /api/v1/users/me/kyc

recevoir les URL fichiers (dans un premier temps)

mettre kycStatus \= PENDING  
Relier l’onboarding frontend au backend.

\[ \] Prévoir (en TODO) l’intégration d’un vrai stockage fichiers (S3, service interne…)  
Étape future sans bloquer la v1.

\[ \] Commit : feat: add basic kyc submission endpoint

\---

📬 Phase B9 – Notifications (email / WhatsApp – mocks)

B9.1 – Service de notification

\[ \] Créer NotificationService  
Centraliser l’envoi d’emails / messages.

\[ \] Ajouter méthodes :  
sendBookingConfirmedEmail(user, booking)  
sendBookingConfirmedWhatsApp(user, booking)  
Pour l’instant, simplement logger les appels.

\[ \] Commit : feat: add notification service with mock providers

B9.2 – Raccordement au flux de réservation

\[ \] Dans BookingService, après statut CONFIRMED, appeler NotificationService  
Envoyer les confirmations au client.

\[ \] Commit : feat: trigger notifications on booking confirmation

\---

🧱 Phase B10 – DTO, validation et format d’API

B10.1 – Validation des entrées

\[ \] Installer class-validator et class-transformer  
Valider toutes les données entrantes.

\[ \] Activer un ValidationPipe global dans main.ts  
Appliquer la validation sur tous les DTO.

\[ \] Créer des DTO pour Auth, Vehicle, Booking, Review, KYC  
Définir clairement les contrats d’entrée.

\[ \] Commit : chore: enable validation and add core DTOs

B10.2 – Gestion des erreurs & format de réponse

\[ \] Mettre en place un filtre global d’exception (HttpExceptionFilter)  
Uniformiser les réponses d’erreur.

\[ \] Définir un format de réponse standard : { success, data, error? }  
Faciliter le travail du frontend et le débogage.

\[ \] Adapter les principaux contrôleurs au format standard  
Aligner toutes les réponses du backend.

\[ \] Commit : chore: add global exception filter and response format

\---

🛡️ Phase B11 – Sécurité & durcissement

\[ \] Vérifier que toutes les routes sensibles sont protégées par JwtAuthGuard et les rôles appropriés  
Empêcher l’accès non autorisé.

\[ \] Ajouter un système de rate limiting (ex: @nestjs/throttler) sur login et paiement  
Limiter les abus et les attaques par force brute.

\[ \] Mettre en place un logging basique des requêtes (interceptor ou middleware)  
Suivi minimal pour le diagnostic.

\[ \] Commit : chore: harden security with guards, throttling and logging

\---

📚 Phase B12 – Documentation, tests & préparation déploiement

B12.1 – Documentation Swagger

\[ \] Installer @nestjs/swagger  
Générer une documentation interactive de l’API.

\[ \] Documenter les principaux modules : Auth, Users, Agencies, Vehicles, Bookings, Payments, Reviews, KYC  
Permettre à toute personne (ou un autre dev) de comprendre et tester l’API.

\[ \] Exposer Swagger sur /api-docs (protégé en prod par auth ou IP)  
Accès pratique en dev/staging, sécurisé en prod.

\[ \] Commit : chore: add swagger documentation for core endpoints

B12.2 – Tests & qualité

\[ \] Écrire des tests unitaires sur Booking (calcul prix, statuts)  
Sécuriser la logique métier critique.

\[ \] Écrire quelques tests sur Vehicle filters (cohérence des résultats)  
Valider les critères de recherche.

\[ \] Commit : test: add unit tests for booking and vehicle services

B12.3 – Préparation CI/CD & déploiement

\[ \] Créer un workflow GitHub Actions de base : install, test, build backend  
Automatiser les vérifications à chaque push.

\[ \] Préparer un fichier Dockerfile pour le backend  
Faciliter le déploiement sur un serveur ou un orchestrateur.

\[ \] Définir les variables d’environnement pour l’environnement de production (DB, JWT, URL frontend, gateway paiement)  
Sécuriser la configuration prod.

\[ \] Commit : chore: add ci pipeline, dockerfile and prod env placeholders  
Backend prêt à être déployé.

\---

Cette todo backend est pensée comme un plan de réalisation officiel pour la v1 déployable d'EkriMenDarek :

structurée,

progressive,

alignée avec ton frontend,

et orientée vers une vraie mise en production (CI/CD, sécurité, docs).  
