import React from 'react';
import Header from './components/Header';
import  { DATA } from '../../utils/data'
import { FlatList, View, StyleSheet } from 'react-native';
import Item from  './components/Item'

const styles = StyleSheet.create({
    containerList: {
        marginHorizontal: 24
    }
});

const OrderList = () => (
    <View style={styles.containerList}>
        <FlatList numColumns={2} 
            data={DATA} 
            renderItem={({ item }) => <Item {...item} />}
            keyExtractor={item => item.id}
            ListHeaderComponent={<Header />} />
    </View>
)


export default OrderList;