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
    };

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    validatePassword = (password) => {
        var reg = /(?=.*[A-Z])(?=.*[0-9])[#@£$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{8,}/;
        return reg.test(password);
    };

    validation = () => {
      const { name, email, password } = this.state;
      if(name == '') {
          alert("Please enter your full name")
      } else {
          if(!this.validateEmail(email)) {
              alert("Please enter a valid email");
          } else {
              if(!this.validatePassword(password)) {
                  alert("Please enter a password with at least 8 characters, one uppercase letter, and one number");
              } else {


                  //add the user email and password to firebase
                  firebase
                      .auth()
                      .createUserWithEmailAndPassword(this.state.email, this.state.password)
                      .then(() => this.props.navigation.navigate('Main', {email: firebase.auth().currentUser.email}))
                      .catch(error => this.setState({ errorMessage: error.message }));

                  // add the user to the database
                  firebase.database().ref('users/' + name).set({
                      name: name,
                      email: email,
                      photo: '',
                  });

              }
          }
      }
    };



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
                    <Button block transparent dark style={{marginLeft: '30%', marginRight: '30%', backgroundColor: 'white', marginTop: 50}} onPress={() => this.validation()}>
                        <Text style={{color: '#0066FF'}}>CREATE ACCOUNT</Text>
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
