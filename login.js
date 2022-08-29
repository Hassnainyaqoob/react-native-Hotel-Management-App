import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';





export default function Login({ navigation }) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const nextScren = () => {
    let Obj = {
      email,
      password

    }
    auth().signInWithEmailAndPassword(email, password).then((response) => {
      console.log(response);
      navigation.navigate("Cards")
    }).catch((err) => {
      console.log(err);
    })

  }

  let kansuyaftrdass = () => {
    navigation.navigate("signup")

  }

  return (


    <View style={{ flex: 1, backgroundColor: "white" }}>

      <View style={{ flex: 0.3, marginTop: 28 }}>

        <Text style={{ fontSize: 25, textAlign: "center", color: "black", fontSize: 45, fontWeight: "bold", marginTop: 7 }}>Login</Text>
      </View>

      <View style={{ flex: 0.6, alignItems: "center", marginTop: 30 }}>
        <View style={{ position: "absolute", left: 36, zIndex: 1, top: 11 }}><Text ><Icon size={25} name='mail' color="black" /></Text></View>

        <TextInput placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 27, fontSize: 16, marginBottom: 30, color: "black" }} />
        <View style={{ position: "relative", right: 132, zIndex: 1, top: 35 }}><Text ><Icon size={24} name='lock' color="black" /></Text></View>

        <TextInput placeholder='Password' value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 27, fontSize: 16, color: "black" }} />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={{ color: "black", marginTop: 30 }}>Create a new account ?</Text>
          <TouchableOpacity onPress={kansuyaftrdass}>
            <Text style={{ fontWeight: "bold", color: "black", marginTop: 30 }}>Sign Up</Text>
          </TouchableOpacity>

        </View>

      </View>


      <View style={{ flex: 0.4, alignItems: "center", marginTop: 75 }}>

        <TouchableOpacity onPress={nextScren} style={{ backgroundColor: "black", width: 90, borderRadius: 13, marginTop: 20 }}>
          <Text style={{ color: "lightgray", fontSize: 23, padding: 10, textAlign: "center" }}>Login</Text>
        </TouchableOpacity>

      </View>


    </View>

  )
}


const styles = StyleSheet.create({})