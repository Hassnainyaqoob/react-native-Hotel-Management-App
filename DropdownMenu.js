import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

export const DropdownMenu = ({ itemsArray, onChangeHandle, fieldName, placeholder }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    console.log({ value })
    const [items, setItems] = useState([...itemsArray]);

    // let seuccesfuncion = (value) => {


    // }


    useEffect(() => {


        onChangeHandle({ id: fieldName, value })
        // console.log(value)


    }, [value])


    return (

        <View>
            <DropDownPicker
                style={{
                    marginBottom: 135
                }}
                selectedItemContainerStyle={{
                    backgroundColor: "lightgray",
                }}

                placeholder={placeholder}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    )
}


const styles = StyleSheet.create({})