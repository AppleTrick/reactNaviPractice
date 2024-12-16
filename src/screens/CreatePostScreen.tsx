import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { RootParamList } from '../navigation/StackNavigator';

type NavigationProp = NativeStackNavigationProp<RootParamList>;

const CreatePostScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput multiline placeholder="What's on your mind?" style={{ height: 200, padding: 10, backgroundColor: 'white' }} value={postText} onChangeText={setPostText} />
      <Button
        onPress={() => {
          navigation.popTo('Home', { post: postText });
        }}
      >
        Done
      </Button>
    </>
  );
};

export default CreatePostScreen;
