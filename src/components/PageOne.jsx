import { View, TouchableWithoutFeedback, Alert } from "react-native";

const PageOne = () => {
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

export default PageOne

const styles = {
    app: {}
}