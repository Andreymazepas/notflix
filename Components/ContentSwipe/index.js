import React, {useState, useEffect} from 'react';
import {Spinner} from 'native-base';
import Swiper from 'react-native-swiper';
import {View, Image, Dimensions, TouchableOpacity} from 'react-native';

const ContentSwipe = props => {
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
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              props.setModalContent(item);
              props.setModalVisible(true);
            }}>
            <Image
              style={{width: width, height: 300}}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </Swiper>
  );
};

export default ContentSwipe;
