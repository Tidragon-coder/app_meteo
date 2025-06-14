import { Image, View } from "react-native-web";
import { Txt } from "../txt/txt";

import { s } from "./MeteoBasic.style";

export function MeteoBasic({temperature, city, interpretation }) {
    return(
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>

            <Txt>{city}</Txt>

            <Txt style={s.weather_label}> {interpretation.label}</Txt>

            <View style={s.temperature_box}>
                <Txt style={s.temperature}>{temperature}°</Txt>
                <Image style={s.image} source={interpretation.image}/>
            </View>
        </>
    )
}