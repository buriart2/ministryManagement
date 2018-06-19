import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'

export default class Main extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props)

        this.state = {
            email: this.props.navigation.state.params.email
        };
    }



    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Hi {this.state.email}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})