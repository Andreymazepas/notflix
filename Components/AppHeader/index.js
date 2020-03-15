import React from 'react';
import {Header, Left, Right, Body, Title} from 'native-base';
import {Image} from 'react-native';
import styles from './styles';

const AppHeader = () => {
  const logo = require('../../img/logo.png');
  return (
    <Header transparent>
      <Left style={{flex: 1}} />
      <Body style={{flex: 1}}>
        <Image
          source={logo}
          style={{
            height: 50,
            width: 140,
            resizeMode: 'center',
            margin: 'auto',
          }}
        />
      </Body>
      <Right style={{flex: 1}} />
    </Header>
  );
};

export default AppHeader;
