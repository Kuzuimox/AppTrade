import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native'

export default function Happy11() {
const navigation = useNavigation()

  return (
    <View style={styles.container}>
    <View style = {{flex: 0.15, backgroundColor: 'red'}}>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
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

      <View style={styles.footer}>
        <View style={{flexDirection: 'row', marginLeft : 'auto', marginRight : 'auto'}}>
            <Image source={require('../assets/iphone.jpg')} style={{width:50, height:50, marginTop : 25,  borderWidth: 2, borderColor: 'black', marginRight : 10}}/>
        <Image source={require('../assets/transfer2.png')} style={{width:50, height:50, marginTop : 25}}/>
        <Image source={require('../assets/what.png')} style={{width:50, height:50, marginTop : 25, borderWidth: 2, borderColor: 'black',marginLeft : 10}}/>
        </View>
        <View style={styles.line}></View>
        <Image source={require('../assets/camera2.png')} style={{width : 120, height : 120, marginTop : 25, marginRight : 'auto', marginLeft : 'auto', borderRadius : 20}}/>
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
  line: {
    marginTop: 20,
    width: '80%',
    borderBottomWidth: 2,
    borderColor : 'white',
    marginLeft : 'auto',
    marginRight : 'auto'
  },
  footer: {
    position: 'absolute',
    bottom : 0,
    width: '100%',
    height: 300,
    backgroundColor: 'red',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  });