1\. Contexte & objectifs UI

Produit : EkriMenDarek – plateforme de location de voitures en Algérie (marketplace entre agences / pros et clients).  
Objectifs UI :

Inspirer confiance (tiers de confiance national).

Donner une impression de simplicité et de fluidité (recherche / réservation).

Rester moderne, soft, lumineux (pas de dark mode pour la v1).

Être facilement lisible et accessible (contraste correct, hiérarchie claire).

Palette choisie : Emerald Road \+ effet gradient léger.

\---

2\. Système de couleurs

2.1. Tokens principaux (à définir en variables CSS / theme)

:root {  
  /\* Brand core \*/  
  \--emd-primary: \#046C4E;      /\* Vert émeraude – couleur principale \*/  
  \--emd-primary-light: \#0A8A61;  
  \--emd-primary-soft: \#E1F3EC;

  \--emd-secondary: \#1F7A8C;    /\* Teal – secondaire / liens / tags \*/  
  \--emd-secondary-light: \#52A1B5;  
  \--emd-secondary-soft: \#E5F3F6;

  \--emd-accent: \#F7A500;       /\* Ambre – prix, badges, accrochage visuel \*/  
  \--emd-accent-soft: \#FFF7E6;

  \--emd-bg: \#F8F5F0;           /\* Fond général \*/  
  \--emd-bg-soft: \#F1ECE3;  
  \--emd-surface: \#FFFFFF;      /\* Cards, modales \*/

  \--emd-text-main: \#1E1B18;    /\* Texte principal \*/  
  \--emd-text-muted: \#6B6A64;   /\* Texte secondaire \*/

  \--emd-border-subtle: \#E5E7EB;

  \--emd-success: \#047857;  
  \--emd-success-soft: \#DCFCE7;

  \--emd-error: \#B91C1C;  
  \--emd-error-soft: \#FEE2E2;  
}

2.2. Gradients officiels

:root {  
  \--emd-gradient-hero: linear-gradient(  
    135deg,  
    \#046C4E 0%,  
    \#1F7A8C 45%,  
    \#F1ECE3 100%  
  );

  \--emd-gradient-soft: linear-gradient(  
    180deg,  
    \#F8F5F0 0%,  
    \#FFFFFF 40%,  
    \#E1F3EC 100%  
  );

  \--emd-gradient-cta: linear-gradient(  
    135deg,  
    \#0A8A61 0%,  
    \#046C4E 100%  
  );

  \--emd-gradient-tag: linear-gradient(  
    90deg,  
    \#1F7A8C 0%,  
    \#52A1B5 100%  
  );  
}

2.3. Règles d’utilisation des couleurs

Primary (--emd-primary)

Boutons principaux (“Rechercher”, “Réserver”).

Éléments clés : prix mis en avant, étapes validées, marqueurs de confiance.

Secondary (--emd-secondary)

Liens, états actifs de navigation, tags de filtre, éléments interactifs secondaires.

Accent (--emd-accent)

Badges “Offre spéciale”, petites infos de prix, petits highlights.

Ne pas utiliser pour des gros blocs de texte (trop peu contrasté).

Background (--emd-bg)

Fond global des pages (body).

Importante pour l’identité : ambiance chaude / lumineuse.

Surface (--emd-surface)

Cards, modales, search bar, sections principales.

Textes

Titre, contenu : \--emd-text-main.

Infos secondaires, labels, meta : \--emd-text-muted.

\---

3\. Typographie

Police suggérée : Inter (ou équivalent système : system-ui) – standard, lisible, adaptée web / mobile.

3.1. Styles typographiques

H1 – Hero / titre principal

Taille : 32–40px (desktop), 24–28px (mobile)

Poids : 700

Couleur : \--emd-text-main (sur fond clair) ou blanc (sur hero gradient)

H2 – Titres de sections

Taille : 24–28px

Poids : 600

Couleur : \--emd-text-main

H3 – Sous-titres / titres de cards

Taille : 18–20px

Poids : 600

Couleur : \--emd-text-main

Texte standard

Taille : 14–16px

Poids : 400/500

Couleur : \--emd-text-main

Texte secondaire / meta

Taille : 12–14px

Couleur : \--emd-text-muted

Règle : ne pas descendre en-dessous de 12px pour du texte lisible.

\---

4\. Layout & structure

4.1. Grille & largeur

Largeur max du contenu : 1200px (centré).

Padding horizontal : 16px sur mobile, 24–32px sur desktop.

Layout responsive standard :

Mobile : 1 colonne

Tablet : 2 colonnes

Desktop : 3–4 colonnes (liste de voitures)

4.2. Spacing (espacements)

Proposer un scale simple :

XS : 4px

S : 8px

M : 12px

L : 16px

XL : 24px

XXL : 32px

Règles :

Entre sections : 48–64px verticaux.

Entre titre et texte : 8–12px.

Entre cards dans une liste : 16–24px.

4.3. Coins & ombres

Border-radius :

Cards, boutons, inputs : 8–12px

Search bar principale : 999px (pill) ou 16–24px

Ombre (shadow standard)

légère, type : 0 8px 24px rgba(15, 23, 42, 0.06)

\---

5\. Composants clés

5.1. Header & navigation

Header (desktop)

Fond :

soit \#FFFFFF avec bordure bas \--emd-border-subtle,

soit sur la zone hero : \--emd-gradient-hero.

Logo : texte ou icône en \--emd-primary ou blanc sur gradient.

Navigation :

Liens : \--emd-text-main ou blanc sur gradient.

Hover : changement de couleur vers \--emd-secondary \+ soulignement.

Élément important :  
Un bouton “Se connecter / S’inscrire” en CTA secondaire dans le header (bordure verte, fond blanc).

