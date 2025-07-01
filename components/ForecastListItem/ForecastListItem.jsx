import { Image, View } from "react-native";

import { Txt } from "../txt/txt";

import { s } from "./ForecastListItem.style";

import ColdImage from "../../assets/images/Cold.png";
import HotImage from "../../assets/images/Hot.png";

export function ForecastListItem({image, day, date, temperature, label}) {
    return <View style={s.container}>
        <View style={s.imageContainer}>
            <Image style={s.image} source={temperature >= 35 ? HotImage : temperature <= 0 ? ColdImage : image}/>
            <Txt style={s.label}>{label}</Txt>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Txt style={s.day}>{day}</Txt>
            <Txt style={s.date}>{date}</Txt>
        </View>
        <Txt style={s.temperature}>{temperature}°</Txt>
    </View>;
}
