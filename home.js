import React, { useEffect, useState } from "react";
import { Button, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Card from "../components/card";
import Footer from "../components/footer";
// import database from '@react-native-firebase/database';
// import { Picker } from "@react-native-picker/picker";
import DropDownPicker from 'react-native-dropdown-picker';
import { DropdownMenu } from "../components/DropdownMenu";




const hotelRooms = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Marriot Hotel',
    price: 10000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'lahore'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Museiam Hotel',
    price: 8000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner ',
    city: 'Islamabad'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Kolachi Hotel',
    price: 8000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Green Line Hotel',
    price: 12000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Nice Hotel',
    price: 10000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Second Wife Hotel',
    price: 10000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Luxury Hotel',
    price: 8000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Star Hotel',
    price: 10000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Five Star Hotel',
    price: 12000,
    rooms: 2,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Islamabad'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Punjab Hotel',
    price: 12000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  }, {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Middle Hotel',
    price: 8000,
    rooms: 1,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Karachi'
  }, {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL94XqGNX-A2MlW9SeAAQyOnxA5KWMxo2WA&usqp=CAU',
    name: 'Ten Star Hotel',
    price: 12000,
    rooms: 3,
    services: 'breakfasts, Lunch, Dinner',
    city: 'Lahore'
  },
]

export default function Home({ navigation, route }) {



  // console.log(value);

  // const [array, setArray] = useState([])
  const image = { uri: "https://wallpaper.csplague.com/wp-content/uploads/2019/11/1098478652bdb3242a9eb28f558d791f--the-maldives-resort-maldives.jpg" }
  const [pickerValue, setPickerValue] = useState("")
  const [filter, setFilter] = useState({ price: '8000' })
  const [dataArray, setDataArray] = useState(hotelRooms)



  const applyFilterHandle = () => {
    let filtered

    if (filter.price === '10000') {
      filtered = hotelRooms.filter((e) => e.price == 10000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())

    }
    else if (filter.price === '12000') {
      filtered = hotelRooms.filter((e) => e.price == 12000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())
    }

    else if (filter.price === '8000') {
      filtered = hotelRooms.filter((e) => e.price == 8000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())
    }


    else if (filter.price === '5000') {
      filtered = hotelRooms.filter((e) => e.price == 5000 && e.rooms == filter.rooms && e.city.toLocaleLowerCase() === filter.city.toLocaleLowerCase())
    }

    setDataArray(filtered)



    console.log('filtered ==============================>', filtered);
  }


  // let aplyFilterandle = () => {

  // }


  const onChangeHandle = (val) => {
    console.log('check value ==== >', val);
    const { id, value } = val
    setFilter({ ...filter, [id]: value })
  }

  return (

    <View style={{ flex: 1, backgroundColor: "white" }}>


      <ImageBackground source={image} style={{ width: "100%", height: "100%" }}>



        <ScrollView>

          <View style={{ backgroundColor: "black", borderRadius: 30, paddingVertical: 8, width: 280, alignSelf: "center", marginTop: 5 }}>

            <Text style={{ color: "darkorange", fontWeight: "normal", fontSize: 25, textAlign: "center" }} >All Cities Hotels</Text>
          </View>


          <View style={{ marginTop: 480, marginBottom: 26 }}>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>

              <Text style={{ color: "purple", fontWeight: "bold", fontSize: 32, textAlign: "center" }} >Luxury </Text>
              <Text style={{ color: "darkorange", fontWeight: "bold", fontSize: 32, textAlign: "center" }} >Hotels</Text>
            </View>
          </View>


          <View style={{ alignSelf: "center" }}>

            <Text style={{ color: "black", fontWeight: "bold", fontSize: 32, textAlign: "center" }} >Below the Crow Down </Text>
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 32, textAlign: "center" }} >Hotel</Text>
          </View>



          <View style={{ marginTop: 86, backgroundColor: "white", }}>


            <View style={{ flexDirection: 'row', flex: 1, marginTop: 44 }}>
              <View style={{ flex: 1, marginHorizontal: 3 }}>
                <DropdownMenu placeholder="Rooms" fieldName='rooms' onChangeHandle={onChangeHandle} itemsArray={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                ]} />
              </View >
              <View style={{ flex: 1, marginHorizontal: 3 }}>
                <DropdownMenu placeholder="City" fieldName='city' onChangeHandle={onChangeHandle} itemsArray={[

                  { label: 'Lahore', value: 'Lahore' },
                  { label: 'Karachi', value: 'Karachi' },
                  { label: 'Islamabad', value: 'Islamabad' },
                ]} />
              </View >
              <View style={{ flex: 1, marginHorizontal: 3 }}>
                <DropdownMenu placeholder="Price" fieldName='price' onChangeHandle={onChangeHandle} itemsArray={[
                  { label: '8000', value: '8000' },
                  { label: '10000', value: '10000' },
                  { label: '12000', value: '12000' },
                ]} />
              </View >
            </View>


            <View style={{ width: 130, borderColor: "black", alignSelf: "center", marginLeft: 10, marginBottom: 10 }}>
              <TouchableOpacity style={{ backgroundColor: "black", width: 125, height: 40, borderRadius: 20, }} onPress={applyFilterHandle}>
                <Text style={{ textAlign: "center", marginTop: 10, color: "white" }}>Search Hotel</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ backgroundColor: "black", width: 360, height: 2 }}>

          </View>


          {
            dataArray?.length > 0 && dataArray.map((room, index) => {
              return <View key={index}>
                <Card agay={navigation} data={room} />
              </View>
            })
          }

        </ScrollView>
        <View style={{ justifyContent: "flex-end" }}>

          <Footer data={navigation} />
        </View>
      </ImageBackground>
    </View>
  )
}