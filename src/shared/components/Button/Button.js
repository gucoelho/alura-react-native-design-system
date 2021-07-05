import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { ACCENT, FONT_FAMILY_SEMI_BOLD, FONT_SIZE_MEDIUM, FONT_SIZE_SMALL, WHITE } from '../../../styles/styles';

const Button = ({label, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.background}>
            <Text style={styles.text}>
                {label}
            </Text>
        </View>
    </TouchableOpacity>
)
export default Button;

const styles = StyleSheet.create({
    background: {
        backgroundColor: ACCENT,
        padding: 20,
        borderRadius: 6
    },
    text: {
        color: WHITE,
        fontSize: FONT_SIZE_MEDIUM,
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        textAlign: 'center'
    }
})
