import React from 'react';
import { Text, View } from 'react-native';
import { css } from './assets/css/Css';
import Page from './views/Page';

export default function App() {
  const props={
    empresa:'Webdesign em Foco',
    name:'Thiago'
  };

  return (
    <View style={css.container}>
      <Text style={css.textPage}>Open up App.js to start working on your app!</Text>      
      <Page {...props} />
      {/*<Page empresa='Programação' />
      <Page empresa='Devs' />*/}
    </View>
  );
}

