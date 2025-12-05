# EkriMenDarek - Frontend

Plateforme de location de voitures en Algérie - Version démo frontend

## 🚀 Technologies

- **Next.js 14** (App Router)
- **TypeScript** (mode strict)
- **TailwindCSS**
- **ESLint**

## 📁 Structure du Projet

```
ekrimendarek-frontend/
├── app/                  # Pages et routes (App Router)
├── components/           # Composants réutilisables
├── features/             # Modules fonctionnels
├── lib/                  # Utilitaires et helpers
├── types/                # Types TypeScript globaux
├── styles/               # Styles globaux
├── data/                 # Données mockées
├── messages/             # Traductions i18n
├── hooks/                # Custom hooks
├── context/              # React Contexts
└── public/               # Assets statiques
```

## 🛠️ Installation

**Important** : Avant d'installer les dépendances, vous devez activer l'exécution de scripts PowerShell.

### Exécuter en tant qu'administrateur dans PowerShell :

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Puis installer les dépendances :

```bash
npm install
```

## 🏃 Lancement du projet

```bash
# Mode développement
npm run dev

# Build de production
npm run build

# Lancement en production
npm start

# Linting
npm run lint
```

Le serveur de développement sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Prochaines Étapes

1. Installer les dépendances (`npm install`)
2. Configurer le design system (palette Wraith)
3. Installer shadcn/ui
4. Créer les composants UI de base
5. Développer les pages principales
6. Intégrer les données mockées

## 🔧 Configuration

Le projet est configuré avec :
- TypeScript strict mode
- TailwindCSS avec configuration de base
- ESLint avec règles Next.js
- Support d'images externes (Unsplash, Pexels)

---

**Créé le** : 5 décembre 2025
