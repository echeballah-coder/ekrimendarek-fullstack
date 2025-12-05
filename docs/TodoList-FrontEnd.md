🧩 Phase F0 – Mise en place du projet front

F0.1 – Initialisation & Git

\[ \] Créer le dossier ekrimendarek-frontend  
Point de départ du projet frontend.

\[ \] Initialiser Git dans le dossier (git init)  
Permet de versionner chaque petite étape.

\[ \] Créer le repo GitHub et le lier (origin)  
Sauvegarde distante et collaboration possible.

\[ \] Ajouter un .gitignore (node\_modules, dist, .env, etc.)  
Évite de pousser les fichiers inutiles ou sensibles.

\[ \] Premier commit : chore: init frontend project  
Baseline propre pour l’historique.

F0.2 – Choix de stack & structure de base

\[ \] Créer une structure simple : index.html, styles.css, app.js  
Point de départ universel, même si tu passes ensuite à un framework.

\[ \] Lier styles.css et app.js dans index.html  
Connexion entre HTML, CSS et JS.

\[ \] Ajouter les balises de base (\<html lang="fr"\>, \<head\>, \<meta viewport\>)  
Base SEO \+ responsive correcte.

\[ \] Commit : chore: add base html/css/js structure  
Verrouille la fondation.

\---

🎨 Phase F1 – Design System (palette Wraith, typo, base)

F1.1 – Variables CSS pour la palette Wraith

\[ \] Dans styles.css, définir :root avec toutes les variables :  
\--emd-text-primary: \#1E1702, \--emd-accent: \#047C58, \--emd-bg-base: \#F7F7F5, etc.  
Centralise les couleurs officielles.

\[ \] Ajouter les couleurs d’état : hover, disabled, success, error, focus  
Prépare les états interactifs (palette complète).

\[ \] Commit : feat: add Wraith color palette as CSS variables  
Design System couleur en place.

F1.2 – Styles globaux & typographie

\[ \] Importer une police (ex : Inter / Poppins) dans index.html  
Base typographique cohérente.

\[ \] Dans body, appliquer : font-family, background: var(--emd-bg-base), color: var(--emd-text-primary)  
Alignement avec la palette globale.

\[ \] Définir les tailles pour h1, h2, h3, p, small  
Hiérarchie visuelle claire.

\[ \] Utiliser \--emd-text-secondary pour small, légendes, textes secondaires  
Respect de la hiérarchie primaire/secondaire.

\[ \] Commit : feat: set global typography and base body styles  
Texte et fond conformes au cahier des charges.

F1.3 – Container & grille simple

\[ \] Créer une classe .container (max-width \~1200px, margin auto, padding horizontal)  
Centre le contenu et structure les pages.

\[ \] Tester le container autour d’un titre de test  
Validation visuelle rapide.

\[ \] Commit : feat: add layout container class  
Fondation pour toutes les pages.

\---

🧱 Phase F2 – Composants UI de base (boutons, inputs, cartes, badges)

F2.1 – Boutons (CTA & secondaires)

\[ \] Créer .btn (display inline-flex, padding, border-radius, font-weight medium)  
Style de base commun à tous les boutons.

\[ \] Créer .btn-primary :  
background var(--emd-accent), texte blanc, hover var(--emd-accent-hover)  
CTA principal conforme au vert \#047C58.

\[ \] Créer .btn-secondary : fond clair, bordure fine, texte sombre  
Bouton alternatif, sans utiliser le vert accent.

\[ \] Gérer :disabled (fond var(--emd-disabled-bg), curseur not-allowed)  
Communique l’état inactif.

\[ \] S’assurer qu’en hauteur, les boutons font \~44px min sur mobile  
Respect de la zone tactile minimale.

\[ \] Commit : feat: add primary and secondary button components  
CTA et secondaires prêts.

F2.2 – Inputs & champs formulaire

