import React, {Component} from 'react';
import APICalls from './APICalls'
import {
    Image,
    Button,
    Alert,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  
  import Fetch from './Fetch'

class Callback extends Component {
   
    
    render(){
        return(
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.buttons}
                
                >
                    <Text style={styles.text}> BTC </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttons}
                >
                    <Text style={styles.text}> ETH </Text>
                </TouchableOpacity>
                </View>

                <View style={styles.getStartedContainer}>
            
                <APICalls></APICalls>

               

                </View>

            </ScrollView>
            </View>


        )
    }

}

export default Callback

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      backgroundColor: '#1b262c',
    },
    buttons: {
      alignItems: 'center',
      backgroundColor: '#3282b8',
      padding: 10,
      margin: 10,
      borderRadius: 5
    },
    text: {
      color: '#bbe1fa'
    },
    priceText: {
      color: '#bbe1fa',
      fontSize: 25
    },
    buttonContainer: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      color:'white'
    },
    developmentModeText: {
      marginBottom: 20,
      color: 'rgba(0,0,0,0.4)',
      fontSize: 14,
      lineHeight: 19,
      textAlign: 'center',
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    welcomeImage: {
      width: 100,
      height: 80,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightText: {
      color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    navigationFilename: {
      marginTop: 5,
    },
    helpContainer: {
      marginTop: 15,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });


