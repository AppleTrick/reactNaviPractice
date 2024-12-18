import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} options={{ headerTitle: '피드' }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerTitle: '메세지?' }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
