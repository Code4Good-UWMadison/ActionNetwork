import React from 'react';
import { View, Text } from 'react-native';

export default function Contact() {
    return (
        <View>
            <View style={styles.signup_form_container}>
                <Signup />
            </View>
            <Text>Connect with us</Text>
            <Text>Contact info</Text>
            <Text>Subscribe to blog alerts</Text>
            <Text>Send a message</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    signup_form_container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
});
