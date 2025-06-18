import { Theme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';

const navTheme: Theme = {
  dark: false,
  colors: {
    background: 'transparent',
    card: 'transparent',
    text: '#000000',
    border: 'transparent',
    notification: 'transparent',
    primary: '#000000'
  },
  fonts: {
    regular: {
      fontFamily: '',
      fontWeight: '400',
    },
    medium: {
      fontFamily: '',
      fontWeight: '500',
    },
    bold: {
      fontFamily: '',
      fontWeight: '700',
    },
    heavy: {
      fontFamily: '',
      fontWeight: '900',
    }
  }
};

export default function RootLayout() {
  return (
    <ThemeProvider value={navTheme}>
      <Slot />
    </ThemeProvider>
  );
}