\---

5.2. Hero (page d’accueil)

Fond hero desktop : \--emd-gradient-hero.

Texte hero : blanc (titre \+ sous-titre).

Search bar (bloc principal) :

Card blanche (--emd-surface), ombre douce, border-radius 16–24px.

Input / select : bordure \--emd-border-subtle, focus bordure \--emd-secondary.

Bouton “Rechercher” :

Fond : \--emd-gradient-cta

Texte : blanc

Radius : pill (999px)

\---

5.3. Boutons

Bouton primaire

Fond : \--emd-gradient-cta

Texte : \#FFFFFF

Radius : 999px ou 12px

État hover : légère augmentation de brightness \+ légère ombre

État disabled : fond \--emd-primary-soft, texte \--emd-text-muted, curseur not-allowed

Bouton secondaire

Fond : \--emd-surface

Bordure : \--emd-primary

Texte : \--emd-primary

Hover : fond \--emd-primary-soft, bordure inchangée

Bouton texte (link button)

Texte : \--emd-secondary

Pas de bordure, background transparent

Hover : soulignement \+ légère variation de couleur (--emd-secondary-light)

\---

5.4. Cards véhicules

Structure d’une card voiture :

Container

Fond : \--emd-surface

Bordure : \--emd-border-subtle

Radius : 12px

Ombre légère au hover

Image

En haut, full width, radius top 12px

Ratio approx. 16:9

Contenu texte

Nom du véhicule : H3 (18–20px, \--emd-text-main, bold)

Infos (boîte, carburant, ville) : petites puces en \--emd-text-muted

Prix / jour :

Texte en \--emd-primary, bold

Afficher /jour en text-muted

Badges

“Offre spéciale” / “-15%” :

Fond : \--emd-accent-soft

Texte : \#8A5A00

“Hôte vérifié” :

Fond : \--emd-primary-soft

Texte : \--emd-primary

CTA dans la card

Bouton “Voir les détails” : bouton secondaire

Optionnel : lien texte “Conditions” en \--emd-secondary

\---

5.5. Formulaires

Inputs (text, email, numéro)

Fond : \#FFFFFF

Bordure : \--emd-border-subtle

Radius : 8px

Padding : 10–12px

Placeholder : \#9CA3AF

Focus :

Bordure : \--emd-secondary

Shadow légère pour montrer l’état actif

Selects (ville, dates, type de véhicule)

Même style que les inputs, avec icône chevron en \--emd-text-muted.

Messages d’erreur

Texte d’erreur : rouge \--emd-error

Icône éventuelle : \--emd-error

Fond léger : \--emd-error-soft (pour bloc d’erreur global, pas pour chaque champ)

\---

5.6. Messages système

Succès (réservation confirmée)

Fond : \--emd-success-soft

Icône : \--emd-success

Titre : \--emd-text-main (gras)

Description : \--emd-text-main

Alerte / Info (vérification, email envoyé, etc.)

Fond : \--emd-secondary-soft

Icône : \--emd-secondary

Texte : \--emd-text-main

Erreur (paiement refusé, champ obligatoire manquant)

Fond : \--emd-error-soft

Icône : \--emd-error

Texte : \--emd-text-main

\---

6\. Application par type de page

6.1. Landing / Home

Hero gradient (--emd-gradient-hero) \+ search bar blanche.

Section “Comment ça marche” sur fond \--emd-gradient-soft.

Liste des voitures populaires : fond \--emd-surface, cards en grille 3 colonnes (desktop).

Section “Pourquoi EkriMenDarek” : fond \--emd-bg.

6.2. Page listing (résultats de recherche)

Fond : \--emd-bg

Filtres : panel à gauche / en haut, cards filtre sur fond \--emd-surface

Cards véhicules : comme défini plus haut, fond \--emd-surface.

6.3. Fiche véhicule

Fond page : \--emd-bg

Bloc principal : card blanche avec :

Galerie photos

Info véhicule

Bloc “Prix & conditions”

Bloc réservation dans une card à droite (desktop) / bas de page (mobile).

\---

7\. États interactifs & accessibilité

7.1. États à gérer

Hover :

Boutons : légère variation de couleur/ombre

Cards : shadow \+ petit mouvement (translateY \-2px max)

Focus (clavier) :

Outline visible pour boutons, liens, inputs (ex. border ou halo teal \--emd-secondary)

Disabled :

Diminution d’opacité (\~0.5) \+ curseur not-allowed

7.2. Accessibilité

Texte important toujours en \--emd-text-main sur fond \--emd-bg ou \--emd-surface.

Éviter texte sur gradient : placer le texte dans des blocs unis (blanc ou très clair).

Taille minimum du texte : 14px sur desktop, 12px toléré pour labels secondaires.

Contraste :

Boutons primaires : fond vert foncé \+ texte blanc → OK.

Liens \--emd-secondary sur fond clair → OK.

Pas de texte clair sur \--emd-accent (à éviter).

\---

8\. Résumé opérationnel pour le développeur

1\. Mettre en place les variables de couleur (CSS ou thème Tailwind) selon la palette Emerald Road.

2\. Appliquer \--emd-bg comme fond global, \--emd-surface pour toutes les cards et blocs fonctionnels.

3\. Utiliser \--emd-gradient-hero pour le hero de la landing, avec une search bar blanche par-dessus.

4\. Standardiser les composants :

Boutons (primary, secondary, text) suivant les styles ci-dessus.

Inputs \+ states d’erreur / succès.

Cards véhicules avec structure et badges définis.

5\. Respecter la typographie, la hiérarchie (H1/H2/H3 \+ texte) et les espacements proposés.

6\. Gérer hover / focus / disabled de manière cohérente sur tous les éléments interactifs.