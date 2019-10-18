import React, { Component } from 'react';
import { Text, ScrollView, FlatList, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Title, Card, CardItem, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
type Props = {};
class HomeScreen extends Component<Props>{



  constructor(props) {
    super(props);
    this.state = {
      textusuario: this.props.navigation.state.params.textusuario,
      textcontraseña: this.props.navigation.state.params.textcontraseña,
      data: this.props.navigation.state.params.data,
      muerto: false
    };
  }




  static navigationOptions = {
    header: null
  }
  render() {
    let movies = this.state.data.map((val, key) => {
      return <View key={key} >
        <Card>
          <CardItem >
            <Col size={50}>
              <Text>No.{val.id} {val.title}</Text>
            </Col>
            <Col size={50}>
              {this.state.muerto ? (
                <Button danger>
                  <Col></Col>
                  <Col size={10}></Col>
                  <Col size={80} style={{ alignItems: 'center', }} >
                    <Row></Row>
                    <Text >Levantar Servicio</Text>
                    <Row></Row>
                  </Col>
                  <Col size={10} ></Col>
                </Button>
              ) : (

                  <Button success>
                    <Col></Col>
                    <Col size={10}></Col>
                    <Col size={80} style={{ alignItems: 'center', }} >
                      <Row></Row>
                      <Text >Servicio Correcto</Text>
                      <Row></Row>
                    </Col>
                    <Col size={10} ></Col>
                  </Button>
                )}
            </Col>

          </CardItem>
          <CardItem button onPress={() => alert("Servicio levantado")}>

            <Col size={5}>
            </Col>
            <Col size={90} style={{ alignItems: 'center', }}  >
              <Text>
                Descripcion o año de lanzamiento
                </Text>
            </Col>
            <Col size={5}>
            </Col>
          </CardItem>
          <CardItem >
            <Text>{val.releaseYear}</Text>
          </CardItem>
        </Card>
      </View>
    });
    console.log("Esto trae el estado de data");
    console.log(this.state.data);
    console.log("Esto trae el estado de Usuario");
    console.log(this.state.textusuario);

    return (

      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Hola {this.state.textusuario}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          {movies}
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;