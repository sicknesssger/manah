import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";

const props = {
    text: String,
    url: String,
}

const tab = (props) => {
    return(
        <View>
            <TouchableWithoutFeedback onPress={()=> Alert.alert('hemos presionado el texto')}>
                <View onPress={()=> Alert.alert('hemos presionado el texto', props.url)}>
                    <Text>{props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default tab