\[ \] Créer .input (fond blanc, border-radius, border 1px light, padding)  
Champ lisible et confortable.

\[ \] Ajouter un état :focus avec bordure ou halo vert var(--emd-focus-ring)  
Focus clavier visible (accessibilité).

\[ \] Gérer .input--error (bordure rouge \+ petit texte en var(--emd-error))  
Retour visuel sur les erreurs.

\[ \] Gérer .input--success si besoin (bordure var(--emd-success))  
Feedback positif.

\[ \] Commit : feat: style inputs with focus, error and success states  
Formulaires prêts à être branchés.

F2.3 – Cartes (cards) & skeletons

\[ \] Créer .card avec fond var(--emd-bg-surface), border-radius, shadow légère  
Bloc premium pour véhicules, info, etc.

\[ \] Ajouter .card--hover (shadow un peu plus forte \+ petite translation sur hover)  
Micro-interaction pour attirer l’attention.

\[ \] Créer les classes .skeleton, .skeleton-text, .skeleton-image (fond gris clair, animation shimmer)  
Écrans squelettes pour chargement perçu rapide.

\[ \] Commit : feat: add card and skeleton components  
Visuels de base \+ états de loading.

F2.4 – Badges (confiance & statut)

\[ \] Créer .badge (petit fond clair, border-radius pill, texte petit)  
Pour statuts et infos complémentaires.

\[ \] Créer .badge--verified (ex : fond très clair, texte vert foncé ou gris, sans utiliser le vert CTA pur)  
“Hôte vérifié” sans voler la couleur du CTA.

\[ \] Créer une zone dans le footer ou header pour logos CIB/Edahabia (même si images placeholder pour l’instant)  
Support visuel pour la confiance paiement.

\[ \] Commit : feat: add badge styles and trust logo placeholder  
Prépare la couche “confiance”.

\---

🧭 Phase F3 – Layout global : header, navigation, footer

F3.1 – Header & navigation

\[ \] Ajouter un \<header\> avec logo texte “EkriMenDarek” (placeholder)  
Identité visuelle de base.

\[ \] Ajouter un menu simple : Accueil, Rechercher, Mon compte  
Navigation principale.

\[ \] Ajouter un bouton “Voir les offres” en .btn-primary dans le header  
CTA global visible en permanence.

\[ \] Rendre le header sticky (position: sticky; top:0; shadow légère)  
Toujours accessible, surtout sur desktop.

\[ \] Commit : feat: add main header with navigation and CTA  
Structure haute en place.

F3.2 – Footer

\[ \] Ajouter un \<footer\> avec : mini texte légal, liens CGU/CGV, Contact  
Zone d’info permanente.

\[ \] Intégrer un emplacement pour logos CIB/Edahabia (ou placeholder)  
Rappel de la sécurité paiement.

\[ \] Commit : feat: add footer with legal links and payment trust zone  
Bas de page prêt.

\---

🏠 Phase F4 – Page d’accueil & barre de recherche flottante

F4.1 – Hero section

\[ \] Ajouter une section hero avec :  
h1 (“Louez une voiture facilement partout en Algérie”),  
paragraphe rassurant, 2 boutons (CTA \+ découverte).  
Cadrage immédiat de l’offre.

\[ \] Centrer/aligner le hero selon le style choisi (plutôt aligné à gauche, premium).  
Lisibilité & sérieux.

\[ \] Commit : feat: add hero section on homepage  
Premier écran prêt.

F4.2 – Barre de recherche flottante (UI)

\[ \] Créer un bloc .search-bar contenant : Lieu, Date début, Date fin, bouton Rechercher  
Entrée principale du funnel.

\[ \] Styliser .search-bar en glassmorphism léger : fond blanc/translucide, shadow douce, arrondi large  
Aspect premium / moderne.

\[ \] Positionner .search-bar de manière légèrement “flottante” par rapport au hero  
Effet de relief visuel.

\[ \] Commit : feat: style floating search bar on hero  
Le cœur UX est visible.

