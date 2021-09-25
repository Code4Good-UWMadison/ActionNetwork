import React, { useState, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, Animated, Image, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

/*
import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import Donate from '../pages/Donate/Donate';
import Contact from '../pages/Contact/Contact';
*/

import Home from '../pages/Home/Home';
import News from '../pages/News/News';

export default function Navigation(props) {

    // make is selected the icon and the text for the page whereas the other options are just their icon
    const getOptionStyle = (index) => (index === props.index) ? styles.option_selected : styles.option;
    // style={getOptionStyle(option.index)}
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    const buttonOptions = [
        { name: 'home', text: 'Home', },
        { name: 'newspaper', text: 'News', },
        { name: 'envelope', text: 'Contact', },
        { name: 'donate', text: 'Donate', }
    ];

    const getButton = (index) => (index === props.index) ? (
        <Animated.View style={(index === 3) ? styles.button_content_selected_donate : styles.button_content_selected}>
            <Icon name={buttonOptions[index].name} size={24} color="#000" style={styles.icon_selected} />
            <Text style={styles.button_text}>{buttonOptions[index].text}</Text>
        </Animated.View>
    ) : (
        <Animated.View style={styles.button_content}>
            <Icon name={buttonOptions[index].name} size={24} color={(index === 3) ? 'lightblue' : "#000"} />
        </Animated.View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={getOptionStyle(0)}
                onPress={() => { props.setPage(<Home />); props.setIndex(0); }}
            >
                {getButton(0)}
            </TouchableOpacity>
            <TouchableOpacity
                style={getOptionStyle(1)}
                onPress={() => { props.setPage(<News />); props.setIndex(1); }}
            >
                {getButton(1)}
            </TouchableOpacity>
            <TouchableOpacity
                style={getOptionStyle(2)}
                onPress={() => { props.setPage('<Contact/>'); props.setIndex(2); }}
            >
                {getButton(2)}
            </TouchableOpacity>
            <TouchableOpacity
                style={getOptionStyle(3)}
                onPress={() => { props.setPage('<Donate/>'); props.setIndex(3); }}
            >
                {getButton(3)}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        // borderTopWidth: 2,
        // borderTopColor: 'lightgray',
    },
    option_selected: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    option: {
        flex: 1,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_content_selected: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 20,
        backgroundColor: 'lightgray',
    },
    button_content_selected_donate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 20,
        backgroundColor: 'lightblue',
    },
    button_content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon_selected: {
        marginRight: 8,
    },
    button_text: {
        fontSize: 12,
        fontWeight: 'bold',
    }
});
