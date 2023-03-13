import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";
import React, { useEffect, useState } from "react";

const props = {
    text: String,
    url: String,
}

const tab = (props) => {
    const [stylehover, setStylehover] = useState(styles.tabs);
    const setStyles = (styles) => {
        setStylehover(styles);
      };

    return(
        <View>
            <TouchableWithoutFeedback onPress={()=> Alert.alert('hemos presionado el texto')}>
                <View style={[stylehover]} onPress={()=> Alert.alert('hemos presionado el texto', props.url)}
                onMouseEnter={
                    () => {
                      setStyles(styles.tabs, styles.hoverStyle);
                    }
                  }
                  onMouseLeave={
                    () => {
                      setStyles(styles.tabs)
                    }
                  }
                >
                    <Text>{props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default tab;

const styles = {
    tabs: {
        color: '#fff',
        fontZise: '15px',
    },
    hoverStyle: {
        backgroundColor: 'purple',
    }
}