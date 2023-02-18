import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import Header from "./Header";
import Logo from "./Logo";

const Main = () => {
    return(
        <View>
            <Logo></Logo>
            <Header></Header>
        </View>
    )
}

export default Main