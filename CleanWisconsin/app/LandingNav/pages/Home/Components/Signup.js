import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, CheckBox, TouchableOpacity, Linking } from 'react-native';

async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;
    let url = `mailto:${to}`;

    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}

export default function Signup() {

    /*
sendEmail(
    'user@domain.com',
       'We need your feedback',
    'UserName, we need 2 minutes of your time to fill this quick survey [link]',
 { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
).then(() => {
    console.log('Your message was successfully sent!');
});
    */
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');

    const submit = () => {
        if (first === '' || last === '' || zip === '' || email === '' || !email.includes('@')) {
            return 'Please fill in all fields requested';
        }
        
        sendEmail(
            'user@domain.com',
            'We need your feedback',
            'UserName, we need 2 minutes of your time to fill this quick survey [link]',
            { cc: 'user@domain.com; user2@domain.com; userx@domain1.com' }
        ).then(() => {
            console.log('Your message was successfully sent!');
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={'First Name'}
                onChangeText={(first) => setFirst(first)}
                defaultValue={first}
            />
            <TextInput
                style={styles.input}
                placeholder={'Last Name'}
                onChangeText={(last) => setFirst(last)}
                defaultValue={last}
            />
            <TextInput
                style={styles.input}
                placeholder={'Zip Code'}
                onChangeText={(zip) => setFirst(zip)}
                defaultValue={zip}
            />
            <TextInput
                style={styles.input}
                placeholder={'Email Address'}
                onChangeText={(email) => setFirst(email)}
                defaultValue={email}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => submit()}
            >
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'lightgray',
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 8,
        paddingLeft: 8,
    },
    button: {
        height: 40,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 20,
        backgroundColor: 'lightblue',
    }
});
