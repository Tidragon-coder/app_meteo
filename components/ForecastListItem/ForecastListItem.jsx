import { Image, View } from "react-native";

import { Txt } from "../txt/txt";

import { s } from "./ForecastListItem.style";

import ColdImage from "../../assets/images/Cold.png";
import HotImage from "../../assets/images/Hot.png";

export function ForecastListItem({image, day, date, temperature}) {
    return <View style={s.container}>
        <Image style={s.image} source={temperature >= 35 ? HotImage : temperature <= 0 ? ColdImage : image}/>
        <Txt style={s.day}>{day}</Txt>
        <Txt style={s.date}>{date}</Txt>
        <Txt style={s.temperature}>{temperature}°</Txt>
    </View>;
}
