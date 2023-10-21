import React, {useState, useEffect} from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { css } from './assets/css/Css';
import Page from './views/Page';

export default function App() {
  const [product, setProduct] = useState('bola');
  const [quantity, setQuantity] = useState(0);

  useEffect(()=>{
    if(quantity > 0) {
      Alert.alert('Novo produto adicionado!');
    }
  }, [quantity]);

  const props={
    empresa:'Webdesign em Foco',
    name:'Thiago',
    produto: product,
    quantidade: quantity
  };

  return (
    <View style={css.container}>
      <Text>{product}</Text>            
      <Page {...props} />
      <Button title='Acicionar produtos' onPress={()=>setQuantity(quantity + 1)} />
      {/*<Page empresa='Programação' />
      <Page empresa='Devs' />*/}
    </View>
  );
}

