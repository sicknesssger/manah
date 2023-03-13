import React from "react";
import { View, Text, TouchableWithoutFeedback, Alert } from "react-native";

const props = {
    right: Boolean,
    left: Boolean,
}

const Vector = (props) => {
    return(
        <View>
            {/* <View
                style={[
                styles.box,
                {
                    transform: [{skew: '45deg'}],
                },
                ]}>
            <Text style={styles.text}>SkewX by 45 deg</Text>
         </View> */}
            <View style={[styles.rights, props.right?'':styles.none]}>
            <View
                style={[
                styles.box,
                {
                    transform: [{skew: '45deg'}],
                    right: '-15%',
                    backgroundColor: '#009DB5',
                },
                ]}>
            </View>
            </View>
            <View style={[styles.lefts, props.left?'':styles.none]}>
            <View
                style={[
                styles.box,
                {
                    transform: [{skew: '-45deg'}],
                    right: '13%',
                    backgroundColor: '#009DB5',
                },
                ]}>
            </View>
            </View>
        </View>
    )
}

export default Vector;

const styles = {
    rights: {
        width: '245px',
        height: '62px',
        backgroundColor: '#009DB5',
        none: props.right?'block':'none',
    },
    lefts: {
        width: '245px',
        height: '62px',
        position: 'relative',
        left: '9%',
        backgroundColor: '#009DB5',
    },
    box: {
        width: '245px',
        height: '62px',
        backgrounColor: '#009DB5',
    },
    none: {
        display: 'none',
    }
    /* azul: {
        width: 80%;
        height: 40px;
        display: block;
        position: absolute;
        z-index: 2;
      },
      
      azul::after {
        content: "";
        position: absolute;
        right: -20px;
        width: 120%;
        height: 40px;
        background: rgba(0, 125, 204, .95);
        
      } */
}