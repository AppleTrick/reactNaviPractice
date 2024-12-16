import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import RootStack from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
