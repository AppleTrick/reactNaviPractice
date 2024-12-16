import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import { RootParamList } from '../types/navigation/navigation';

const Stack = createNativeStackNavigator<RootParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        initialParams={{
          itemId: 42,
          description: '화면 생성 시 기본 설명',
        }}
      />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
