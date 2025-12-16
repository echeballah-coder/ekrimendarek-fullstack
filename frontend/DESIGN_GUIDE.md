# Guide de Design EkriMenDarek

Ce document définit les conventions UI/UX et le plan de refonte du frontend.

## 🎨 Tokens UI

Les tokens sont définis dans `lib/uiTokens.ts`. Ne pas modifier directement, utiliser les tokens.

### Spacing
- **Section padding** : `spacing.section.base` (4rem / 64px par défaut)
- **Container padding** : Mobile 1rem, Tablet 1.5rem, Desktop 2rem
- **Container max-width** : 1280px
- **Grid gap** : Base 1.5rem (24px)

### Typography
- **H1** : `5xl` (3rem / 48px) desktop, `4xl` mobile
- **H2** : `4xl` (2.25rem / 36px) desktop, `3xl` mobile
- **H3** : `3xl` (1.875rem / 30px)
- **H4** : `2xl` (1.5rem / 24px)
- **Body** : `base` (1rem / 16px)
- **Small** : `sm` (0.875rem / 14px)

### Radius & Shadow
- **Cards** : `radius.base` (8px) + `shadow.base`
- **Buttons** : `radius.base` (8px)
- **Inputs** : `radius.base` (8px)
- **Sections importantes** : `radius.lg` (16px) + `shadow.md`

### Animations
- **Transitions** : 300ms par défaut, `animation.easing.default`
- **Hover** : 150ms fast
- **Scroll animations** : utiliser `AnimatedSection` avec `viewport: { once: true }`
- **Mobile** : animations allégées (opacity only)

---

## 📋 Plan de Refonte UI/UX - Page par Page

### **1. Landing Page (app/page.tsx)**
**Sections à refondre** :
- Hero : Titre + CTA + Visuel
- Comment ça marche : 3 étapes avec icons
- Pourquoi EkriMenDarek : 4 avantages
- Témoignages : Carousel (optionnel)

**Composants attendus** :
- `HeroSection` (nouveau design moderne)
- `HowItWorksSection` (avec icons SVG)
- `WhyChooseSection` (grid 2x2)
- `CTASection` (final call-to-action)

---

### **2. Recherche (app/recherche/page.tsx)**
**Sections à refondre** :
- Barre de recherche : Filtres inline
- Résultats : Grid responsive de cards véhicules

**Composants attendus** :
- `SearchFilters` (compact, inline)
- `VehicleCardGrid` (grid adaptatif)
- `VehicleCardCompact` (nouvelle version)

---

### **3. Fiche Véhicule (app/vehicule/[id]/page.tsx)**
**Sections à refondre** :
- Hero image + galerie
- Détails véhicule : Tabs (Caractéristiques / Description / Agence)
- CTA réservation : Sticky sur mobile

**Composants attendus** :
- `VehicleGallery` (carrousel + thumbnails)
- `VehicleDetailsTabs` (Material-style tabs)
- `BookingCardSticky` (prix + CTA)

---

### **4. Réservation (app/reservation/page.tsx)**
**Sections à refondre** :
- Formulaire : Étapes visuelles (1. Dates, 2. Infos, 3. Paiement)
- Récap véhicule : Card compact à gauche
- Totaux : Card claire et mise en avant

**Composants attendus** :
- `BookingSteps` (stepper visuel)
- `VehicleSummaryCard` (compact)
- `PricingBreakdown` (totaux clairs)

---

### **5. KYC (app/kyc/page.tsx)**
**Sections à refondre** :
- Processus KYC : Multi-step form moderne
- Upload documents : Drag & drop zone

**Composants attendus** :
- `KYCStepForm` (wizard moderne)
- `DocumentUploadZone` (drag & drop)
- `KYCProgress` (barre de progression)

---

### **6. Auth (app/auth/login + signup)**
**Sections à refondre** :
- Forms : Design épuré, centré
- Social login : CIB/Edahabia buttons

**Composants attendus** :
- `AuthForm` (design moderne)
- `SocialLoginButtons` (optionnel)

---

### **7. Compte (app/account/page.tsx)**
**Sections à refondre** :
- Profil : Card améliorée
- Réservations : Timeline ou cards améliorées

**Composants attendus** :
- `ProfileCard` (déjà créé, à améliorer)
- `BookingsTimeline` (version timeline)

---

### **8. Contact / FAQ (futures pages)**
**Composants attendus** :
- `ContactForm`
- `FAQAccordion`

---

## 🎯 Principes de Design

### Cohérence
- Utiliser les tokens systématiquement
- Respecter le design system
- Pas de valeurs "magic numbers" en dur

### Responsive
- Mobile-first approach
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid adaptatif : 1 col mobile, 2-3 cols tablet, 3-4 cols desktop

### Performance
- Lazy-load images et composants lourds
- Animations allégées sur mobile
- Code-splitting par route

### Accessibilité
- Contrastes WCAG AA minimum
- Focus states visibles
- Labels ARIA si nécessaire

---

## 🚀 Workflow de Refonte

Pour chaque page :
1. Analyser l'existant
2. Designer la nouvelle version (wireframe mental ou Figma si fourni)
3. Créer les composants nécessaires
4. Implémenter page par page
5. Tester responsive + performance
6. Git commit dédié

**Ordre recommandé** : Landing → Recherche → Véhicule → Réservation → Auth → KYC → Compte
