import { StyleSheet, Text, View } from 'react-native';

const InviteScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Invite Screen</Text>
  </View>
);

export default InviteScreen;

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
