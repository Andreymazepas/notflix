import React from 'react';
import {Modal, Image, Text, ScrollView} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  Left,
  Body,
  H3,
  View,
  Text as NBText,
} from 'native-base';
import styles from './styles';

const DetailsModal = props => {
  const {modalContent} = props;
  console.log(props);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.closeModal();
      }}>
      <Card transparent>
        <ScrollView>
          <CardItem style={styles.blackContainer}>
            <Body>
              <View>
                <Image
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/w500/' +
                      modalContent.poster_path,
                  }}
                  style={styles.poster}
                />
              </View>
              <H3 style={styles.whiteText}>{modalContent.title}</H3>
              <Text style={styles.whiteText}>{modalContent.overview}</Text>
            </Body>
          </CardItem>
          <CardItem style={styles.blackContainer}>
            <Left>
              <View>
                <Button transparent>
                  <NBText>Popularity:</NBText>
                  <NBText>{modalContent.popularity}</NBText>
                </Button>
                <Button transparent>
                  <NBText>Release Date:</NBText>
                  <NBText>{modalContent.release_date}</NBText>
                </Button>
                <Button transparent>
                  <NBText>id:</NBText>
                  <NBText>{modalContent.id}</NBText>
                </Button>
                <Button transparent>
                  <NBText>Vote Count:</NBText>
                  <NBText>{modalContent.vote_count}</NBText>
                </Button>
                <Button transparent>
                  <NBText>Vote Average:</NBText>
                  <NBText>{modalContent.vote_average}</NBText>
                </Button>
              </View>
            </Left>
          </CardItem>
        </ScrollView>
      </Card>
    </Modal>
  );
};
export default DetailsModal;
