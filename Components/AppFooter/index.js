import React from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';

const AppFooter = () => {
  return (
    <Footer>
      <FooterTab style={{backgroundColor: 'black'}}>
        <Button>
          <Icon name="apps" />
          <Text>Filmes</Text>
        </Button>
        <Button>
          <Icon name="person" />
          <Text>Series</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default AppFooter;
