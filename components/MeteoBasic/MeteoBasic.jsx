import { Image, TouchableOpacity, View } from "react-native-web";
import { Txt } from "../txt/txt";

import { s } from "./MeteoBasic.style";

import { Clock } from "../Clock/Clock";

export function MeteoBasic({onPress,temperature, city, interpretation }) {
    return(
        <>
            <View style={s.clock}>
                <Txt>
                    <Clock/>
                </Txt>
            </View>

            <Txt>{city}</Txt>

            <Txt style={s.weather_label}> {interpretation.label}</Txt>

            <View style={s.temperature_box}>
                <TouchableOpacity onPress={onPress}> 
                    <Txt style={s.temperature}>{temperature}°</Txt> 
                </TouchableOpacity>
                <Image style={s.image} source={interpretation.image}/>
            </View>
        </>
    )
}