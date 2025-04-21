import { View, Text, StyleSheet } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';

export default function Exercice1Screen() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.text}>👋 Ceci est l'exercice 1 !</Text>
    // </View>
    <ScreenContainer>
        <Text>🎉 Ceci est l'exercice 1 !</Text>
    </ScreenContainer>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
// });