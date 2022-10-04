 import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native'

export default function Happy7() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
      <Text style={styles.title}> Messages </Text>
      </View>
 
      <View style={styles.inputSection}>
        <View>
          <Image source={require('../assets/glass.png')} style={{width:20, height:20, marginLeft: 20, marginTop : 4}}/>
        </View>
        <View>
          <TextInput placeholder="SEARCH" style={styles.input}/>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
        <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
            <Text style={styles.username}> USERNAME</Text> 
            <View style={styles.chatuser}>
              <TextInput placeholder="  YOU : Hi!" style={styles.chatuser}/>
            </View> 
            <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
            </TouchableOpacity>
        </View>    
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
      <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : OK!" style={styles.chatuser}/>
        </View> 
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
        </View>     
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
      <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : THANK YOU!" style={styles.chatuser}/>
        </View>
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
        </View>     
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
      <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : BYE" style={styles.chatuser}/>
        </View>
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
        </View>     
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
      <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : NO!" style={styles.chatuser}/>
        </View>
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
        </View>     
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
      <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : REALLY?" style={styles.chatuser}/>
        </View>
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
        </View>     
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
      <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : I DONT LIKE IT." style={styles.chatuser}/>
        </View>
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
        </View>    
      </View>

      <View style={{flexDirection: 'row', marginTop: 20, marginRight: 'auto', marginLeft: 'auto'}}>
       <View>
          <Image source={require('../assets/user.png')} style={{width:55, height:55}}/>
        </View>
        <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Happy10')}>
        <Text style={styles.username}> USERNAME</Text> 
        <View style={styles.chatuser}>
        <TextInput placeholder="YOU : SEE YOU" style={styles.chatuser}/>
        </View>
        <Text style={{position: 'absolute', marginTop: 22, right: 10, color: 'white', textDecorationLine : 'underline'}}>Today</Text>
        </TouchableOpacity>
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
  username : {
    color : 'red'
  },
  chatuser :{
    marginLeft: 5,
    width: 240,
    height: 30,
    backgroundColor: '#F1948A',
    borderRadius: 10,
  },
  titleSection: {
    marginTop: 40,
    marginLeft: 20,
  },
  title : {
    color : 'red',
    fontSize: 35,
    fontWeight: 'bold',
  },
  input: {
    color : 'white',
    marginLeft: 10,
    alignContent: 'center' 
  },
  inputSection : {
    marginTop : 15,
    width: 290,
    height: 30,
    backgroundColor: '#F1948A',
    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius : 20
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
