import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootParamList } from '../navigation/StackNavigator';
import { Text, View } from 'react-native';
import { Button } from '@react-navigation/elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailScreenRouteProp = RouteProp<RootParamList, 'Details'>;
type NavigationProp = NativeStackNavigationProp<RootParamList>;

function DetailScreen({ route }: { route: DetailScreenRouteProp }) {
  const navigation = useNavigation<NavigationProp>();

  const { itemId, otherParam, description = '기본 설명' } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>상세 정보 화면</Text>
      <Text>항목 ID: {JSON.stringify(itemId)}</Text>
      <Text>추가 매개변수: {otherParam ?? '추가 매개변수 없음'}</Text>
      <Text>설명: {description}</Text>
      <Button
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            description: '동적으로 생성된 상세 정보',
          })
        }
      >
        다시 상세 정보로 이동
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.popTo('Home')}>Go to Home</Button>
      <Button onPress={() => navigation.popToTop()}>Go back to first screen in stack</Button>
    </View>
  );
}

export default DetailScreen;
