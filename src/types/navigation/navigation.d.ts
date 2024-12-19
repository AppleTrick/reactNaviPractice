import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// StackProps 들 정리
export type RootParamList = {
  Home?: { post: string };
  Details?: { itemId: number; otherParam?: string; description?: string };
  CreatePost: undefined;
  Profile?: { name: string };
  LogoTitleSample: undefined;
  BottomTab: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Help: undefined;
  Invite: undefined;
};

// useNavigation 에 사용하는 타입
export type NavigationProp = NativeStackNavigationProp<RootParamList>;

export type DetailScreenRouteProp = RouteProp<RootParamList, 'Details'>;
export type HomeScreenRouteProp = RouteProp<RootParamList, 'Home'>;
export type ProfileScreenRouteProp = RouteProp<RootParamList, 'Profile'>;
