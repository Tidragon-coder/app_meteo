import { s } from './Container.style';

import { ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export function Container({ children }) {
    return (
        <ImageBackground 
            source={require('../../assets/images/background.jpg')} 
            style={s.img_background} 
            resizeMode="cover" 
            imageStyle={s.img}
        >
            <SafeAreaProvider>
                <SafeAreaView style={s.container}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    )
}
