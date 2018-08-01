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

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBlEOlvSYnyxjd-LzCCz3nFs0YusTDraE8",
        authDomain: "ministrymanagement-f5464.firebaseapp.com",
        databaseURL: "https://ministrymanagement-f5464.firebaseio.com",
        storageBucket: "ministrymanagement-f5464.appspot.com"
    });
}


export default class SignUp extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null
    }

    render() {
        return (

            <Container style={styles.container}>
                <Form style={styles.form}>
                    <Item stackedLabel style={styles.name}>
                        <Label style={{color: 'white'}}>NAME</Label>
                        <Input onChangeText={name => this.setState({ name })} style={{color: 'white'}}/>
                    </Item>
                    <Item stackedLabel style={styles.email}>
                        <Label style={{color: 'white'}}>EMAIL</Label>
                        <Input onChangeText={email => this.setState({ email })} style={{color: 'white'}}/>
                    </Item>
                    <Item stackedLabel style={styles.password}>
                        <Label style={{color: 'white'}}>PASSWORD</Label>
                        <Input onChangeText={password => this.setState({ password })} style={{color: 'white'}}/>
                    </Item>
                    <Button transparent dark style={{marginLeft: '30%', marginRight: '30%'}}>
                        <Text style={{color: 'white'}}>SIGN UP</Text>
                    </Button>
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
    name: {
        marginLeft: '10%',
        marginRight: '10%',
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
