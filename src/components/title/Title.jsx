import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";

const props = {
    text: String,
    color: String,
    bold: Boolean,
}

const Title = (props) => {
    return(
        <View>
            <Text style={{'font-weight': props.bold?'700':'400', color: props.color, size: '45px' }}>{props.text}</Text>
        </View>
    )
}

export default Title;