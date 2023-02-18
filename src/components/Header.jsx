import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import Tab from "./tab.jsx";
import DataHeader from '../data/optionHeader.js'

const Header = () => {
    return(
        <View>
            <TouchableWithoutFeedback onPress={()=> Alert.alert('hemos presionado el texto')}>
                    <View>
                        {DataHeader.map(r => <Tab  text={r.text} url={r.url}></Tab>)}
                    </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Header