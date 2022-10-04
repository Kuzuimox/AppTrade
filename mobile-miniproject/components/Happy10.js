import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native'

export default function Happy10() {
const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <View style = {{flex: 0.15, backgroundColor: 'red'}}>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy7')}>
        <Image source={require('../assets/back.png')} style={{width:50, height:50, marginTop : 45, marginLeft : 10}}/>
        </TouchableOpacity>
        <Image source={require('../assets/user4.png')} style={{width:60, height:60, marginTop : 40, marginLeft : 20}}/>

        <View>
        <Text style={styles.title}> USERNAME </Text>
        </View>
      </View>
    </View>
    
    <View style = {{flex: 0.08, backgroundColor: '#F1948A'}}>
    <View style={{flexDirection: 'row'}}>
      <Image source={require('../assets/iphone.jpg')} style={{width:50, height:50, marginTop : 8, marginLeft : 20, borderWidth: 2, borderColor: 'black'}}/>
      <Image source={require('../assets/transfer2.png')} style={{width:50, height:50, marginTop : 7, marginLeft : 10}}/>
      <Image source={require('../assets/what.png')} style={{width:50, height:50, marginTop : 8, marginLeft : 13, borderWidth: 2, borderColor: 'black'}}/>
    </View>
    </View>

<View style = {{flex: 0.77,}}>
  <TouchableOpacity onPress={()=> navigation.navigate('Happy11')}>
      <View style={styles.inputSection}>
        <Image source={require('../assets/transfer3.png')} style={{width:30, height:30, marginTop: 5, marginLeft : 5 }}/>
        <Text style={{color : 'white', marginTop : 5, fontSize : 20,}}> SWOP </Text>
      </View>
    </TouchableOpacity>
 </View>   

      <View style={styles.footer}>
        <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/add.png')} style={{width:50, height:50, marginTop : 5, marginLeft : 10}}/>
          <View style={styles.chatuser}>
              <TextInput placeholder=" TEXT.." style={styles.chatuser}/>
            </View>
            <Image source={require('../assets/send.png')} style={{width:40, height:40, marginTop : 15, marginLeft : 150}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title : {
    marginTop : 50,
    marginLeft : 5,
    color : 'white',
    fontSize: 30,
  },
  inputSection : {
    marginTop : 510,
    width: 100,
    height: 40,
    backgroundColor: 'red',
    borderRadius : 20,
    marginLeft : 280,
    flexDirection: 'row'
  },
  chatuser :{
    marginLeft: 10,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop : 5,
  },
    footer: {
    position: 'absolute',
    bottom : 0,
    width: '100%',
    height: 70,
    backgroundColor: '#F1948A',
  },
  });