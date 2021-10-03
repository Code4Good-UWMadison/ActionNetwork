import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';

function NewsItem({title, summary, id}) {

    return(
        <View style={styles.container}>
            <View style={styles.itemContainer} key={id}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.summary}>{summary}</Text>
                <Pressable style={styles.pressable}>
                    <Text style={styles.takeAction}>Take Action</Text>
                </Pressable>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#E1E1E1",
        borderBottomWidth: 1,
    }, 
    itemContainer: {
        padding: 7,
    },
    title: {
        fontSize: 35,
        color: "#1e73be",
        marginBottom: 5,
    }, 
    summary: {
        fontSize: 18,
        marginTop: 5,
    },
    pressable: {
        
    },
    takeAction: {
        color: "#3c8d4e",
        fontSize: 22,
        marginTop: 15,
    },
})
export default NewsItem;