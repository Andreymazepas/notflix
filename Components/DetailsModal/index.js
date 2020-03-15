import React from 'react';
import {Modal, Image, TouchableHighlight,Text, ScrollView} from 'react-native';
import {
  Card,
  CardItem,
  Button,
  Left,
  Body,
  H3,
  View,
  Text as NBText
} from 'native-base';

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
          <CardItem style={{backgroundColor: 'black'}}>
            <Body>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={{
                    uri:
                      'https://image.tmdb.org/t/p/w500/' +
                      modalContent.poster_path,
                  }}
                  style={{width: 130, height: 200, margin: 10}}
                />
              </View>
              <H3 style={{color: 'white'}}>{modalContent.title}</H3>
              <Text style={{color: 'white'}}>{modalContent.overview}</Text>
            </Body>
          </CardItem>
          <CardItem style={{backgroundColor: 'black'}}>
            <Left>
              <View>
                <Button transparent textStyle={{color: '#FFF'}}>
                  <NBText>Popularity:</NBText>
                  <NBText>{modalContent.popularity}</NBText>
                </Button>
                <Button transparent textStyle={{color: '#FFF'}}>
                  <NBText>Release Date:</NBText>
                  <NBText>{modalContent.release_date}</NBText>
                </Button>
                <Button transparent textStyle={{color: '#FFF'}}>
                  <NBText>id:</NBText>
                  <NBText>{modalContent.id}</NBText>
                </Button>
                <Button transparent textStyle={{color: '#FFF'}}>
                  <NBText>Vote Count:</NBText>
                  <NBText>{modalContent.vote_count}</NBText>
                </Button>
                <Button transparent textStyle={{color: '#FFF'}}>
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
