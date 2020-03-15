import React from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import {Container} from 'native-base';
import AppHeader from './Components/AppHeader';
import ContentRow from './Components/ContentRow';
import ContentSwipe from './Components/ContentSwipe';
import AppFooter from './Components/AppFooter';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{backgroundColor: 'black'}}>
        <StatusBar hidden />
        <AppHeader />
        <ScrollView>
          <ContentSwipe />
          <ContentRow rowTitle="Populares" />
          <ContentRow rowTitle="filmes top" genre="28" />
          <ContentRow rowTitle="filmes bosta" />
        </ScrollView>

        <AppFooter />
      </Container>
    );
  }
}
