import React, {useState, useEffect} from 'react';
import {FlatList, View, Image, TouchableOpacity} from 'react-native';
import {Spinner, H2} from 'native-base';
import styles from './styles';

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
    <View style={{margin: 10}}>
      <H2 style={styles.rowName}>{props.rowTitle}</H2>
      {loading ? (
        <Spinner color="red" />
      ) : (
        <FlatList
          horizontal
          data={content}
          renderItem={({item}) => (
            <View style={styles.itemWrapper}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  props.setModalContent(item);
                  props.setModalVisible(true);
                }}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={({id}) => id}
          removeClippedSubviews={true} // Unmount components when outside of window
          initialNumToRender={2} // Reduce initial render amount
          maxToRenderPerBatch={1} // Reduce number in each render batch
          updateCellsBatchingPeriod={100} // Increase time between renders
          windowSize={7} // Reduce the window size
        />
      )}
    </View>
  );
};

export default ContentRow;
