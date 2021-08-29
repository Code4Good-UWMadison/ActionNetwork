import React, { Component } from 'react'
import { StyleSheet, Keyboard, Button, TouchableWithoutFeedback, View, Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native'
import email from 'react-native-email'
 
export default class App extends React.Component {
    render() {
        return (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <View style={styles.layout}>
                <Text style={styles.feedback}>Feedback</Text>
                <Image
                  source={require("./app/assets/images/image_OVrL.png")}
                  resizeMode="center"
                  style={styles.cleanWiscoLogo}
                >
                </Image>
                <ImageBackground
                  source={require("./app/assets/images/image_DvHN.png")}
                  resizeMode="cover"
                  style={styles.forestBackground}
                >
                  <TextInput
                    placeholder="Enter Feedback Here"
                    onChangeText={(value) => this.setState({featureRequest: value})}
                    multiline={true}
                    placeholderTextColor="white"
                    style={styles.feedbackTextInput}
                  />
                  <TouchableOpacity
                    onPress={() => this.handleEmail()}
                    style={styles.submitButton}
                  >
                    <Text style={styles.submitText}>Send feedback</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
          </TouchableWithoutFeedback>

        )
    }

    handleEmail = () => {
        //TODO: Change to clean wiscos email for prod
        const to = ['kyleverheyen@gmail.com']
        var feature;
        if (this.state.featureRequest == null){
          feature = "Enter feature request here"
        }
        else{
          feature = this.state.featureRequest
        }
        email(to, {
            subject: 'Feature Recommendation',
            //Gets the feature request that's entered in the text input
            body: feature
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  feedback: {
    flex: .5,
    color: "rgb(17, 144, 189)",
    fontSize: 39,
    textAlign: 'center',
    marginTop: '7%'
  },
  cleanWiscoLogo: {
    flex : 2,
    alignContent: 'center',
    justifyContent: 'center'
  },
  forestBackground: {
    flex: 6.6,
    justifyContent: 'center',
    width: '100%',
    height: '120%'
  },
  feedbackTextInput: {
    color: "white",
    justifyContent: 'center',
    alignContent: 'center',
    flex: .3,
    backgroundColor : "rgb(17,144,189)",
    borderWidth: 1,
    borderColor: "black",
    marginLeft: '15%',
    marginRight: '15%'
    
  },
  submitText: {
    color: "white",
    fontSize: 20,
    textAlign: "center"
  },
  submitButton: {
    flex: .1,
    backgroundColor: "rgb(70,150,52)",
    borderWidth: 1,
    borderColor: "black",
    marginTop: '10%',
    marginLeft: '15%',
    marginRight: '15%'
  }
});
  
  