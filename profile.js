import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Footer from "../components/footer";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



export default function Profile({ navigation }) {

    const [array, setArray] = useState([])
    const [userUid, setUserUid] = useState('')
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")

    useEffect(() => {

        auth().onAuthStateChanged((user) => {
            if (user) {
                setUserUid(user.uid)
                console.log(user.uid);
                database()
                    .ref(`Users`, user.uid)
                    .once("value")
                    .then(res => {
                        let arr = Object.values(res.val())
                        setArray([...arr])
                        // console.log("state dataaaa ==========================>", res.val());
                    })
                console.log("user Id =====>", userUid);
            }
        })


    }, [])


    // let editData = () => {
    //     let obj = {
    //         name,
    //         email
    //     }
    //     database()
    //         .ref(`${"/Users/"} ${userUid}`)
    //         .set(obj)


    // }


    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{}}>
                <Text style={{ color: "black", fontFamily: "sans-serif-medium", fontSize: 40, textAlign: "center", marginTop: 50 }}>Profile</Text>
            </View>
            <View style={{ flex: 1.4 }}>

                {array.map((v, i) => (
                    <View key={i} style={{ marginTop: 30 }}>
                        <Text style={{ color: "black", fontSize: 17, marginTop: 35, marginLeft: 10 }}>Name :  {v.name}</Text>
                        <Text style={{ color: "black", fontSize: 17, marginLeft: 10, marginTop: 30 }}>Email :  {v.email}</Text>
                    </View>
                ))}

            </View>
            {/* <View style={{ alignItems: "center" }}>
                <TextInput placeholder='Name' placeholderTextColor="black" onChangeText={(e) => setName(e)} style={{ backgroundColor: "lightgray", fontSize: 16, width: 290, paddingHorizontal: 28, marginBottom: 10, color: "black", paddingTop: 12 }} />
                <TextInput placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 28, fontSize: 16, marginBottom: 10, color: "black" }} />

            </View> */}

            <View style={{ flex: 2, alignItems: "center" }}>
                <TouchableOpacity style={{ backgroundColor: "black", width: 135, height: 43, borderRadius: 25 }}>
                    <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: "flex-end", position: "absolute", left: 0, right: 0, bottom: 0 }}>
                <Footer data={navigation} />


            </View>
        </View>
    )
}