F4.3 – Comportement sticky & focus overlay

\[ \] Sur desktop, rendre la search bar sticky/fixed en haut après scroll (ou en version plus compacte)  
Toujours accessible pour relancer une recherche.

\[ \] À focus dans un champ (Lieu/Dates), ajouter une petite animation (agrandissement léger, shadow accentuée)  
Effet “Open Overlay” léger.

\[ \] Commit : feat: add sticky behavior and focus animation to search bar  
Barre agréable et fonctionnelle.

F4.4 – JS basique pour la recherche (mock)

\[ \] Dans app.js, écouter la soumission du formulaire de recherche  
Point d’entrée logique.

\[ \] Empêcher le reload (event.preventDefault)  
Prépare transition vers page de résultats.

\[ \] Pour l’instant, stocker les valeurs en sessionStorage ou query string  
Passer les critères à la page search plus tard.

\[ \] Commit : feat: wire basic search form submission (frontend only)  
Logique de base prête à être connectée.

\---

🔍 Phase F5 – Page de résultats (listing \+ filtres \+ skeletons \+ carrousel)

F5.1 – Page search.html & layout

\[ \] Créer search.html avec le même header/footer  
Cohérence globale.

\[ \] Ajouter un titre “Résultats de votre recherche” \+ sous-texte  
Contexte pour l’utilisateur.

\[ \] Réintégrer une search bar en haut de page  
Possibilité d’ajuster les filtres rapidement.

\[ \] Commit : feat: add search results page structure  
Ossature de la page prête.

F5.2 – Composant carte véhicule (structure)

\[ \] Créer un marqueur HTML pour une carte véhicule : image principale, titre, infos (boîte, carburant, années), prix/jour, badge caution, bouton “Voir détails”  
Vue synthétique de l’offre.

\[ \] Appliquer .card, .card--hover, .btn-primary au bouton  
Design System respecté.

\[ \] Commit : feat: add vehicle card markup and styles  
Base UI de la liste.

F5.3 – Carrousel d’images dans la carte

\[ \] À l’intérieur de chaque carte, prévoir un conteneur carousel avec plusieurs images (ou placeholders)  
Prépare l’expérience multi-photos.

\[ \] Ajouter les boutons/flèches navigation ou pagination (points) pour le carrousel  
Permet de naviguer entre les images.

\[ \] En JS, gérer un mini carrousel maison OU plug rapide d’une lib légère (Swiper/Splide)  
Affichage de plusieurs photos sans quitter la liste.

\[ \] S’assurer que le swipe horizontal fonctionne sur mobile  
UX moderne sur smartphone.

\[ \] Commit : feat: add image carousel inside vehicle cards  
Comparaison rapide des véhicules.

F5.4 – Skeletons sur la liste

\[ \] Avant que les données “mock” ne soient injectées, afficher quelques cartes skeleton (.skeleton)  
Cache les latences et rassure l’utilisateur.

\[ \] Après un petit timeout ou après “chargement” simuler l’arrivée des vraies cartes  
Imite un vrai appel réseau.

\[ \] Commit : feat: show skeleton cards before loading vehicle list  
Performance perçue améliorée.

F5.5 – Filtres & range slider prix (mock JS)

\[ \] Ajouter un panneau de filtres : boîte, carburant, ville, range prix  
Réduction de la friction de recherche.

\[ \] Implémenter un slider double curseur pour le prix (min / max visuels)  
Contrôle intuitif du budget.

\[ \] En JS, filtrer un tableau mockVehicles selon les critères sélectionnés  
Prépare la connexion à l’API.

\[ \] Mettre à jour la liste de cartes sans rechargement de page  
UX fluide.

\[ \] Commit : feat: add interactive filters and price range slider (mock)  
Filtrage visuel opérationnel.

\---

🚗 Phase F6 – Page détail véhicule (infos premium \+ sticky CTA \+ vue “wow”)

