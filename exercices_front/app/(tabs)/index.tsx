// ---------------------- index de base.
// import { View, Text, Button } from "react-native";
// import { useRouter } from 'expo-router';

// export default function Home(){
// 	const router = useRouter();

// 	return(
// 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
// 		<Text style={{ color: '#000', fontSize: 18 }}>Bienvenue dans les exercices ! 🎉</Text>
// 		<Button
// 			title="Aller à l'exercice n°1"
// 			onPress={() => router.push('/exercices/exercice01')}
// 		/>
// 		<Button 
// 			title="Aller à l'exercice n°2"
// 			onPress={() => router.push('/exercices/exercice02?user=keanu')}
// 		/>
// 	</View>
// 	);
// }

// ---------------------- index pour l'exercices 4

import { View, Text, Button } from "react-native";
import { useRouter } from 'expo-router';
import ExerciceDetailScreen from "../exercices/[id]";

export default function HomeScreen(){
	const router = useRouter();

	return(
		<view style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
			<text style={{ marginBottom: 16 }}>Bienvenu dans les exercices.</text>
			<Button title="Exercice 1" onPress={() => router.push('/exercices/1')}/>
			<Button title="Exercice 2" onPress={() => router.push('/exercices/2')}/>
			<Button title="Exercice 3" onPress={() => router.push('/exercices/3')}/>
		</view>
	);
}