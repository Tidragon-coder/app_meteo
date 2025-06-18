import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Forecast } from '../../pages/Forecast/Forecast';
import { Home } from '../../pages/Home/Home';

import { useFonts } from 'expo-font';
import AlataRegular from '../../assets/fonts/Alata-Regular.ttf';


const Stack = createNativeStackNavigator();
export default function App() {
  const [isFontsLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  console.log('Fonts loaded:', isFontsLoaded);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }} initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Forecast" component={Forecast} />
    </Stack.Navigator>
  );
}
