# 🔗 Connexion au Repository GitHub

## Une fois le repo créé sur GitHub, exécutez ces commandes :

### 1. Ajoutez le remote (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)

```bash
git remote add origin https://github.com/VOTRE-USERNAME/ekrimendarek-frontend.git
```

### 2. Vérifiez que le remote est bien ajouté

```bash
git remote -v
```

Vous devriez voir :
```
origin  https://github.com/VOTRE-USERNAME/ekrimendarek-frontend.git (fetch)
origin  https://github.com/VOTRE-USERNAME/ekrimendarek-frontend.git (push)
```

### 3. Poussez votre code sur GitHub

```bash
git push -u origin main
```

Si vous avez une erreur d'authentification, GitHub vous demandera de vous connecter.

### 4. Vérifiez sur GitHub

Rechargez la page de votre repository sur GitHub, vous devriez voir tous vos fichiers !

---

## 📌 Commandes Git Utiles pour Plus Tard

### Voir l'état des fichiers
```bash
git status
```

### Ajouter tous les fichiers modifiés
```bash
git add .
```

### Créer un commit (message en français, court et clair)
```bash
git commit -m "Votre message ici"
```

### Pousser les changements
```bash
git push
```

### Voir l'historique des commits
```bash
git log --oneline
```

### Créer une nouvelle branche
```bash
git checkout -b nom-de-la-branche
```

### Revenir à la branche principale
```bash
git checkout main
```

---

## ✅ Workflow Recommandé

Pour chaque nouvelle fonctionnalité :

1. **Créer une branche** :
   ```bash
   git checkout -b feature/nom-fonctionnalite
   ```

2. **Faire vos modifications** et tester

3. **Commiter** :
   ```bash
   git add .
   git commit -m "Ajout de la fonctionnalité X"
   ```

4. **Pousser** :
   ```bash
   git push -u origin feature/nom-fonctionnalite
   ```

5. **Créer une Pull Request** sur GitHub

6. **Merger** dans main après validation

---

## 🎯 Exemple de Messages de Commit

Bons messages (français, concis, accessibles) :
- ✅ "Initialisation du projet frontend"
- ✅ "Ajout du composant Header"
- ✅ "Configuration de la palette de couleurs"
- ✅ "Création de la page d'accueil"
- ✅ "Correction du bug d'affichage mobile"
- ✅ "Ajout des données mockées véhicules"
- ✅ "Mise en place du système de recherche"

Mauvais messages :
- ❌ "wip"
- ❌ "fix"
- ❌ "update"
- ❌ "changes"
- ❌ Messages en anglais (sauf si l'équipe l'exige)

---

## 📞 Besoin d'Aide ?

Si vous rencontrez un problème, n'hésitez pas à demander !
