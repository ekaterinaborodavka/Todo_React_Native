import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Alert, Keyboard }  from 'react-native'
import { AntDesign } from 'expo-vector-icons'
import { THEME } from '../theme'

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Todo title cannot be empty')
        }
    }
    return (
        <View style={ styles.block }>
            <TextInput 
                style={ styles.input }
                onChangeText={ text => setValue(text) }
                value={ value }
                placeholder='Enter the name of todo'
                autoCorrect={ false }
                autoCapitalize='none'
            />
            <View style={ styles.button }>
                <AntDesign.Button onPress={ pressHandler } name='pluscircleo'>
                    Add
                </AntDesign.Button>
                {/* <Button title='Add' onPress={ pressHandler } /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10,
    },
    button: {
        width: '25%'
    }
})