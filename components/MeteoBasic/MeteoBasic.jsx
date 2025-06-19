import { Image, TouchableOpacity, View } from "react-native";
import { Txt } from "../txt/txt";

import { s } from "./MeteoBasic.style";

import { Clock } from "../Clock/Clock";

export function MeteoBasic({onPress,temperature, city, interpretation }) {
    return(
        <View>
            <View style={s.clock}>
                <Txt>
                    <Clock/>
                </Txt>
            </View> 

            <Txt style={s.city}>{city}</Txt>

            <Txt style={s.weather_label}> {interpretation.label}</Txt>

            <View style={s.temperature_box}>
                <TouchableOpacity onPress={onPress}> 
                    <Txt style={s.temperature}>{temperature}°</Txt> 
                </TouchableOpacity>
                <Image style={s.image} source={interpretation.image}/>
            </View>
        </View>
    )
}
