import React from 'react';
import ThunderCard from './components/ThunderCard';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Navbar,Container, Image} from 'react-native';
import thunderCard from './components/ThunderCard';



export default function App(){
  return (  
    <NavigationContainer><View style={styles.container}>
    <Image style={styles.headerImage} source={{ uri: 'https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_960_720.jpg' }} />
    <Text style={styles.Text}>QUICK ACTION</Text>
  </View>
  <View style={styles.CardOne}>
   <ThunderCard text={'Welcome'}/      >
  </View></NavigationContainer>
        
      

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: ,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    
  },
  headerImage: {
    width: '80%',
    height: '30%',
    marginTop: 90,
  },
  CardOne: {
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // marginBottom: 0,
  },
  Text: {
    padding: 20,
    color: '#808080',
    fontWeight: 'bold',
  },
});
