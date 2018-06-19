import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
// import the different screens

//import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
// create our app's navigation stack
const App = StackNavigator(
    {
        Login: { screen: Login },
        Main: { screen: Main },
    },
    {
        headerMode: 'screen'
    }
);
export default App