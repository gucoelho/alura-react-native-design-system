import React from "react"
import { View, StyleSheet, Text } from 'react-native';

export const DetailedItem = ({route}) => {
    const { item } = route.params

    return (<View><Text>{item.titulo}</Text></View>)
} 