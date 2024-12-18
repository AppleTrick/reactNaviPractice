import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { NavigationProp } from '../types/navigation/navigation';

const FeedScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.navigate('Profile')}>Go to Profile</Button>
      <Button onPress={() => navigation.goBack()}>Back</Button>
    </View>
  );
};

export default FeedScreen;
