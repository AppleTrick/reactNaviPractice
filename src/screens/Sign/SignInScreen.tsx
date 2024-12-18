import { Button, StyleSheet, Text, View } from 'react-native';

const SignInScreen = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Sign In Screen</Text>
    <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    <Button title="Log In" onPress={() => setIsLoggedIn(true)} />
  </View>
);

export default SignInScreen;

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
