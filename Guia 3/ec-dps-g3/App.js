import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar, FlatList, Image } from 'react-native';
import {AppRegistry} from "react-native";

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const DATA =[
  {id: '1', title: 'Pupusas', src:require('./img/pupusas.jpg'), title1:'Las pupusas son el platillo más representativo de la cocina salvadoreña.Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y elaboradas tanto con maíz o arroz. Antes de ser cocidas, se rellenan con frijoles, chicharrón molido, queso, camarones o cualquier otro componente disponible.'},
  {id: '2', title: 'Tamales', src:require('./img/tamales.jpg'),title1:'La masa se prepara con maíz y con varias especias que le otorgan el delicioso sabor que ofrecen. Se hacen porciones individuales que se rellenan con carne de cerdo, pato o gallina y salsa de tomate natural. Antes de cocinar en agua hirviendo se envuelven en hojas de plátano.'},
  {id: '3', title: 'Yuca',src:require('./img/yuca.jpg'), title1:'La yuca se acompaña de chicharrones, trozos de cerdo o de las “pescadas”, pequeños peces típicos del país que se preparan fritos.La yuca frita se puede acompañar también con salsa de tomate, encurtidos, tomate y pepinos.'},
  {id: '4', title: 'Atol',src:require('./img/atol.jpg'), title1:'Se preparan a base de elotes, semillas de marañón, maíz tostado y piña. El más famoso de todos es el atol shuco, uno elaborado a partir de maíz fermentado, agua y alhuashte, polvo obtenido al moler las semillas de ayote.'},
  {id: '5', title: 'Pastelitos fritos',src:require('./img/pasteles.jpg'), title1:'La base de los pasteles fritos es una masa preparada con maíz a la que se le colocan condimentos y achiote. Su forma es de media luna y se rellenan con carne, pollo o vegetales guisados.Se fríen en abundante aceite y se sirven acompañados de salsa de tomate natural y encurtido.'},
];
 const Item=({title,img,title1})=>(
   <View style={styles.item}>
   <Text style={styles.title}> {title}</Text>
   <Image style={styles.img} source={img}/>
      <Text style={styles.title1}>{title1} </Text>
   </View>
 );
//const App=()=>{
   const renderItem=({item})=> (
   <Item title={item.title} img={item.src} title1={item.title1}/>
 ); 
//}

export default function App() {
 return(
<SafeAreaView style={styles.container}>
<FlatList 
data={DATA}
renderItem={renderItem}
keyExtractor={item => item.id}/>
</SafeAreaView>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop: StatusBar.currentHeight ||0,
  },
  item: {
    backgroundColor: '#5a8483', padding: 20, marginVertical:8, marginHorizontal:16, alignItems: 'center'
  },
  title:{
    fontSize: 32,
  },
  img:{width:200, height:125, borderwidth:2, borderColor:'#d35647', resizeMode:'contain', margin:8,
  },
  title1:{
    fontSize: 18, textAlign:'center',
  }
});

AppRegistry.registerComponent("cars", ()=> App);