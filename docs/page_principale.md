# 📱 Page Principale

---

## 🧠 Résumé fonctionnel

La page principale de l’application est l’écran d’accueil où l’on retrouve les principaux éléments d’interaction et d’affichage concernant les juments. Elle est divisée en plusieurs zones fonctionnelles.

---

## 🧩 Composants de la page

### 🧷 Header
- Titre de l'application
- Bouton "Paramètres"
- (Possiblement un autre élément à définir)

---

### ➕ Bouton "Ajouter une jument"
- Placé juste en dessous du header
- Redirige vers la page `createJument`

---

### 📊 Affichage des juments
- Tableaux ou listes par **catégorie** (à bien différencier)
- Chaque catégorie contient plusieurs juments
- Affichage limité à **5 ou 6 infos max par jument** pour garder une bonne lisibilité
- En cliquant sur une jument, redirection vers sa fiche via la page `profilJument`

---

## 📅 Icône calendrier ?
- Peut-être à afficher directement sur la page principale
- Sinon, passer par `profilJument` ou `calenderPerso`

---

## 📁 Informations affichées par catégorie

### 🔁 Juments en **saillie**
- Photo
- Nom
- Si **dans un cycle ovarien** (visuel : couleur chaude) :
  - Date du début du cycle
  - Nombre de jours depuis le début
  - Date de la dernière ovulation
  - Nombre de jours depuis la dernière ovulation
- Si **hors cycle ovarien** (visuel : couleur froide) :
  - Date du dernier jour des dernières chaleurs
  - Date de la dernière ovulation
  - Nombre de jours depuis la dernière chaleur ou ovulation

---

### 🍼 Juments en **saillie et suitées**
- Indiquer qu'elle est suitée
- (Autres infos à compléter ou à laisser au choix de l’utilisateur)

---

### 🤰 Juments en **gestation**
- Photo de l'étalon (optionnel)
- Nom de l'étalon
- Date de la prise en gestation
- Calcul :
  - Nombre de jours depuis la prise
  - Nombre de jours restants avant le poulinage

---

### 🐣 Juments **suitées**
- Nom du poulain
- Photo du poulain (optionnelle)
- Date du poulinage
- Nombre de jours depuis (âge du poulain)
- Si aussi en saillie : laisser le choix à l'utilisateur des infos prioritaires

---

### ⛔ Juments **inactives**
- Activité (travail)
- Prochain cours
- Prochain concours
- Prochaine course
- Prochain rendez-vous vétérinaire
- *À valider avec Chelsea : quelles infos sont vraiment pertinentes ?*

---

## 🔻 Footer (à discuter)
- Plan du site
- Contacts
- Informations pour investisseurs
- Autres éléments à définir ensemble