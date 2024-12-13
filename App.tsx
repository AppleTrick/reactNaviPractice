import { Button } from '@react-navigation/elements';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

type RootParamList = {
  Home: undefined;
  Details?: { itemId: number; otherParam?: string };
};

type NavigationProp = NativeStackNavigationProp<RootParamList>;
type DetailsScreenRouteProp = RouteProp<RootParamList, 'Details'>;

function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: '다른 파라미터',
          })
        }
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }: { route: DetailsScreenRouteProp }) {
  const navigation = useNavigation<NavigationProp>();

  const { itemId, otherParam } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {otherParam ?? '추가 매개변수 없음'}</Text>
      <Button
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      >
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>Go back to first screen in stack</Button>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
