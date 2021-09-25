import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function News() {
    return (
        <View style={styles.container}>
            <Text>Press Releases</Text>
            <Text>Blog</Text>
            <Text>News</Text>
            <Text>Twitter</Text>
            <Text>Facebook</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});
