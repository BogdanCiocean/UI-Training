import React from 'react'; 
import { View, Text, TextInput, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native'; 
import { ThemeContext } from '../../core/theme/themeContext';
import { withTheme } from '../../core/theme/withTheme';
import { LightTheme } from '../../core/theme/lightTheme';
import { darkTheme } from '../../core/theme/darkTheme';
import { useLinkProps } from '@react-navigation/native';
import { fonts } from '../../../../ReactNativeStarter/src/core/themes';


const HomeScreen = () => {
    return(  
        <View style={styles.view1}>
               <Image soruce={'search'} style={styles.bar} ></Image>
               <Text style={styles.text1}>Find<Text style={styles.text2}>Home</Text></Text>
               <ImageBackground source={require('C:/Users/Bogdan/UI PROJECT/src/img/vector2.png')} style={styles.image}>
               
               <Text style={styles.wel}> Welcome </Text>
               <Text style={styles.textlog}>Find for enjoy findhome </Text>
               <Text style={styles.emailtxt}>Email</Text>
               <TextInput style={styles.emailsb}> search </TextInput>
               <Text style={styles.passtxt}>Password</Text>
               <TextInput style={styles.passsb}>Password</TextInput>
               <TouchableOpacity style={styles.logbut}>
               <Text style={styles.buttontxt}>Login</Text>
               </TouchableOpacity>
               <View style={styles.help}>
               <Text style={styles.createpass}>Forgot password?</Text>
               <Text style={styles.newpass}>create new password</Text>
               </View>
               
               </ImageBackground>
               
        </View>
    );
}

const styles = StyleSheet.create ({
    view1: {
        backgroundColor: '#46D0D9',
        alignItems: 'center',
        flex: 1,
        paddingTop:110,
        
        
    },
    
    bar: {
        width:10,
        height:10,
        
    },

    text1: {
        
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#143656',
        paddingTop: 10,
        paddingBottom: 25,
        
    },
    text2: {
        
        fontSize: 40,
        fontStyle: 'normal',
        color:'#ffffff',
        fontWeight: 'normal'

    },
    image: {
        
        width: 416,
        height: 661,
        
        
    },
    wel: {
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#13497B',
        marginTop: 60,
        

    },
    textlog: {
        fontSize: 20,
        fontWeight: '300',
        color: '#000000',
        textAlign: 'center',
        opacity: 0.3,
    },

    emailtxt: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginLeft: 29.5,
        marginTop: 10,
    },
    emailsb: {
        width: 357,
        height: 46,
        backgroundColor: '#fff1ff',
        marginLeft: 29.5,
        borderRadius: 10,
        shadowOffset: {width:30, height:30},
        shadowColor: '#000',
        shadowOpacity: 1.0,
        shadowRadius:2,
        elevation: 2,
    },
    passtxt: {
        marginTop: 10,
        marginLeft:29.5,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    
    passsb: {
        width: 357,
        height:46,
        backgroundColor: '#fff1ff',
        marginLeft: 29.5,
        borderRadius: 10,
        shadowOffset: {width:30, height:30},
        shadowColor: '#000',
        shadowOpacity: 1.0,
        shadowRadius:2,
        elevation: 2,
        
    },

    logbut:{
        backgroundColor: '#13497B',
        width: 357,
        height: 55,
        borderRadius: 10,
        marginLeft: 29.5,
        marginTop: 40,
        justifyContent: 'center'
        
    },
    
    buttontxt:{
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
    },

    help: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 29.5,
        marginRight: 29.5,
        marginTop: 30,
    },

    createpass: {
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 17,
        opacity: 0.8,

    },

    newpass: {
        
        color:'#13497B',
        fontSize: 14,
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: 17
    }


});

export default HomeScreen