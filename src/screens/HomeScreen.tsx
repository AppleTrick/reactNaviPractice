import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
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
      <Button
        onPress={() =>
          navigation.navigate('Profile', {
            name: 'Jane',
          })
        }
      >
        Go to Profile
      </Button>
      <Button onPress={() => navigation.setOptions({ title: '타이틀 제목 바꾸기' })}> 타이틀 제목 바꾸기</Button>
      <Button onPress={() => navigation.navigate('LogoTitleSample')}>로고타이틀 스크린으로가기</Button>
      <Image style={{ width: 50, height: 50 }} source={require('../../assets/logo.png')} />
    </View>
  );
}

export default HomeScreen;
