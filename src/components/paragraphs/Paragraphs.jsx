import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";

const props = {
    text: String,
    color: String,
    bold: Boolean,
    align: String,
    width: String,
}

const Paragraphs = (props) => {
    return(
        <View style={{width: props.width, alignSelf: props.align}}>
            <Text style={{fontWeight: props.bold?'700':'400', color: props.color, fontSize: '15px' }}>{props.text}</Text>
        </View>
    )
}

export default Paragraphs;