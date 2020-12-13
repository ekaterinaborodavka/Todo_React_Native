import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if(title.trim().length < 3){
            Alert.alert('Error!', `Mininal length of the title is 3 characters.
            Now ${title.trim().length} characters`)
        } else { 
            onSave(title)
        }
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal visible={ visible }
            animationType='slide'
            transparent={false}>
           <View style={ styles.wrap }>
               <TextInput style={ styles.input }
                    value={ title }
                    onChangeText={ setTitle }
                    placeholder='Enter the title of the todo'
                    autoCapitalize='none'
                    autoCorrect={ false }
                    maxLength={ 64 } />
               <View style={ styles.buttons }>
                   <View style={ styles.button }>
                        <AppButton onPress={ cancelHandler }
                                color={ THEME.DANGER_COLOR } >
                            Cancel
                        </AppButton>
                   </View>
                   <View style={ styles.button }>
                        <AppButton onPress={ saveHandler } >
                            Save
                        </AppButton>
                   </View>
               </View>
            </View> 
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
        width: '80%'
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '30%'
    }
})
