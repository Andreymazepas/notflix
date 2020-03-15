import React from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';
import {Container} from 'native-base';
import AppHeader from './Components/AppHeader';
import ContentRow from './Components/ContentRow';
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
        <ContentRow
          fetchURL="https://api.themoviedb.org/3/discover/movie?api_key=dc0c0ec1c215e3f8594b2471ce751d65"
          rowTitle="testestestestes"
          />
        <ContentRow
          fetchURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dc0c0ec1c215e3f8594b2471ce751d65"
          rowTitle="filmes top"
        />
        <ContentRow
          fetchURL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.asc&api_key=dc0c0ec1c215e3f8594b2471ce751d65"
          rowTitle="filmes bosta"
          />
        </ScrollView>

       <AppFooter />
      </Container>
    );
  }
}
