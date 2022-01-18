/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';

const CommonButton = ({ children, ...rest }) => {
    return (
        <TouchableOpacity activeOpacity={0.75} style={styles.buttoncontainerstyle} {...rest}>
            <Text style={styles.buttontextstyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default CommonButton;

const styles = StyleSheet.create({

    buttoncontainerstyle: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#F47325',
        height: 50,
        width: 326,
        borderRadius: 10
    },

    buttontextstyle: {
        fontSize: 18,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
      
    }

});
