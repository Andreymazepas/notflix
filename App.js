import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  FlatList,
  Text,
} from 'react-native';
import {Container, Spinner} from 'native-base';
import AppHeader from './Components/AppHeader';
import ContentRow from './Components/ContentRow';
import ContentSwipe from './Components/ContentSwipe';
import AppFooter from './Components/AppFooter';

const App = () => {
  let [loading, setLoading] = useState(true);
  let [genres, setGenres] = useState([]);

  useEffect(() => {
    loadGenres();
  }, []);

  const loadGenres = async () => {
    return fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=dc0c0ec1c215e3f8594b2471ce751d65&language=en-US',
    )
      .then(response => response.json())
      .then(responseJson => {
        setGenres(responseJson.genres);
        console.log(responseJson);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container style={{backgroundColor: 'black'}}>
      <StatusBar hidden />
      <Text style={{color: 'white'}}>{genres[0]?.name}</Text>
      <AppHeader />

      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Spinner color="red" />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <>
              <ContentSwipe />
              <ContentRow rowTitle="Populares" />
            </>
          }
          data={genres}
          renderItem={({item}) => (
            <ContentRow rowTitle={item.name} genre={item.id} />
          )}
          keyExtractor={(item, index) => item.id}
          removeClippedSubviews={true}
          initialNumToRender={2}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={100}
          windowSize={7}
        />
      )}

      <AppFooter />
    </Container>
  );
};

export default App;
