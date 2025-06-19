import { TextInput, View } from 'react-native';
import { s } from './Searchbar.style';

export function Searchbar({onSubmit}) {
    return <View>
        <TextInput onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)} style={s.input} placeholder="Rechercher une ville..."/>
    </View>
}
