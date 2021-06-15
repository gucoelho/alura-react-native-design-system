import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    image: { height: 64 },
    containerItem: {
        height: 168,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    text: {
        marginTop: 8,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        color: '#848486'
    },
});

const Item = (item) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push("DetailedItem", {item})}>
            <Image source={item.imagem} style={styles.image} resizeMode="contain" />
            <Text>{item.titulo}</Text>
        </TouchableOpacity>
    );
}


export default Item;