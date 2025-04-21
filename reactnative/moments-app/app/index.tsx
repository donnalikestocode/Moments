import { View, Text, Button} from "react-native";
import { useRouter } from "expo-router";

export default function GratitudeListScreen() {
  const router = useRouter();

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Gratitude List</Text>
      <Button
        title = "Create New Gratitude"
        onPress={() => router.push('/CreateGratitudeScreen')}
      />
    </View>
  );
}