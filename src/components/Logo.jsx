import { View, TouchableWithoutFeedback, Alert } from "react-native";

const Logo = () => {
    return(
        <View>
            <TouchableWithoutFeedback onPress={()=> Alert.alert('hemos presionado el texto')}>
                    <View>
                        <image></image>
                    </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Logo