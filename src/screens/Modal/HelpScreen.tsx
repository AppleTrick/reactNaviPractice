import { StyleSheet, Text, View } from 'react-native';

const HelpScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Help Screen</Text>
  </View>
);
export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
