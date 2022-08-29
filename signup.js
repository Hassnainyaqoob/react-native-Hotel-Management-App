import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Footer from '../components/footer';






export default function Signup({ navigation }) {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const nextScren = () => {
    let Obj = {
      email,
      password,
      name

    }
    auth().createUserWithEmailAndPassword(email, password).then((response) => {
      console.log(response);

      database()
        .ref(`${"/Users/"} ${response.user.uid}`)
        .set(Obj)

      navigation.navigate("Login")
    }).catch((err) => {
      console.log(err);
    })

  }



  let aksaksaks = () => {
    navigation.navigate("Login")

  }




  return (


    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ flex: 0.3, marginTop: 22 }}>

        <Text style={{ fontSize: 25, textAlign: "center", color: "black", fontSize: 45, fontWeight: "bold", marginTop: 15 }}>Sign Up</Text>
      </View>

      <View style={{ flex: 0.6, alignItems: "center", marginTop: 10 }}>

        <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='person' color="black" /></Text></View>

        <TextInput placeholder='Name' placeholderTextColor="black" onChangeText={(e) => setName(e)} style={{ backgroundColor: "lightgray", fontSize: 16, width: 290, paddingHorizontal: 28, marginBottom: 10, color: "black", paddingTop: 12 }} />

        <View style={{ position: "relative", right: 131, zIndex: 1, top: 36, bottom: 0 }}><Text ><Icon size={24} name='mail' color="black" /></Text></View>

        <TextInput placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 28, fontSize: 16, marginBottom: 10, color: "black" }} />


        <View style={{ position: "relative", right: 132, zIndex: 1, top: 36, bottom: 0 }}><Text ><Icon size={25} name='lock' color="black" /></Text></View>

        <TextInput placeholder='Password' value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 28, fontSize: 16, color: "black" }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "black", marginTop: 25 }}>Already have Account ?</Text>
          <TouchableOpacity onPress={aksaksaks}>
            <Text style={{ fontWeight: "bold", color: "black", marginTop: 25 }}>Login</Text>
          </TouchableOpacity>

        </View>


      </View>

      {/* <View style={{ flex: 0.1 ,backgroundColor:"red",marginTop:80}}>

      </View> */}

      <View style={{ flex: 0.3, alignItems: "center", marginTop: 90 }}>

        <TouchableOpacity onPress={nextScren} style={{ backgroundColor: "black", width: 91, borderRadius: 13, marginTop: 20 }}>
          <Text style={{ color: "lightgray", fontSize: 21, padding: 9 }}>Sign Up</Text>
        </TouchableOpacity>

      </View>


    </View>

  )
}


const styles = StyleSheet.create({})