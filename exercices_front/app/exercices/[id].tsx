import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ExerciceDetailScreen(){
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

    return(
        <view style={styles.container}>
            {renderContent()};
        </view>
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