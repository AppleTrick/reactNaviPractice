import { StyleSheet, Text, View } from 'react-native';

const SignUpScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Sign Up Screen</Text>
  </View>
);

export default SignUpScreen;

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
