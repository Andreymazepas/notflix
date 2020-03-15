import React, {useState, useEffect} from 'react';
import {Spinner} from 'native-base';
import Swiper from 'react-native-swiper';
import {View, Image, Dimensions} from 'react-native';

const ContentSwipe = () => {
  let [content, setContent] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    return fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=dc0c0ec1c215e3f8594b2471ce751d65',
    )
      .then(response => response.json())
      .then(responseJson => {
        setContent(responseJson.results);
        setLoading(false);
        console.log(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const {width} = Dimensions.get('window');

  return loading ? (
    <Spinner color="red" />
  ) : (
    <Swiper
      autoplay
      showsButtons
      height={300}
      showsPagination={false}
      autoplayTimeout={3.5}>
      {content.map(item => (
        <View key={item.id} style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={{width: width, height: 300}}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
          />
        </View>
      ))}
    </Swiper>
  );
};

export default ContentSwipe;
