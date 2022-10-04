import React from "react";
import { SafeAreaView, StyleSheet, TextInput,View,TouchableOpacity,Text,ImageBackground } from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native'

const register = () => {
  const [text, onChangeText] = React.useState("ID");
  const [number, onChangeNumber] = React.useState(null);
  const bimg = require("../assets/backgrondregister.png");
  const navigation = useNavigation()

  return (
    <SafeAreaView>
    <ImageBackground source={bimg} style = {{flex:1}}   >
    </ImageBackground>
    <View >
    <Text style = {{textAlign: "center",fontWeight: "bold",marginTop: 10,color: "#fff",fontSize : 50}}>
    Register
    </Text>
    </View>
    <View style = {styles.action}><TextInput
            style={styles.input}
            placeholder="UserID"
            placeholderTextColor="#929292"
          /> 
        </View>
    <View style={styles.form}> 
          <FontAwesome5 name="lock" style={styles.iconLock} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Password"
            placeholderTextColor="#929292"
          />
     </View>
           <View style={styles.form}> 
          <FontAwesome5 name="lock" style={styles.iconLock} />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            autoFocus={true}
            placeholder="Confirm Password"
            placeholderTextColor="#929292"
          />
           </View>
      <View style = {styles.action}><TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#929292"
          /> 
        </View>     
      <View style = {styles.action}><TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#929292"
          /> 
        </View>     
       <TouchableOpacity style={styles.buttonRegisterText}>
           <Text style={styles.buttonRegisterText} onPress={()=> navigation.navigate('Homepage')}>Register</Text>
       </TouchableOpacity>
       <View style = {{textAlign: "center",fontWeight: "bold",marginTop: 10,color: "#fff"}}>
       <Text style = {{color : "#fff",fontWeight: "bold"}}>Or</Text></View>
       <TouchableOpacity style={styles.buttonRegisterText}>
            <Text style={styles.buttonRegisterText} onPress={()=> navigation.navigate('login')}>Login</Text>
       </TouchableOpacity>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  buttonRegisterText: {
    height: 15,
    justifyContent: "center",
    textAlign : "center",
    color: "#fff",
  
    marginTop: 3,
    fontWeight: "bold",
  },
  input: {
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 50,
    fontSize: 15,
    marginTop: 10,
    color: "#ff",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "top",
  },
  action: {
    flexDirection: "",
    justifyContent: "space-between",
  },
  form: {
    marginBottom: 1,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
    marginTop: -8,
  },

});

export default register;