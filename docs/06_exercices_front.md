# 🔪 Exercices Frontend - React Native (avec TypeScript)

> 🔁 Exercices liés au Cours 01 (composants de base + navigation)

---

## 📋 Objectif

Mettre en pratique ce que tu viens d’apprendre :  
✅ créer des écrans,  
✅ manipuler des composants de base,  
✅ ajouter de la navigation.

---

## 🧹 Exercice 01 – Créer un écran d’accueil personnalisé

### 🌟 Objectif
Créer un écran `AccueilScreen` contenant :
- Un titre (avec `Text`)
- Une brève description de l'app
- Un bouton pour accéder à un autre écran

### 📁 Étapes

1. Crée un fichier `AccueilScreen.tsx` dans `screens/`
2. Utilise les composants `View`, `Text` et `Button`
3. Ajoute une navigation vers un autre écran (ex: `InfosScreen`)

### 💡 Aide (structure)

```tsx
import { View, Text, Button } from 'react-native';

export default function AccueilScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Bienvenue sur l'app Juments</Text>
      <Text>Gérez vos juments facilement et efficacement.</Text>
      <Button title="Voir les infos" onPress={() => navigation.navigate('Infos')} />
    </View>
  );
}
```

---

## 🧹 Exercice 02 – Créer un écran `InfosScreen`

### 🌟 Objectif
Afficher des infos statiques sur ton app (texte uniquement)

### 📁 Étapes

1. Crée `InfosScreen.tsx` dans `screens/`
2. Ajoute des `Text` avec différentes tailles
3. Tu peux aussi essayer `ScrollView` si tu veux tester un écran long

### 💡 Aide (structure)

```tsx
import { View, Text, ScrollView } from 'react-native';

export default function InfosScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Infos sur l'application</Text>
      <Text style={{ marginTop: 10 }}>
        Cette application permet de gérer vos juments : suivis, catégories, profils, etc.
      </Text>
      <Text style={{ marginTop: 10 }}>
        Version : 1.0.0
      </Text>
    </ScrollView>
  );
}
```

---

## 🧹 Exercice 03 – Navigation entre les deux écrans

### 🌟 Objectif
Relier les deux écrans via la navigation (Stack Navigator)

### 📁 Étapes

1. Dans `App.tsx`, importe tes deux écrans :
   ```tsx
   import AccueilScreen from './screens/AccueilScreen';
   import InfosScreen from './screens/InfosScreen';
   ```

2. Configure le Stack Navigator :

   ```tsx
   <Stack.Navigator initialRouteName="Accueil">
     <Stack.Screen name="Accueil" component={AccueilScreen} />
     <Stack.Screen name="Infos" component={InfosScreen} />
   </Stack.Navigator>
   ```

3. Vérifie que le bouton fonctionne bien pour naviguer.

---

## ✅ Résultat attendu

Une app fonctionnelle avec :

| Écran        | Contenu attendu                      |
|--------------|--------------------------------------|
| Accueil      | Texte + bouton vers Infos            |
| Infos        | Texte d’information                  |
| Navigation   | Aller-retour entre Accueil <-> Infos |

---

## 🧠 Conseil bonus

- Tu peux styliser chaque écran avec `StyleSheet.create()`  
- Essaie d’ajouter une couleur ou une image (dans `assets/`)

---

## 🖜️ Prochaine étape

> On va créer un vrai **système d’accueil avec un menu**, puis simuler un profil jument avec des données statiques (mock).

---

