import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    View
} from 'react-native';
import { Container, Header, Form, Item, Label, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Toast } from 'native-base';
import * as firebase from 'firebase'

import Main from './Main.js';


export default class Forgot extends Component {

    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    state = {
        email: '',
        errorMessage: null
    };


    forgotPass = () => {
        const { email } = this.state;
        firebase.auth().sendPasswordResetEmail(email).then(function() {
            alert("Check your email to reset your password.");
        }).catch(function(error) {
            alert(error);
        });
    };



    render() {
        return (

            <Container style={styles.container}>
                <Form style={styles.form}>
                    <Item stackedLabel style={styles.email}>
                        <Label style={{color: 'white'}}>EMAIL</Label>
                        <Input onChangeText={email => this.setState({ email })} style={{color: 'white'}}/>
                    </Item>
                    <Button block transparent dark style={{marginLeft: '30%', marginRight: '30%', backgroundColor: 'white', marginTop: 50}} onPress={() => this.forgotPass()}>
                        <Text style={{color: '#0066FF'}}>FORGOT</Text>
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
    email: {
        marginLeft: '10%',
        marginRight: '10%',
    },
});
