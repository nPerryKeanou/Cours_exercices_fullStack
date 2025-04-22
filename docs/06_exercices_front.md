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