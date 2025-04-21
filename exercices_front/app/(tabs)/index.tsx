import { View, Text, Button } from "react-native";
import { useRouter } from 'expo-router';

export default function Home(){
	const router = useRouter();

	return(
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
		<Text style={{ color: '#000', fontSize: 18 }}>Bienvenue dans les exercices ! 🎉</Text>
		<Button
			title="Aller à l'exercice n°1"
			onPress={() => router.push('/exercices/exercice01')}
		/>
	</View>
	);
}