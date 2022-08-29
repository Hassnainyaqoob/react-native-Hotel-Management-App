import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function Footer(props) {

    console.log(props.data);
    let GoHome = () => {
        props.data.navigate("Cards")
    }


    let GoAbout = () => {
        props.data.navigate("about")
    }

    let goContact = () => {
        props.data.navigate("contact")
    }

    let goProfile = () => {
        props.data.navigate("profile")
    }


    return (
        <>
            <View style={{ flexDirection: "row", backgroundColor: "white", height: 49, borderWidth: 1, borderStyle: 'solid' }}>
                <View style={{ marginTop: 4 }}>
                    <TouchableOpacity onPress={GoHome}>

                        <Text style={{ marginRight: 62, marginLeft: 21 }}><Icon name='home' size={27} color="black" /></Text>
                        <Text style={{ color: "black", marginLeft: 19, fontSize: 11 }}>Home</Text>
                    </ TouchableOpacity>

                </View>
                <View style={{ marginTop: 4 }}>
                    <TouchableOpacity onPress={GoAbout}>


                        <Text style={{ marginLeft: 7 }}><Icon name='info' size={27} color="black" /></Text>
                        <Text style={{ color: "black", marginLeft: 6, fontSize: 11 }}>about</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 4 }}>
                    <TouchableOpacity onPress={goContact}>


                        <Text style={{ marginLeft: 76 }}><Icon name='call' size={27} color="black" /></Text>
                        <Text style={{ color: "black", marginLeft: 70, fontSize: 11 }}>Contact</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 4 }}>
                    <TouchableOpacity onPress={goProfile}>


                        <Text style={{ marginLeft: 60 }}><Icon name='person' size={27} color="black" /></Text>
                        <Text style={{ color: "black", marginLeft: 58, fontSize: 11 }}>profile</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}