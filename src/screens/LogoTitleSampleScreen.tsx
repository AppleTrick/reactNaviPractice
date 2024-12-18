import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationProp } from '../types/navigation/navigation';

const LogoTitleSample = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="upCount" color="#ffffff" onPress={() => setCount((prev) => prev + 1)} />,
      headerBackTitleStyle: { fontSize: 30 },
    });
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>LogoTitleSample</Text>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default LogoTitleSample;