F6.1 – Structure de la page détail

\[ \] Créer vehicle.html avec header/footer  
Page dédiée par véhicule.

\[ \] Layout :

Bloc images/gallerie à gauche ou en haut

Bloc infos texte : titre, agence, rating, caractéristiques

Bloc “Conditions & Caution”  
Donne une vue complète de l’offre.

\[ \] Commit : feat: add vehicle detail page layout  
Page en place.

F6.2 – Vue premium (360° ou galerie enrichie)

\[ \] Prévoir un conteneur pour future vue 360° ou galerie avancée  
Hook pour le futur effet “wow”.

\[ \] Pour l’instant, mettre une galerie d’images avec possibilité de changer l’image principale (miniatures cliquables)  
Expérience visuelle déjà premium.

\[ \] Commit : feat: add advanced image gallery placeholder (future 360 view)  
Page prête pour upgrade 360°.

F6.3 – Conditions, caution & badges

\[ \] Créer un bloc “Conditions de location” clair : caution, minimum âge, ancienneté permis, etc.  
Transparence et confiance.

\[ \] Afficher un badge “Hôte vérifié” s’il y a lieu  
Rassurer sur l’agence.

\[ \] Afficher logos CIB/Edahabia en bas de la page ou près du bloc paiement/conditions  
Rappel fort sur la sécurité paiement.

\[ \] Commit : feat: add conditions, deposit info and trust badges to vehicle detail  
Zone de réassurance prête.

F6.4 – CTA “Réserver” sticky sur mobile

\[ \] Ajouter un bouton “Réserver” dans la page, visible sur desktop dans la zone info  
Action principale claire.

\[ \] Sur mobile, ajouter un CTA sticky en bas de l’écran (position: fixed; width:100%)  
Toujours accessible au pouce.

\[ \] Vérifier que la hauteur est suffisante (touch target confortable)  
Conforme à la checklist.

\[ \] Commit : feat: add sticky reservation CTA on mobile  
Conversion mobile optimisée.

\---

💳 Phase F7 – Flow de réservation (front-only dans un premier temps)

F7.1 – Page booking

\[ \] Créer booking.html (ou route) avec layout global  
Page dédiée au paiement.

\[ \] Contenu : résumé véhicule, dates, prix/jour, caution, récap tarif  
Le client comprend ce qu’il paie.

\[ \] Commit : feat: add booking page structure with summary block  
Base du tunnel de paiement.

F7.2 – Calcul du prix côté front (mock)

\[ \] En JS, récupérer pricePerDay \+ startDate / endDate (mock ou query params)  
Données nécessaires au calcul.

\[ \] Calculer total, acompte (ex 15%), reste à payer  
Clarifie la ventilation des montants.

\[ \] Afficher ces montants avec styles cohérents (labels \+ valeurs)  
Lecture facile.

\[ \] Commit : feat: compute and render total, deposit and remaining balance  
Récap correct visible.

F7.3 – Faux paiement & états de feedback

\[ \] Ajouter un bouton “Payer l’acompte” (CTA vert)  
Action finale côté client.

\[ \] Au clic, simuler un délai (setTimeout) puis afficher un message de succès (.alert--success en vert)  
Prépare le futur appel backend.

\[ \] Gérer l’affichage d’un message d’erreur mock si besoin (.alert--error)  
Gestion des cas KO.

\[ \] Rediriger vers une page booking-success.html avec un résumé simple  
Clôture du parcours avec tranquillité.

\[ \] Commit : feat: add mock payment success/error flow on frontend  
Tunnel complet côté UI.

\---

🪪 Phase F8 – Onboarding / Scan permis (front avancé)

F8.1 – Page KYC

\[ \] Créer onboarding.html avec une section “Vérifiez votre identité”  
Cadre de KYC clair.

\[ \] Deux blocs : “Photo du permis” & “Selfie de sécurité”  
Séparation des étapes.

