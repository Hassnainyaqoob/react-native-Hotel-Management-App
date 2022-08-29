import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import database from '@react-native-firebase/database';
import Footer from "../components/footer";
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function Contact({ navigation }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    let nextScren = () => {
        let obj = {
            name,
            email,
            message
        }
        database()
            .ref("User Message")
            .set(obj)
        // navigation.navigate("Cards")
        console.log(obj);
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 0.3, marginTop: 13 }}>

                <Text style={{ fontSize: 25, textAlign: "center", color: "black", fontSize: 40, fontWeight: "bold", marginTop: 15 }}>Contact Us</Text>
            </View>

            <View style={{ flex: 0.6, alignItems: "center", marginTop: 23 }}>
                <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='person' color="black" /></Text></View>

                <TextInput placeholder='Name' placeholderTextColor="black" onChangeText={(e) => setName(e)} style={{ backgroundColor: "lightgray", fontSize: 16, width: 290, paddingHorizontal: 28, marginBottom: 30, color: "black" }} />

                <View style={{ position: "relative", right: 132, zIndex: 1, top: 36 }}><Text ><Icon size={23} name='mail' color="black" /></Text></View>

                <TextInput placeholder='Email' value={email} keyboardType="email-address" onChangeText={(e) => setEmail(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 28, fontSize: 16, marginBottom: 30, color: "black" }} />
                <View style={{ position: "relative", right: 131, zIndex: 1, top: 39 }}><Text ><Icon size={23} name='message' color="black" /></Text></View>

                <TextInput placeholder='Enter Message....' multiline value={message} onChangeText={(e) => setMessage(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, color: "black" }} />
            </View>


            <View style={{ flex: 0.4, alignItems: "center", marginTop: 80 }}>

                <TouchableOpacity onPress={nextScren} style={{ backgroundColor: "black", width: 130, borderRadius: 13, marginTop: 29 }}>
                    <Text style={{ color: "lightgray", fontSize: 15, padding: 15 }}>Send Message</Text>
                </TouchableOpacity>

            </View>






            <View style={{ justifyContent: "flex-end", position: "absolute", left: 0, bottom: 0, right: 0 }}>
                <Footer data={navigation} />

            </View>
        </View>
    )
}