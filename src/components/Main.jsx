import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import Header from "./Header";
import Logo from "./Logo";
import PageOne from "./PageOne";

const Main = () => {
    return(
        <View>
            <Logo></Logo>
            <Header></Header>
            <PageOne></PageOne>
        </View>
    )
}

export default Main