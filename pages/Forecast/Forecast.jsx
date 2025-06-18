import { Container } from "../../components/Container/Container";
import { Txt } from "../../components/txt/txt";
import { s } from "./Forecast.style.js";

import { useRoute } from "@react-navigation/native";


export function Forecast({}) {

    const { params } = useRoute()

console.log("Forecast params", params)
    return (
        <Container>
            <Txt style={s.title}>Prévisions</Txt>
        </Container>
    )
}