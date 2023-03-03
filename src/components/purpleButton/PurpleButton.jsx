import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";

const props = {
    text: String,
    color: String,
    bold: Boolean,
    width: String,
    height: String,
}

const PurpleButton = (props) => {
    return(
        <View>
            <div style={{width: props.width, height: props.height, backgroundColor: '#3F2785', display: 'grid'}}>
                <Text style={{fontWeight: props.bold?'700':'400', color: props.color, fontSize: '45px', justifySelf: 'center', alignSelf: 'center', textAlign: 'center'}}>{props.text}</Text>
            </div>
        </View>
    )
}

export default PurpleButton;