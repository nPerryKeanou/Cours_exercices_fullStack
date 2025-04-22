import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import MonMessage from '../components/MonMessage';

export default function Exercice1Screen() {
  return (
    <View style={styles.container}>
        <MonMessage message="Voici un composant message dans le composant Exercices1Screen."/>
    </View>
    // <ScreenContainer>
    //     <Text>🎉 Bienvenue dans mon premier exercices de react-native</Text>
    // </ScreenContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});