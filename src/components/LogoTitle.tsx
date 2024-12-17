import { Image } from 'react-native';

interface LogoTitleProps {
  tintColor?: string; // React Navigation이 전달하는 tintColor
  children?: string; // 기타 props (header title 값)
}

const LogoTitle: React.FC<LogoTitleProps> = ({ tintColor }) => {
  return <Image style={{ width: 50, height: 50 }} source={require('../../assets/logo.png')} />;
};

export default LogoTitle;
