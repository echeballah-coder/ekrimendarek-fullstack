# 📋 Instructions d'Installation - EkriMenDarek Frontend

## ⚠️ IMPORTANT : Activer l'exécution de scripts PowerShell

Avant d'installer les dépendances, vous devez autoriser l'exécution de scripts sur votre système.

### Étape 1 : Ouvrir PowerShell en tant qu'Administrateur

1. Cliquez sur le menu Démarrer
2. Tapez "PowerShell"
3. **Clic droit** sur "Windows PowerShell"
4. Sélectionnez **"Exécuter en tant qu'administrateur"**

### Étape 2 : Exécuter la commande suivante

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Appuyez sur **"O"** (Oui) pour confirmer.

### Étape 3 : Fermer PowerShell Administrateur

Vous pouvez maintenant fermer cette fenêtre.

---

## 📦 Installation des Dépendances

### Ouvrir un nouveau terminal dans VS Code

1. Ouvrez VS Code
2. Ouvrez le dossier `ekrimendarek-frontend`
3. Ouvrez un nouveau terminal (Ctrl + ù ou Terminal > Nouveau Terminal)
4. Assurez-vous d'être dans le bon dossier :

```bash
cd c:\Users\elhoc\OneDrive\Desktop\KriMenDarek-Prototype\ekrimendarek-frontend
```

### Installer les dépendances

```bash
npm install
```

Cette commande va installer :
- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- ESLint
- Et toutes les dépendances nécessaires

⏱️ **L'installation prendra environ 2-5 minutes.**

---

## 🚀 Lancer le Projet

Une fois l'installation terminée, lancez le serveur de développement :

```bash
npm run dev
```

Vous verrez un message similaire à :

```
> ekrimendarek-frontend@0.1.0 dev
> next dev

  ▲ Next.js 14.2.16
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Ready in 2.3s
```

### Ouvrir dans le navigateur

Ouvrez votre navigateur et allez sur : **http://localhost:3000**

Vous devriez voir la page d'accueil avec le message :
**"EkriMenDarek - Frontend initialisé - Structure de base prête !"**

---

## ✅ Vérification

Si tout fonctionne, vous devriez voir :
- ✓ App Router activé
- ✓ TypeScript en mode strict
- ✓ TailwindCSS configuré
- ✓ ESLint activé
- ✓ Structure de dossiers créée

---

## 🐛 En cas de problème

### Si npm ne fonctionne toujours pas

Essayez d'utiliser **Git Bash** au lieu de PowerShell :
1. Clic droit dans le dossier du projet
2. Sélectionnez "Git Bash Here"
3. Exécutez `npm install`

### Si le port 3000 est occupé

Vous pouvez utiliser un autre port :

```bash
npm run dev -- -p 3001
```

Puis ouvrez http://localhost:3001

---

## 📞 Besoin d'aide ?

Si vous rencontrez des difficultés, n'hésitez pas à demander de l'aide !
