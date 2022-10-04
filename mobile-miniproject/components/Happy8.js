import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native'


export default function Happy8() {
    const navigation = useNavigation()
  return (
        <View style={styles.container}>
        <View style = {{flex: 0.45, backgroundColor: '#F1948A'}}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/user3.png')} style={{width:55, height:55, marginTop : 40, marginLeft : 20}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.title}> USERNAME </Text>
              <View style={{flexDirection: 'row', marginLeft : 50}}>
                <Image source={require('../assets/star.png')} style={{width:30, height:30, marginTop : 3}}/>
                <Image source={require('../assets/star.png')} style={{width:30, height:30, marginTop : 3}}/>
                <Image source={require('../assets/star.png')} style={{width:30, height:30, marginTop : 3}}/>
                <Image source={require('../assets/star.png')} style={{width:30, height:30, marginTop : 3}}/>
                <Image source={require('../assets/star.png')} style={{width:30, height:30, marginTop : 3}}/>
              </View>
            </View>
            <Image source={require('../assets/user2.png')} style={{width:100, height:100, marginTop : 10, marginLeft : 30}}/>
          </View>
          <View>
            <TouchableOpacity style={{flexDirection: 'row',justifyContent: 'space-around' } }>
              <Text  onPress={()=> navigation.navigate('login')}>Login</Text>
              <Text  onPress={()=> navigation.navigate('register')}>Register</Text>
            </TouchableOpacity>
          </View>
        <Text style={styles.rating}> 0.0 rating  0 reviews </Text>
        <View style={{flexDirection: 'row', marginTop : 8}}>
          <Image source={require('../assets/calendar.png')} style={{width:30, height:30, marginTop : 3, marginLeft : 50}}/>
          <Text style={styles.calendar}> On happy trade since 1 October 2022 </Text>
        </View>
        <View style={{flexDirection: 'row', marginTop : 8}}>
        <Image source={require('../assets/pin.png')} style={{width:30, height:30, marginTop : 3, marginLeft : 50}}/>
        <Text style={styles.pin}> Bangkok </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop : 10}}>
        <Text style={styles.item1}> 0   items </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy9')}>
        <Text style={styles.trad}> 0   trading </Text>
         </TouchableOpacity>
        </View>
        </View>
        
        <View style={{flex: 0.55}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View>
          <Image source={require('../assets/iphone.jpg')} style={{width:150, height:150, marginTop : 20, borderWidth: 2, borderColor: 'black'}}/>
          <View style={{marginLeft : 'auto', marginRight : 'auto'}}>
          <Text style={styles.item}> TELEPONE </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Image source={require('../assets/check1.png')} style={{width:20, height:20 }}/>
          <Text> available </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Image source={require('../assets/user.png')} style={{width:20, height:20 }}/>
            <Text> username </Text>
          </View>
          </View>
          <View>
          <Image source={require('../assets/teddy.jpg')} style={{width:150, height:150, marginTop : 20, borderWidth: 2, borderColor: 'black'}}/>
          <View style={{marginLeft : 'auto', marginRight : 'auto'}}>
          <Text style={styles.item}> TEDDY BEAR </Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Image source={require('../assets/check2.png')} style={{width:20, height:20 }}/>
          <Text> success fully</Text>
          </View>
          <View style={{flexDirection: 'row',}}>
          <Image source={require('../assets/user.png')} style={{width:20, height:20 }}/>
            <Text> username </Text>
          </View>
          </View> 
          </View> 
        </View>
    
      <View style={styles.footer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
             <TouchableOpacity onPress={()=> navigation.navigate('Homepage')}>
              <Image source={require('../assets/menu.png')} style={{width:35, height:35, marginTop : 10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Happy6')}>
            <Image source={require('../assets/heart.png')} style={{width:45, height:45, marginTop : 10}}/>
             </TouchableOpacity>
            <Image source={require('../assets/camera.png')} style={{width:45, height:45, marginTop : 10}}/>
            <TouchableOpacity onPress={()=> navigation.navigate('Happy7')}>
              <Image source={require('../assets/messages.png')} style={{width:45, height:45, marginTop : 10}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Happy8')}>
              <Image source={require('../assets/user2.png')} style={{width:45, height:45, marginTop : 10}}/>
            </TouchableOpacity>
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
    marginTop : 10,
    marginLeft : 30,
    color : 'white',
    fontSize: 35,
  },
  rating : {
    marginTop : 8,
    marginLeft : 55,
    color : '#C0392B',
    fontSize: 15,
  },
  calendar : {
    marginTop : 8,
    marginRight : 10,
    color : 'white',
    fontSize: 15,
  },
  pin : {
    marginTop : 8,
    marginRight : 10,
    color : 'white',
    fontSize: 15,
  },
  item1 : {
    marginTop : 8,
    marginRight : 10,
    color : 'red',
    fontSize: 25,
  },
  trad : {
    marginTop : 8,
    marginRight : 10,
    color : 'white',
    fontSize: 25,
  },
  item : {
    marginRight : 10,
    color : 'black',
    fontSize: 20,
  },
  footer: {
    position: 'absolute',
    bottom : 0,
    width: '100%',
    height: 60,
    backgroundColor: 'red',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }


});