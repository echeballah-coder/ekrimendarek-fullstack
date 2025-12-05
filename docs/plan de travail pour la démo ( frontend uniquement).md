 PLAN DE TRAVAIL SUR 2 JOURS

Objectif : Un prototype Next.js \+ Tailwind fluide, propre, navigable, sans backend.

Durée : 48 heures (J-2 → Démo)

Livrable : Un “faux vrai site”, complet visuellement.

\---

🟩 📅 JOUR 1 — BUILD DU SOCLE \+ DESIGN \+ LAYOUT \+ HOME

🕘 1\. Setup du projet (1h)

✓ Étape 1 — Créer l’arborescence

Créer dossier mère : ekrimendarek/

Créer sous-dossiers : frontend/ \+ backend/

Ouvrir VS Code dans ekrimendarek/

✓ Étape 2 — Initialisation Git

git init

Créer repo GitHub → connecter → push initial.

Ajouter .gitignore

✓ Étape 3 — Créer le board Kanban

3 colonnes : To Do → In Progress → Done

Ajouter 3 epics :

Prototype 48h

Web V1

Mobile (plus tard)

\---

🕛 2\. Installation Frontend (1h)

Dans /frontend :

npx create-next-app@latest . \--typescript

Installer Tailwind :  
npm install \-D tailwindcss postcss autoprefixer  
npx tailwindcss init \-p

Configurer Tailwind dans globals.css

Objectif atteint : projet Next.js opérationnel.

\---

🕒 3\. Design System rapide (2h)

✓ Couleurs (palette Wraith)

Dans tailwind.config.js → ajouter variables :

emd-text-primary: \#1E1702

emd-accent: \#047C58

emd-bg-base: \#F7F7F5  
… (issus de ta todo frontend)

✓ Typographie

Import Google Font Inter dans layout.tsx

✓ Composants UI à créer :

Button.tsx

Input.tsx

Card.tsx

Objectif atteint : base visuelle stable & pro.

\---

🕓 4\. Structure globale du site (2h)

Créer :

Header.tsx

Footer.tsx

Container.tsx

Header

Logo (texte)

Liens : Accueil – Rechercher – Compte

CTA : Voir les offres

Footer

Mentions légales

Contact

Logos CIB/Edahabia (placeholder)

\---

🕕 5\. Page Home complète (3h)

Hero section

Titre principal : “Louez une voiture facilement partout en Algérie”

Sous-titre issu du PDF Introduire EkriMenDarek 

Boutons : Découvrir / Voir les offres

Barre de recherche

Lieu

Date début / Date fin

Bouton Rechercher

UI seulement — aucun appel backend.

\---

🕗 6\. Stabilisation & test rapide (30 min)

tester responsive

tester navigation home → search (vide)

🎉 Fin du Jour 1 \= structure solide \+ Home prête

\---

🟥 📅 JOUR 2 — PAGES \+ COMPOSANTS PRODUIT \+ SCÉNARIO DE DÉMO

🕘 1\. Page Résultats /search (2h)

Créer /app/search/page.tsx

Ajouter :

Rappel de la barre de recherche

Filtres (mock UI)

Composant CardVehicle  
Contenu statique :

image

modèle

prix/jour

boîte (auto/manuelle)

carburant

bouton Voir détails

Ajouter 6–8 véhicules mock (tableau JS)

\---

🕛 2\. Page Détail véhicule (2h)

/app/vehicule/\[id\]/page.tsx

Sections :

Galerie images (même image répétée)

Infos véhicule

Caractéristiques

Conditions (tirées du cahier de charges, cohérence ⚡)

Badge “Hôte vérifié”

CTA Réserver (UI only)

\---

🕒 3\. Page Réservation (mock) (1h)

/app/reservation/page.tsx

Afficher :

Récap véhicule

Récap dates

Prix : calcul mock → jours × prix

Acompte (ex : 15% mock)

Bouton “Payer l’acompte”

Message succès → “Réservation confirmée (prototype)”

\---

🕓 4\. Page KYC (1h)

/app/kyc/page.tsx

UI simple :

Upload permis

Upload selfie

Feedback "fichier sélectionné"  
(Ceci montre que tu as compris la réglementation locale)

\---

🕔 5\. Pages Compte (1–2h)

Client :

Mes infos

Mes réservations (mock)

Agence :

Mes véhicules (liste faux)

Ajouter un véhicule (form UI)

Réservations reçues (mock)

\---

🕕 6\. Connecter navigation (30 min)

Ajouter tous les liens

Tester parcours :  
Home → Search → Détail → Réserver → Succès

\---

🕖 7\. Finalisation design (30 min)

Petites animations Tailwind

Amélioration des espacements

Contrastes

\---

🕗 8\. Préparation de la démo (30 min)

Scénario recommandé :

1\. Page Home (pitch EkriMenDarek)

2\. Barre de recherche → démonstration UX

3\. Affichage Résultats (cartes premium)

4\. Fiche véhicule (galerie \+ conditions \+ CTA)

5\. Page Réservation (paiement simulé)

6\. Page Compte (vision SaaS)

7\. Page Agence (monétisation)

8\. Conclusion → vision du produit dans 2 mois (backend \+ API \+ paiements)

\---

🎉 Résultat final du plan 48h

Tu auras un prototype :

✔ Professionnel  
✔ Cohérent  
✔ Navigable  
✔ Moderne  
✔ Parfait pour convaincre des investisseurs  
✔ 100% aligné avec le futur backend réel  
