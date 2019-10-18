import React, { Component } from 'react';
import { Text, TextInput, ActivityIndicator, View,StyleSheet } from 'react-native';
import { Form, Item, Input, Button, Label, Content, Container, Header, Left, Body, Right, Title, Toast } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.HacerFetch = this.HacerFetch.bind(this);

    this.state = {
      textusuario: '',
      textcontraseña: '',
      isLoading: true,
      data: null,
    };
  }

  HacerFetch() {
    console.log("Entró a la funcion")
    console.log("usuario: " + this.state.textusuario);
    console.log("contraseña: " + this.state.textcontraseña);


    this.props.navigation.navigate('Home', {data:this.state.data,textusuario:this.state.textusuario})


    //Aquí le paso los estados a la pantalla de HOME


    console.log("Fin de la funcion")
  }


  static navigationOptions = {
    header: null
  }


  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.movies,
          isLoading: false
        })
        console.log("Esto trae el json");
        console.log(this.state.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      item:{
        flex:1
      }
    });

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      

      return (
        <Grid>
          <Header>
            <Left />
            <Body>
              <Title>Bienvenido</Title>
            </Body>
            <Right />
          </Header>
          <Row size={20} >
            <Col size={10}></Col>
            <Col size={80} style={{ alignItems: 'center', }} >
              <Row></Row>

              <Row></Row>
            </Col>
            <Col size={10} ></Col>

          </Row>
          <Row size={40}>
            <Container>

              <Content>
                <Form>
                  <TextInput
                    placeholder="Ingresa Aquí el usuario"
                    onChangeText={(textusuario) => this.setState({ textusuario })}
                    value={this.state.text}
                  />
                  <TextInput
                    placeholder="Ingresa aquí la contraseña"
                    onChangeText={(textcontraseña) => this.setState({ textcontraseña })}
                    value={this.state.textcontraseña}
                  />
                </Form>
              </Content>
            </Container>
          </Row>
          <Row size={40} >
            <Col ></Col>
            <Col>
              <Row size={50} ></Row>
              <Button onPress={this.HacerFetch.bind(this)} bordered dark>
                <Col></Col>
                <Col size={10}></Col>
                <Col size={80} style={{ alignItems: 'center', }} >
                  <Row></Row>
                  <Text >Iniciar Sesion</Text>
                  <Row></Row>
                </Col>
                <Col size={10} ></Col>
              </Button>
              <Row size={50} ></Row>
            </Col>
            <Col ></Col>
          </Row>
        </Grid>
      );
    }
  }
}


export default LoginScreen;