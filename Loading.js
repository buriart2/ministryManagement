import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import * as firebase from 'firebase'
export default class Loading extends React.Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    state = {
        email: ''
    };

    componentDidMount() {
        const { navigate } = this.props.navigation;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                navigate('Main', {email: firebase.auth().currentUser.email})
            } else {
                navigate('Login')
            }
        });

    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})