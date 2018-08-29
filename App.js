import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
// import the different screens

//import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import SignUp from './SignUp'
import Forgot from './Forgot'
import Loading from './Loading'

// create our app's navigation stack
const App = StackNavigator(
    {
        Loading: { screen: Loading },
        Login: { screen: Login },
        Main: { screen: Main },
        SignUp: { screen: SignUp },
        Forgot: { screen: Forgot },
    },
    {
        headerMode: 'screen'
    }
);
export default App