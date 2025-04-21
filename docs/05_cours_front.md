# 🖥 Cours Frontend - React Native (Expo)

## Objectifs du cours

Dans cette section, tu vas apprendre à configurer et développer l'interface de ton application mobile avec **React Native** et **Expo**. L'objectif est de mettre en place les fondations de l'application mobile et de commencer à ajouter des écrans interactifs.

---

## 📦 Configuration initiale

1. **Installation d'Expo CLI** :
   - Si tu n'as pas encore installé Expo CLI, fais-le avec la commande suivante :
     ```bash
     npm install -g expo-cli
     ```
   
2. **Création du projet Expo** :
   - Crée un nouveau projet avec Expo :
     ```bash
     expo init mon-projet-juments
     ```
   - Choisis l'option **"blank"** pour un projet de base avec React Native.

3. **Lancement de l'application** :
   - Pour lancer l'application dans ton simulateur ou sur ton appareil mobile :
     ```bash
     expo start
     ```
   - Cela ouvrira Expo dans ton navigateur où tu pourras scanner le QR code avec ton téléphone (si tu utilises un appareil mobile) ou utiliser le simulateur Android/iOS sur ton ordinateur.

---

## 📱 Structure de l'application

Voici comment structurer ton application mobile dans le dossier **front** de ton projet :

/mon-projet-juments ├── front/ │ ├── assets/ # Images et ressources │ ├── components/ # Composants réutilisables │ ├── screens/ # Écrans (pages de l'application) │ ├── navigation/ # Configuration de la navigation │ └── App.js # Fichier principal

1. **`assets/`** : Contient toutes les ressources statiques (images, logos, icônes, etc.)
2. **`components/`** : Contient les composants React réutilisables (par exemple, boutons, champs de formulaire, etc.)
3. **`screens/`** : Contient tous les écrans principaux de l'application (ex : page d'accueil, création de jument, etc.)
4. **`navigation/`** : Gère la configuration de la navigation entre les écrans (avec React Navigation).

---

## 🚀 Ajout de React Navigation

La navigation est essentielle pour une application mobile. On va utiliser **React Navigation** pour gérer les différentes vues de ton application.

### 1. Installation de React Navigation

Dans ton dossier **front**, installe les dépendances nécessaires pour React Navigation :

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack








#########################################################################################################

# Cours Frontend - React Native avec TypeScript

## Introduction

Dans ce cours, nous allons apprendre à utiliser **React Native avec TypeScript** pour développer une application mobile. React Native nous permet de créer des applications mobiles multiplateformes (iOS et Android) en utilisant **JavaScript** et **React**. Avec **TypeScript**, nous ajoutons une couche de sécurité grâce au typage statique.

### Objectifs

- Apprendre les bases de React Native et de son environnement
- Créer des composants React Native en utilisant TypeScript
- Comprendre la navigation entre écrans
- Utiliser les hooks comme `useState` et `useEffect`
- Mettre en place une architecture de base pour l'application

---

## 1. Créer une Application React Native avec Expo

### Qu'est-ce que Expo ?
Expo est un outil qui simplifie l'utilisation de React Native, en gérant automatiquement la configuration pour nous. Il permet de travailler sur notre application sans avoir besoin d'installer **Xcode** ou **Android Studio**.

### Commandes principales d'Expo

- `npx create-expo-app nom-de-l-app` : Crée une nouvelle application Expo.
- `npm start` : Démarre le serveur de développement.
- `npm run android` : Lance l'application sur un appareil Android (via un émulateur ou un appareil connecté).
- `npm run ios` : Lance l'application sur un simulateur iOS (si Xcode est installé).

### Structure du Projet

La structure d'un projet Expo typique ressemble à ceci :

/mon-projet ├── assets/ -> Images et autres fichiers statiques ├── node_modules/ -> Dépendances du projet ├── src/ -> Code source de l'application │ ├── screens/ -> Composants représentant des écrans (HomeScreen, ProfileScreen) │ └── App.tsx -> Point d'entrée principal de l'application ├── app.json -> Configuration du projet └── package.json -> Dépendances et scripts du projet


---

## 2. Créer un Premier Composant : `App.tsx`

```tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenue dans l'application Juments !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
View : Un conteneur pour les autres éléments (similaire à div en HTML).

Text : Pour afficher du texte à l'écran.

StyleSheet : Pour gérer le style de l'interface.



3. Les Hooks : useState et useEffect
useState
Le hook useState permet de gérer l'état local dans un composant fonctionnel. Il prend une valeur initiale et retourne un tableau avec la valeur actuelle et une fonction pour la mettre à jour.


import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Compteur : {count}</Text>
      <Button title="Incrémenter" onPress={() => setCount(count + 1)} />
    </View>
  );
}
useState(0) : Initialise le compteur à 0.

setCount(count + 1) : Met à jour le compteur à chaque fois que le bouton est pressé.

Conclusion
Dans ce cours, nous avons vu comment initialiser une application React Native avec Expo, créer des composants simples, et utiliser le hook useState pour gérer l'état. Dans les prochains cours, nous approfondirons la navigation entre les écrans et l'interaction avec le backend.


##############################################################################################################################################``






########################################################################
.gitingore :
  Oui, tu peux tout à fait ajouter certains fichiers ou dossiers à ignorer dans ton projet Git en utilisant le fichier .gitignore. Voici comment procéder pour que certains fichiers dans le dossier docs/ ne soient pas inclus lors du push sur GitHub :

Étape 1 : Modifier le fichier .gitignore
Ouvre ton fichier .gitignore à la racine de ton projet (si tu n'en as pas encore, crée-le à la racine du projet).

Ajoute les fichiers ou dossiers que tu souhaites ignorer dans ce fichier. Par exemple, pour ignorer certains fichiers spécifiques dans le dossier docs/, tu peux ajouter les lignes suivantes :

bash
Copier
Modifier
# Ignorer tout le contenu du dossier docs/
docs/*

# Mais garder certains fichiers spécifiques dans docs (ex : exercices)
!docs/exercices/

# Ou si tu veux ignorer certains fichiers seulement :
docs/secret_file.md
docs/private_ideas.md
Explication :
docs/* : Cette ligne ignore tout le contenu du dossier docs/.

!docs/exercices/ : Cette ligne inverse l'ignorance pour un sous-dossier spécifique, ici exercices/, afin que les fichiers dans ce sous-dossier ne soient pas ignorés.

docs/secret_file.md et docs/private_ideas.md : Ces fichiers seront ignorés spécifiquement.

Étape 2 : Vérification du fichier .gitignore
Une fois que tu as mis à jour le fichier .gitignore, voici quelques commandes utiles pour t'assurer que tout est bien pris en compte.

Vérifie si les fichiers sont correctement ignorés :

Si les fichiers sont déjà suivis par Git avant de les avoir ajoutés dans .gitignore, tu dois d'abord les retirer du suivi. Sinon, même après les avoir ajoutés dans .gitignore, Git continuera à les suivre.

Pour retirer un fichier ou un dossier du suivi de Git, utilise cette commande :

git rm --cached chemin/du/fichier
Exemple :

git rm --cached docs/secret_file.md
Cette commande supprime le fichier du suivi Git sans le supprimer de ton disque local.

Vérifie les fichiers ignorés :

Après avoir ajouté tes modifications dans .gitignore, tu peux vérifier si les fichiers sont bien ignorés avec :

git status
Les fichiers ou dossiers ignorés devraient apparaître dans la liste sous "ignored files".

Étape 3 : Effectuer un commit et push
Ajoute et commit les modifications :

git add .gitignore
git commit -m "Ajout de fichiers à ignorer dans .gitignore"
Pousse les modifications vers ton repo GitHub :


git push origin main
Assure-toi de ne pas avoir ajouté les fichiers que tu veux ignorer avant d'exécuter le git push. Si ces fichiers sont déjà suivis par Git et que tu ne les as pas retirés du suivi, ils seront toujours poussés.

Résumé :
Modifie ton fichier .gitignore pour ignorer les fichiers sensibles ou privés dans le dossier docs/.

Utilise git rm --cached pour arrêter de suivre ces fichiers.

Vérifie avec git status si les fichiers sont bien ignorés.

Commit et push normalement.

Si tout est bien configuré, tes fichiers ignorés ne seront pas envoyés sur GitHub lors du push. N'hésite pas à me demander si tu rencontres un problème ! 😊