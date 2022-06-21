import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UploadMoment from './components/UploadMoment.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UploadMoment/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEAE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
