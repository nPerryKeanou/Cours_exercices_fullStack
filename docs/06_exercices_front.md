🧪 Exercices Frontend avec React Native (Expo Router)

⚙️ Objectif général

Créer une série d'exercices pratiques pour s'entraîner avec React Native et expo-router, en suivant une progression logique. Chaque exercice est accompagné d'explications pédagogiques, de liens vers la documentation officielle et de bonnes pratiques.

🧪 Exercice 1 – Affichage simple d’un composant

🎯 Objectif

Apprendre à créer un composant React Native et l’afficher dans l’application.

📚 Technologies utilisées

View

Text

StyleSheet

expo-router

🧠 Pourquoi ?

Tout est basé sur des composants en React Native. Il est fondamental de savoir en créer et les afficher correctement.

✅ Ce qu’il faut faire

Créer une page exercice01.tsx dans le dossier app/exercices/

Afficher un message centré à l'écran : "Bienvenue dans mon premier exercice React Native 🎉"

Ajouter un fond blanc (backgroundColor: '#fff') pour éviter l'écran noir

💡 Exemple :

import { View, Text, StyleSheet } from 'react-native';

export default function Exercice1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans mon premier exercice React Native 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

🧪 Exercice 2 – Navigation entre deux écrans

🎯 Objectif

Naviguer d’un écran à un autre grâce à expo-router

📚 Technologies utilisées

useRouter

✅ Ce qu’il faut faire

Modifier la page index.tsx dans le dossier app/

Ajouter un bouton pour naviguer vers /exercices/exercice01

💡 Exemple :

import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text>Bienvenue dans les exercices !</Text>
      <Button title="Aller à l'exercice 1" onPress={() => router.push('/exercices/exercice01')} />
    </View>
  );
}

🧪 Exercice 3 – Création d’un composant personnalisé

🎯 Objectif

Créer un composant réutilisable avec des props

📚 Technologies utilisées

Props

View, Text

✅ Ce qu’il faut faire

Créer un composant MonMessage.tsx dans components/

Le composant prend une prop message: string et l’affiche

Réutiliser ce composant dans exercice01.tsx

💡 Exemple du composant :

// components/MonMessage.tsx
import { View, Text, StyleSheet } from 'react-native';

export default function MonMessage({ message }: { message: string }) {
  return (
    <View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },
});

💡 Exemple d’utilisation :

// app/exercices/exercice01.tsx
import { View, StyleSheet } from 'react-native';
import MonMessage from '../../components/MonMessage';

export default function Exercice1Screen() {
  return (
    <View style={styles.container}>
      <MonMessage message="Voici un message affiché avec un composant personnalisé 🧩" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

✅ Tu peux tester tout ça depuis ton projet dans Cours_exercices_fullStack !

👉 On continue avec les prochains exercices (navigation avec paramètres, liste, formulaire, etc.) dès que tu es prêt.







##########################################################################



### 🧪 Exercice 4 – Navigation dynamique avec paramètres

#### 🎯 Objectif

Apprendre à :
- Créer une route dynamique avec `[id].tsx`
- Lire et afficher le paramètre passé dans l’URL
- Naviguer vers cette page dynamiquement

#### 📚 Technologies utilisées

- [`useLocalSearchParams`](https://expo.github.io/router/docs/api/useLocalSearchParams)
- [`useRouter`](https://expo.github.io/router/docs/api/useRouter)
- [`[param].tsx`](https://expo.github.io/router/docs/routing/dynamic-routes)

---

#### ✅ Étapes à suivre

##### 1. Créer le fichier `app/exercices/[id].tsx`

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ExerciceDetailScreen() {
  const { id } = useLocalSearchParams();

  const renderContent = () => {
    switch (id) {
      case '1':
        return <Text style={styles.text}>🎯 Exercice 1 : Affichage simple</Text>;
      case '2':
        return <Text style={styles.text}>📱 Exercice 2 : Navigation entre écrans</Text>;
      case '3':
        return <Text style={styles.text}>🧩 Exercice 3 : Composant personnalisé</Text>;
      default:
        return <Text style={styles.text}>❓ Exercice inconnu : {id}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
2. Modifier index.tsx pour y ajouter des boutons de navigation

import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ marginBottom: 16 }}>Bienvenue dans les exercices !</Text>
      <Button title="Exercice 1" onPress={() => router.push('/exercices/1')} />
      <Button title="Exercice 2" onPress={() => router.push('/exercices/2')} />
      <Button title="Exercice 3" onPress={() => router.push('/exercices/3')} />
    </View>
  );
}
✅ Résultat
Tu peux désormais accéder dynamiquement à chaque exercice via l’URL /exercices/1, /exercices/2, etc.
Le contenu affiché s’adapte selon la valeur de l’id.

#########################################################################################£

## 🧪 Exercice 5 – Affichage d’une liste de données avec FlatList

---

### 🎯 Objectif

Afficher dynamiquement une liste d’objets dans l’interface, en utilisant `FlatList`, composant optimisé pour les longues listes.

---

### 📚 Technologies utilisées

- [`FlatList`](https://reactnative.dev/docs/flatlist)
- [`View`](https://reactnative.dev/docs/view)
- [`Text`](https://reactnative.dev/docs/text)
- [`StyleSheet`](https://reactnative.dev/docs/stylesheet)

---

### 💡 Pourquoi ?

Dans presque toutes les apps, on affiche des listes : utilisateurs, posts, produits, animaux, etc. `FlatList` est la solution performante de React Native pour cela.

---

### ✅ Ce qu’il faut faire

1. Créer une page `exercice05.tsx` dans `app/exercices/`
2. Afficher une liste de **juments** fictives
3. Chaque jument doit avoir un nom, un âge et une couleur
4. Styliser les cartes pour une meilleure lisibilité

---

### 🐴 Exemple de données à afficher

```ts
const juments = [
  { id: '1', nom: 'Étoile', age: 5, couleur: 'Marron' },
  { id: '2', nom: 'Luna', age: 7, couleur: 'Noire' },
  { id: '3', nom: 'Perle', age: 4, couleur: 'Grise' },
];


💻 Exemple complet du composant

import { View, Text, FlatList, StyleSheet } from 'react-native';

const juments = [
  { id: '1', nom: 'Étoile', age: 5, couleur: 'Marron' },
  { id: '2', nom: 'Luna', age: 7, couleur: 'Noire' },
  { id: '3', nom: 'Perle', age: 4, couleur: 'Grise' },
];

export default function Exercice5Screen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={juments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>Nom : {item.nom}</Text>
            <Text>Âge : {item.age} ans</Text>
            <Text>Couleur : {item.couleur}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    marginBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});


🔁 Possibilités d’évolution
Ajouter une image de la jument

Rendre chaque élément cliquable (pour ouvrir une fiche)

Charger les données depuis une API

Utiliser une ScrollView si la liste est courte (mais FlatList est mieux optimisé)

