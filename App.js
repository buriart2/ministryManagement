/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View
} from 'react-native';
import { Container, Header, Form, Item, Label, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';





export default class App extends Component {
  render() {
    return (

        <Container style={styles.container}>
            <Form style={styles.form}>
                <Item floatingLabel style={styles.email}>
                    <Label style={{color: 'white'}}>EMAIL</Label>
                    <Input style={{color: 'white'}}/>
                </Item>
                <Item floatingLabel style={styles.password}>
                    <Label style={{color: 'white'}}>PASSWORD</Label>
                    <Input style={{color: 'white'}}/>
                </Item>
                <Button transparent dark style={{marginLeft: '70%'}}>
                    <Text style={{color: 'white'}}>Forgot?</Text>
                </Button>
                <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Button rounded style={{backgroundColor: 'white'}}>
                        <Text style={{color: '#0066FF'}}>Sign In</Text>
                    </Button>
                    <Button transparent dark>
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
