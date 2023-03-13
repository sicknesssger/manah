import { View, TouchableWithoutFeedback, Alert } from "react-native";
import Carousel from "./Carousel";
import Paragraphs from "./paragraphs/Paragraphs";
import PurpleButton from "./purpleButton/PurpleButton";
import Title from "./title/Title";
import Vector from "./vector/Vector";

const PageOne = () => {
    const paragraphsOne = 'GRTHRBGFDGBtincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi e.';
    const paragraphsTwo = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex';
    return(
        <View style={styles.content}>
            <Carousel></Carousel>
            <div style={styles.container}>
                <View style={styles.row}>
                <View style={styles.column}>
                <Title text={'Breve historia'} color={'#000'} bold={false}></Title>
                <Paragraphs text={paragraphsOne}></Paragraphs>
                </View>
                <PurpleButton text={'SOBRE NOSOTROS'} color={'#fff'} bold={true} width={'309px'} height={'257px'}></PurpleButton>
                </View>
                <View style={styles.paragraphsTwo}>
                <Paragraphs width={'669px'} align={'end'} text={paragraphsTwo}></Paragraphs>
                </View>
                <View style={styles.row}>
                <PurpleButton text={'NUESTROS PRODUCTOS'} color={'#fff'} bold={true} width={'410px'} height={'314px'}></PurpleButton>
                <PurpleButton text={'BLOG'} color={'#fff'} bold={true} width={'410px'} height={'314px'}></PurpleButton>
                </View>
                <Vector right={true} left={false}></Vector>
                
                
            </div>
        </View>
    )
}

export default PageOne

const styles = {
    content: {
        padding: '80px',
    },
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
        /* gridTemplateArea: 'a a a b'+'c d d d'+'e e f f', */
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: '50px',
      },
    column: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    paragraphsTwo: {

    }
}