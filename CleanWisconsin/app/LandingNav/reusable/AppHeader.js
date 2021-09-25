import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AppHeader() {
    return (
        <View style={styles.container}>
            <Image style={{ height: 50, marginBottom: 8, }} resizeMode={'contain'} source={require('../assets/action_network.png')} />
            <Text>Clean Wisconsin</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '14%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#fff',
    },
});
