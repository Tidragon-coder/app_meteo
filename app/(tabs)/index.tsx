import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home } from '../../pages/Home/Home';

import { useFonts } from 'expo-font';
import AlataRegular from '../../assets/fonts/Alata-Regular.ttf';

import { s } from './index.style';

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  console.log('Fonts loaded:', isFontsLoaded);
  return (
  <ImageBackground source={require('../../assets/images/background.jpg')} style={s.img_background} resizeMode="cover" imageStyle={s.img}>
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        {
          isFontsLoaded ? <Home /> : null
        }
      </SafeAreaView>
    </SafeAreaProvider>
  </ImageBackground>
  );
}