\[ \] Commit : feat: add KYC onboarding page with sections for license and selfie  
Page KYC prête.

F8.2 – Inputs de capture (caméra)

\[ \] Utiliser \<input type="file" accept="image/\*" capture="environment"\> pour la capture permis sur mobile  
Ouvre directement la caméra arrière.

\[ \] Idem pour selfie (mais capture="user" si tu veux la caméra frontale plus tard)  
Prépare une meilleure UX.

\[ \] Commit : feat: use HTML5 capture attributes on KYC file inputs  
Compatibilité mobile optimisée.

F8.3 – Cadre de détection animé

\[ \] Ajouter un rectangle visuel “cadre de scan” autour de la zone caméra  
Guide visuel pour l’utilisateur.

\[ \] En JS, au moment où un fichier est sélectionné, changer visuellement le cadre (ex: border passe au vert, petit check)  
Feedback immédiat de réussite.

\[ \] Commit : feat: add animated detection frame for KYC scan feedback  
Expérience scan plus rassurante.

\---

🌍 Phase F9 – Bilinguisme & RTL (FR / AR)

F9.1 – Switch de langue

\[ \] Ajouter un switch FR / AR dans le header (bouton ou select)  
Contrôle simple de la langue.

\[ \] En JS, au clic sur AR, ajouter une classe rtl au \<html\> ou \<body\>  
Active le mode RTL.

\[ \] Commit : feat: add language switch and rtl class toggle  
Bilinguisme technique prêt.

F9.2 – Styles RTL

\[ \] En CSS, pour .rtl, ajouter direction: rtl; text-align: right;  
Texte aligné comme en arabe.

\[ \] Inverser les marges/paddings si besoin (ex: .rtl .card { ... })  
Alignement visuel propre.

\[ \] Commit : feat: define RTL-specific styles for layout and text  
Layout correct en arabe.

F9.3 – Icônes & carrousels en RTL

\[ \] En mode .rtl, inverser les flèches des carrousels (la flèche “suivant” pointe vers la gauche)  
Respect du sens de lecture.

\[ \] Ajuster le sens de scroll de carrousel si nécessaire  
Expérience naturelle pour les arabophones.

\[ \] Commit : feat: flip navigational icons and carousel direction in RTL mode  
RTL complet et cohérent.

\---

✨ Phase F10 – Micro-interactions & motion (polish final)

F10.1 – Transitions sur boutons & cartes

\[ \] Ajouter transition: all 150-200ms sur .btn et .card  
Évite les changements brusques.

\[ \] Ajouter un léger transform: scale(0.98) au clic sur .btn  
Sensation de clic physique.

\[ \] Commit : feat: add transitions and click feedback on buttons and cards  
Interface plus vivante.

F10.2 – Container transform simplifié (listing → détail)

\[ \] À clic sur une carte véhicule, ajouter une classe CSS sur le body ou card pour lancer une petite animation (zoom léger / fade) avant navigation vers vehicle.html  
Impression de continuité entre la liste et le détail.

\[ \] Option : utiliser une animation CSS qui augmente la taille de la carte sur 150–200ms avant redirection  
Ébauche de “container transform”.

\[ \] Commit : feat: add small container transform effect from card to detail view  
Perception premium et fluide.

\---

♿ Phase F11 – Accessibilité & contrôle final

\[ \] Vérifier que tous les CTA sont accessibles au clavier (Tab / Enter / Space)  
Utilisable sans souris.

\[ \] S’assurer que le focus est visible partout (bordure ou halo vert)  
Guidage clavier clair.

\[ \] Vérifier que les contrastes texte/fond sont lisibles (surtout gris sur fond)  
Respect du confort visuel.

\[ \] Tester les tailles des boutons sur mobile (doigt confortable)  
Expérience tactile OK.

\[ \] Commit : chore: accessibility polish (focus, contrasts, touch targets)  
Front prêt pour un vrai usage.

—