//Components/MonMessage.tsx
import { View, Text, StyleSheet } from "react-native";

export default function MonMessage({message}: {message: string}){
    return(
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
