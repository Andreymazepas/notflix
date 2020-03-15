import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import Icon from '../AppIcon';

const AppFooter = () => {
  return (
    <Footer>
      <FooterTab style={{backgroundColor: 'black'}}>
        <Button>
          <Icon icon="faFilm" />
          <Text>Filmes</Text>
        </Button>
        <Button>
          <Icon icon="faTV" />
          <Text>Series</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default AppFooter;
