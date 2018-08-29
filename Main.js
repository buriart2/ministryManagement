import React from 'react'
import { StyleSheet, Platform, Image, View } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


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

// <View style={styles.container}>
// <Text>
// Hi {this.state.email}
// </Text>
// </View>

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right/>
                </Header>
            </Container>

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