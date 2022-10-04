import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import details from './Detail';
const width = Dimensions.get('window').width / 2 - 30;
const COLORS = {
  white: '#fff',
  dark: '#000',
  red: '#F52A2A',
  light: '#F1F1F1',
  orange: '#ff0000',
  green: '#00A86b',

};

const HomePage = ({navigation}) => {
  
  const Card = ({details}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', details)}>
        <View style={style.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: details.like
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color={details.like ? COLORS.red : COLORS.black}
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={details.img}
              style={{flex: 1, resizeMode: 'contain'}}
            />
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {details.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 15, }}>
              ${details.price}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.orange,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon size={18} color={COLORS.white} 
                name={details.status ? 'local-shipping' : ''}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <View style={{marginTop: 30, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={details}
        renderItem={({item}) => {
          return <Card details={item} />;
        }}
      />
       <View style={style.footer}>
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
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
 
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom : 0,
    width: '110%',
    height: 60,
    backgroundColor: 'red',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
});

export default HomePage;