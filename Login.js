
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View
} from 'react-native';
import { Container, Header, Form, Item, Label, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import * as firebase from 'firebase'
import Main from './Main.js';


firebase.initializeApp({
    apiKey: "AIzaSyBlEOlvSYnyxjd-LzCCz3nFs0YusTDraE8",
    authDomain: "ministrymanagement-f5464.firebaseapp.com",
    databaseURL: "https://ministrymanagement-f5464.firebaseio.com",
    storageBucket: "ministrymanagement-f5464.appspot.com"
});


export default class App extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main', {email: firebase.auth().currentUser.email}))
            .catch((error) => {
                alert(error);

            });

    }
    render() {
        return (

            <Container style={styles.container}>
                <Form style={styles.form}>
                    <Item floatingLabel style={styles.email}>
                        <Label style={{color: 'white'}}>EMAIL</Label>
                        <Input onChangeText={email => this.setState({ email })} style={{color: 'white'}}/>
                    </Item>
                    <Item floatingLabel style={styles.password}>
                        <Label style={{color: 'white'}}>PASSWORD</Label>
                        <Input onChangeText={password => this.setState({ password })} style={{color: 'white'}}/>
                    </Item>
                    <Button transparent dark style={{marginLeft: '70%'}}>
                        <Text style={{color: 'white'}}>Forgot?</Text>
                    </Button>
                    <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <Button rounded onPress={this.handleLogin} style={{backgroundColor: 'white'}}>
                            <Text style={{color: '#0066FF'}}>Sign In</Text>
                        </Button>
                        <Button transparent dark onPress={this.handleLogin}>
                            <Text style={{color: 'white'}}>Sign Up</Text>
                        </Button>

                    </View>

                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0066FF',
    },
    form: {
        marginTop: '50%',
    },
    email: {
        marginLeft: '10%',
        marginRight: '10%',
    },
    password: {
        marginLeft: '10%',
        marginRight: '10%',
    },
});
