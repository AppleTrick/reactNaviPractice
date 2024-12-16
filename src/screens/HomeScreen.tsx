import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { HomeScreenRouteProp, NavigationProp } from '../types/navigation/navigation';
import { useEffect } from 'react';

function HomeScreen({ route }: { route: HomeScreenRouteProp }) {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    if (route.params?.post) {
      alert('새로운 포스팅: ' + route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'params',
          })
        }
      >
        Go to Details
      </Button>
      <Button onPress={() => navigation.navigate('CreatePost')}>Create post</Button>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

export default HomeScreen;
