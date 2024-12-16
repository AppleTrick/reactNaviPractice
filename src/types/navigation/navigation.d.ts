import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootParamList = {
  Home?: { post: string };
  Details?: { itemId: number; otherParam?: string; description?: string };
  CreatePost: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootParamList>;

export type DetailScreenRouteProp = RouteProp<RootParamList, 'Details'>;
export type HomeScreenRouteProp = RouteProp<RootParamList, 'Home'>;
