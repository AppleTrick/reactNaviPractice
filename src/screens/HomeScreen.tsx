import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootParamList } from '../navigation/StackNavigator';

type NavigationProp = NativeStackNavigationProp<RootParamList>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

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
    </View>
  );
}

export default HomeScreen;
