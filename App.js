/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dc0c0ec1c215e3f8594b2471ce751d65')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.results,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <View style={{marginVertical: 20}}>
            <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}} style={{width: 400, height: 400}}/>
            <Text>
              {item.title}, {item.release_date}
            </Text>
              <View>
                <Text>
                  {item.overview}
                </Text>
              </View>
          </View>}
          keyExtractor={({ id }) => id}
        />
      </View>
    );
  }
}