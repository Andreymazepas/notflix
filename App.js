import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, View, FlatList} from 'react-native';
import {Container, Spinner} from 'native-base';
import AppHeader from './Components/AppHeader';
import ContentRow from './Components/ContentRow';
import ContentSwipe from './Components/ContentSwipe';
import AppFooter from './Components/AppFooter';
import DetailsModal from './Components/DetailsModal';
import styles from './styles.js';

const App = () => {
  let [loading, setLoading] = useState(true);
  let [genres, setGenres] = useState([]);
  let [modalVisible, setModalVisible] = useState(false);
  let [modalContent, setModalContent] = useState({});

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
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Container style={styles.blackContainer}>
      <StatusBar hidden />
      <AppHeader />

      {loading ? (
        <View style={styles.loadingContainer}>
          <Spinner color="red" />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <>
              <ContentSwipe
                setModalVisible={() => setModalVisible()}
                setModalContent={item => setModalContent(item)}
              />
              <ContentRow
                rowTitle="Populares"
                setModalVisible={() => setModalVisible()}
                setModalContent={item => setModalContent(item)}
              />
            </>
          }
          data={genres}
          renderItem={({item}) => (
            <ContentRow
              rowTitle={item.name}
              genre={item.id}
              setModalVisible={() => setModalVisible()}
              setModalContent={item => setModalContent(item)}
            />
          )}
          keyExtractor={(item, index) => 'key' + item.id}
          removeClippedSubviews={true}
          initialNumToRender={2}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={100}
          windowSize={7}
        />
      )}
      <DetailsModal
        modalVisible={modalVisible}
        modalContent={modalContent}
        closeModal={() => closeModal()}
      />
      <AppFooter />
    </Container>
  );
};

export default App;
