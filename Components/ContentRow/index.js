import React, {useState, useEffect} from 'react';
import {FlatList, View, Image} from 'react-native';
import {Spinner, Text,} from 'native-base';

const ContentRow = (fetchURL, rowTitle = '', fullSize = false) => {
  let [content, setContent] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = () => {
    console.log(fetchURL);
    return fetch({fetchURL})
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setContent(responseJson.results);
      })
      .catch(error => {
        //console.error(error);
      });
  };

  return (
    <View style={{marginVertical: 20}}>
      <Text style={{color: 'white', padding: 20}}>{rowTitle.toString()}</Text>
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
