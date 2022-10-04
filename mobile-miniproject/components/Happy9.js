import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native'


export default function Happy9() {
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
          <TouchableOpacity onPress={()=> navigation.navigate('Happy8')}>
            <Text style={styles.item}> 0   items </Text>
          </TouchableOpacity>
            <Text style={styles.trad}> 0   trading </Text>
        </View>

        </View>
        
        <View style={{flex: 0.55}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
              <View style={{}}>
              <Image source={require('../assets/shoes1.jpeg')} style={{width:150, height:150, marginTop : 20, borderWidth: 2, borderColor: 'black'}}/>
              <Image source={require('../assets/transfer.png')} style={{width:40, height:40, position: 'absolute', marginTop: 25, right: 20 }}/>
              </View>

              <View style={{marginLeft : 'auto', marginRight : 'auto'}}>
              <Text style={styles.item1}> CANVAS SHOES </Text>
              </View>

              <View style={{flexDirection: 'row',}}>
              <Image source={require('../assets/dollar.png')} style={{width:20, height:20 }}/>
              <Text> 1,300.00 </Text>
              </View>

              <View style={{flexDirection: 'row',}}>
              <Image source={require('../assets/user.png')} style={{width:20, height:20 }}/>
              <Text> username </Text>
              </View>
            </View>

            <View>
              <View style={{}}>
              <Image source={require('../assets/shoes2.jpg')} style={{width:150, height:150, marginTop : 20, borderWidth: 2, borderColor: 'black'}}/>
                <Image source={require('../assets/transfer.png')} style={{width:40, height:40, position: 'absolute', marginTop: 25, right: 20 }}/>
              </View>

              <View style={{marginLeft : 'auto', marginRight : 'auto'}}>
              <Text style={styles.item1}> CANVAS SHOES </Text>
              </View>

              <View style={{flexDirection: 'row',}}>
              <Image source={require('../assets/check1.png')} style={{width:20, height:20 }}/>
              <Text> 1399.00 </Text>
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
  item : {
    marginTop : 8,
    marginRight : 10,
    color : 'white',
    fontSize: 25,
  },
  trad : {
    marginTop : 8,
    marginRight : 10,
    color : 'red',
    fontSize: 25,
  },
  item1 : {
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