import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function ActionItem(props) {
    const openedItem = (
        <View>

        </View>
    );

    const getActionItem = () => {
        return (
            <View>1</View>
        );
    }

    return (
        <View style={styles.action_item}>
            <Text>1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    action_item_container: {
        paddingTop: 20,
    },
    action_item: {
        height: 200,
        width: 320,
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
        marginBottom: 2,
    },
});
