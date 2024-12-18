import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { NavigationProp } from '../types/navigation/navigation';

const MessagesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </View>
  );
};

export default MessagesScreen;
