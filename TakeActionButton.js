import React from 'react';
import { StyleSheet, TouchableOpacity, View , Text} from 'react-native';
import email from 'react-native-email';

class TakeActionButton extends React.Component {

    handlePress = () => {
        const to = ["enter@emailhere.com"]
        email(to, { 
            cc: [],
            bcc: [], 
            subject: "Take Action",
            body: "First Name\:\nLast Name\:\nAddress\:\nCity\:\nState\:\nZIP Code\:\nEmail Opt-in\:\n", 
        }).catch(console.error);
    }
    
    render() {
        return(
            <View style = {styles.container}>
                <TouchableOpacity onPress = {this.handlePress}>
                    <View style = {styles.border}/>
                    <Text style = {styles.textStyle}>Take Action</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {      
    backgroundColor: "#0281b2",
    borderWidth: 1, 
    borderRadius: 20,
    borderColor: '#0281b2',
    width: '80%',
    padding: 5,
    fontSize: 50,
    textAlign: "center",
    overflow: "hidden",
    color: "white",
  }
});

export default TakeActionButton;
