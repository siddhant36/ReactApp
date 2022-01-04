import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView,} from 'react-native';
import QuickActionData from './assets/Data/QuickActionData';
import RoomData from './assets/Data/RoomData';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from './components/IconButton';


export default function App(){
  const renderQuickActionItem = ({ item }) => {
    return(
                  // Banner Image Section
                  
      <View style={styles.actionItemWrapper}>
        <Image source={item.image} style={styles.actionItemImage}/>
        <Text style={styles.actionItemTitle}>{item.title}</Text>
      </View>
    )
  }
  
  return (  
    <NavigationContainer>
    <View style={styles.container}>
    <Image style={styles.headerImage} source={{ uri: 'https://cdn.pixabay.com/photo/2019/10/17/02/39/villa-4555824_960_720.jpg' }} />
    <Text style={styles.Text}>QUICK ACTION</Text>
    
  </View>

              {/* Quick Action Section */}
  <View style={styles.actionWrapper}>
    <SafeAreaView>
  <FlatList style={styles.actionCard}
        data={QuickActionData}
        renderItem={renderQuickActionItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
      />
    </SafeAreaView>
  </View>
  
              {/* Rooms Section */}
  <View style={styles.roomsWrapper}>
    <Text style={styles.Text}>ROOMS</Text>
    {RoomData.map((item) => (
      <View style={styles.roomCardWrapper}>
        <View>
          <View style={styles.itemWrappeer}><Text style={styles.itemTitle}>{item.title}</Text>
          <Icon name="chevron-right" style={styles.itemIcon}></Icon></View>
          <View>
            <Image source={item.image} style={styles.roomItemImage}/>
          </View>
          
          <View style={styles.buttonIcons}>
                    {/* <IconButton
            title={'Press me'}
            onPres={alert}
            icon={}
          /> */}
          <Icon name="lightbulb-o" size={40} style={styles.footerIcon1}></Icon>
          <Icon name="television" size={40} style={styles.footerIcon2}></Icon>
          <Icon name="bed" size={40} style={styles.footerIcon3}></Icon>
          <Icon name="ship" size={40} style={styles.footerIcon4}></Icon>


          </View>
        </View>
      </View>
    ))}
  </View>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: ,
    backgroundColor: '#FFFFF0',
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
    paddingTop: 20,
    marginTop: 10,
    marginStart: 32,
    color: '#808080',
    fontWeight: 'bold',
  },
  actionItemWrapper: {
    marginBottom:10,
    padding: 15,
    marginHorizontal:25,
    backgroundColor: '#FAF9F6',
    // flex: 0.4,
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    position: 'relative',
    top: 1,
  },
  actionItemImage: {

    width : 40,
    height: 40,
  },
  actionWrapper:{
    marginTop: -120,
  } ,
  actionCard:{
    // position: ive',
  },
  roomCardWrapper:{
    flexWrap: 'nowrap',
  },
  itemWrappeer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    position: 'relative',
    top: 1,
    padding: 5,
    marginStart: 30,
    
  },
  itemTitle: {
    marginStart: 0,
    
  },
  itemIcon : {
  marginHorizontal: 80,
  },
  roomCardWrapper: {
    backgroundColor:'#FAF9F6',
    padding: 5,
    marginLeft: 30,
  },
  roomItemImage:{
  width: '90%',
  height: '65%',
  },
  buttonIcons:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: -40,
    marginStart: -20,
    
  },
  footerIcon1:{
    
    
  },
  
footerIcon2:{

},
footerIcon3:{

},
footerIcon4:{

},
  
});
