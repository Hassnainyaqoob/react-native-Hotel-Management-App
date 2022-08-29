import React, { useEffect, useState } from "react";
import { Button, Image, ScrollView, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import Footer from "../components/footer";
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from "react-native-dropdown-picker";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { v4 as uuidv4 } from 'uuid';
// uuidv4();






export default function Book({ navigation, route }) {

    const [ed, setEd] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [contact, setContact] = useState("")
    const [cnic, setCnic] = useState("")
    const [person, setPerson] = useState("")
    const [day, setDay] = useState("")
    const [drop, setDrop] = useState("")
    const [cardNo, setCardNo] = useState("")
    const [cardCode, setCardCo] = useState("")
    const [date, setDate] = useState("")
    const [bookingData, setBookingData] = useState({})
    const [dropValue, setDropValue] = useState("")


    // const [first, setFirst] = useState(route.params.rew)

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Bank Al Falah', value: 'Bank Al Falah' },
        { label: 'Bank AL Habib', value: 'Bank AL Habib' },
    ]);
    // setDropValue(value)

    // console.log(dropValue);

    // console.log(route.params.rew);

    useEffect(() => {

        auth().onAuthStateChanged((user) => {
            if (user) {

                setEd(user.uid)
                // console.log(ed);



                if (route.params) {
                    const dataObj = {
                        hotel: route.params.hogaya,

                    }

                    setBookingData(dataObj)
                }



            }
        })


    }, [])




    let aksiiqoiooooqoq = () => {
        const bookingKey = database().ref('/Users Book Hotels/').push();
        let boKIdsnkos = bookingKey.key

        let obj = {
            name,
            email,
            address,
            contact,
            cnic,
            person,
            day,
            cardNo,
            cardCode,
            date,
            ...bookingData,
            userId: ed
        }
        navigation.navigate("Cards")
        database()
            .ref(`${"/Users Book Hotels/"} ${boKIdsnkos}`)
            .set(obj)
        // console.log(obj);
    }

    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>

            <ScrollView>

                <View style={{ margin: 10, marginBottom: 30, backgroundColor: "lightgray", padding: 9 }}>
                    <Image
                        style={{ with: 20, height: 185 }}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU' }} />
                    <Text style={{ color: "black", fontSize: 17 }}>Name :  {route.params.hogaya.name}</Text>
                    <Text style={{ color: "black", fontSize: 17 }}>Price :  {route.params.hogaya.price}</Text>
                    <Text style={{ color: "black", fontSize: 17 }}>Rooms :  {route.params.hogaya.rooms}</Text>
                    <Text style={{ color: "black", fontSize: 17 }}>City :  {route.params.hogaya.city}</Text>
                    <Text style={{ color: "black", fontSize: 17 }}>Services :  {route.params.hogaya.services}</Text>
                </View>
                <View>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginLeft: 15, marginBottom: 20 }}>Personal Details</Text>
                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='person' color="black" /></Text></View>
                    <TextInput placeholder='User Name' value={name} onChangeText={(e) => setName(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />
                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 37, zIndex: 1, top: 12 }}><Text ><Icon size={23} name='mail' color="black" /></Text></View>
                    <TextInput placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />
                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='location-on' color="black" /></Text></View>
                    <TextInput placeholder='Address' value={address} onChangeText={(e) => setAddress(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />
                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='call' color="black" /></Text></View>
                    <TextInput placeholder='Contact Number' value={contact} onChangeText={(e) => setContact(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 30, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />
                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='dialpad' color="black" /></Text></View>
                    <TextInput placeholder='Cnic Number' value={cnic} onChangeText={(e) => setCnic(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />
                </View>
                <View>
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 19, marginLeft: 15, marginBottom: 20 }}>User Requirement</Text>
                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 37, zIndex: 1, top: 12 }}><Text ><Icon size={23} name='dialpad' color="black" /></Text></View>

                    <TextInput placeholder='No of Person' value={person} onChangeText={(e) => setPerson(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />

                </View>
                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 37, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='dialpad' color="black" /></Text></View>

                    <TextInput placeholder='No of Days' value={day} onChangeText={(e) => setDay(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />

                </View>

                <View>

                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginLeft: 15, marginBottom: 20 }}>Payment Details</Text>
                </View>

                <View style={{ flex: 0.2, marginHorizontal: 36, color: "lightgray", marginBottom: 90, marginTop: 4 }}>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>

                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 37, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='dialpad' color="black" /></Text></View>

                    <TextInput placeholder='Card Number' value={cardNo} onChangeText={(e) => setCardNo(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />

                </View>


                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='format-list-numbered' color="black" /></Text></View>

                    <TextInput placeholder='Card Code' value={cardCode} onChangeText={(e) => setCardCo(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />

                </View>

                <View style={{ flex: 0.2 }}>
                    <View style={{ position: "absolute", left: 36, zIndex: 1, top: 12 }}><Text ><Icon size={25} name='person' color="black" /></Text></View>

                    <TextInput placeholder='Date' value={date} onChangeText={(e) => setDate(e)} placeholderTextColor="black" style={{ backgroundColor: "lightgray", width: 290, paddingHorizontal: 29, fontSize: 16, marginBottom: 30, color: "black", alignSelf: "center" }} />

                </View>


                {/* <View style={{ flex: 0.2, padding: 10, justifyContent: "center", alignItems: "center" }}>

                    <Text style={styles.text}>Birth Date :</Text>
                    <DatePicker
                        style={{ with: 230 }}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate="01-01-1900"
                        maxDate="01-01-2000"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                right: -5,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                borderColor: "gray",
                                alignItems: "flex-start",
                                borderWidth: 0,
                                borderBottomWidth: 1,
                            },
                            placeholderText: {
                                fontSize: 17,
                                color: "gray"
                            },
                            dateText: {
                                fontSize: 17,
                            }
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />

                </View> */}
                <View style={{ marginTop: 20, width: 130, borderColor: "black", alignSelf: "center", marginLeft: 10, marginBottom: 20 }}>
                    <TouchableOpacity onPress={aksiiqoiooooqoq} style={{ backgroundColor: "black", width: 125, height: 40, borderRadius: 20, }} >
                        <Text style={{ textAlign: "center", marginTop: 8, fontSize: 17, color: "white" }}>Book now</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    title: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
    },

    text: {
        textAlign: 'left',
        width: 230,
        fontSize: 16,
        color: "#000"
    }
});