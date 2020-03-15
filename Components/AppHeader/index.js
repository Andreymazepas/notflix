import React from 'react';
import {Header, Left, Right, Body, Title} from 'native-base';
import {Image} from 'react-native';
import styles from './styles';

const AppHeader = () => {
  const logo = require('../../img/logo.png');
  return (
    <Header transparent>
      <Left style={styles.container} />
      <Body style={styles.container}>
        <Image source={logo} style={styles.image} />
      </Body>
      <Right style={styles.container} />
    </Header>
  );
};

export default AppHeader;
