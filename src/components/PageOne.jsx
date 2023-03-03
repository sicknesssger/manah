import { View, TouchableWithoutFeedback, Alert } from "react-native";
import Carousel from "./Carousel";
import Title from "./title/Title";

const PageOne = () => {
    return(
        <View>
            <Carousel></Carousel>
            <div>
                <Title text={'Breve historia'} color={'#000'} bold={false}></Title>
                <p></p>
                <image></image>
            </div>
        </View>
    )
}

export default PageOne

const styles = {
    app: {}
}