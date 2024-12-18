import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import { RootParamList } from '../types/navigation/navigation';
import ProfileScreen from '../screens/ProfileScreen';
import LogoTitleSample from '../screens/LogoTitleSampleScreen';
import LogoTitle from '../components/LogoTitle';
import BottomTabs from './BottomNavigator';
import { useState } from 'react';

const Stack = createNativeStackNavigator<RootParamList>();

function RootStack() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#1e7ef4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="BottomTab" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        initialParams={{
          itemId: 42,
          description: '화면 생성 시 기본 설명',
        }}
        options={{
          title: '디테일 화면',
        }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: '포스트 생성',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          title: route.params?.name,
        })}
      />
      <Stack.Screen
        name="LogoTitleSample"
        component={LogoTitleSample}
        options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerBackTitle: 'Custom Back',
          headerTintColor: '#8f3131',
          // headerRight: () => <Button color="#ffffff" title="info" onPress={() => alert('This is a button!')} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
