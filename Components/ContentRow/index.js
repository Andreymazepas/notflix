import React, {useState, useEffect} from 'react';
import {FlatList, View, Image} from 'react-native';
import {Spinner, H2} from 'native-base';

const ContentRow = props => {
  let [content, setContent] = useState([]);
  let [loading, setLoading] = useState(true);
  const API_KEY = 'dc0c0ec1c215e3f8594b2471ce751d65';

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    let fetchURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    if (props.genre) {
      fetchURL += `&with_genres=${props.genre}`;
    }
    return fetch(fetchURL)
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setContent(responseJson.results);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={{Padding: 20, margin: 10}}>
      <H2 style={{color: 'white', padding: 10, fontFamily: 'sans-serif-medium'}}>{props.rowTitle}</H2>
      {loading ? (
        <Spinner color="red" />
      ) : (
        <FlatList
          horizontal
          data={content}
          renderItem={({item}) => (
            <View style={{margin: 5, width: 120}}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
                style={{width: 120, height: 180}}
              />
            </View>
          )}
          keyExtractor={({id}) => id}
        />
      )}
    </View>
  );
};

export default ContentRow;
