/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Form, Item, Label, Input, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';





export default class App extends Component {
  render() {
    return (
        <Container style={{ backgroundColor: '#0066FF' }}>
            <Form>
                <Item floatingLabel>
                    <Label style={{color: 'white'}}>Username</Label>
                    <Input />
                </Item>
                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                </Item>
                <Button transparent dark>
                    <Text>Forgot?</Text>
                </Button>
                <Button rounded>
                    <Text>Sign In</Text>
                </Button>
                <Button transparent dark>
                    <Text>Sign Up</Text>
                </Button>
            </Form>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
