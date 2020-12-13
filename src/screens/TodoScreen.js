import React, { useState, useContext } from 'react'
import { View, StyleSheet, Dimensions }  from 'react-native'
import { FontAwesome, AntDesign } from 'expo-vector-icons'

import { EditModal } from '../components/EditModal'
import { AppButton } from '../components/ui/AppButton'
import { AppCard } from '../components/ui/AppCard'
import { AppTextBold } from '../components/ui/AppTextBold'
import { THEME } from '../theme'
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const TodoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const [modal, setModal] = useState(false)

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = async (title) => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal visible={ modal }
                    onCancel={ () => setModal(false) }
                    value={ todo.title }
                    onSave={ saveHandler } />
            <AppCard style={ styles.card }>
                <AppTextBold style={ styles.title }>{ todo.title }</AppTextBold>
                <View style={ styles.buttonEdit }>
                    <AppButton onPress={ () => setModal(true) } >
                        <FontAwesome name='edit' size={ 20 } />
                    </AppButton>
                </View>
            </AppCard>
            <View style={ styles.buttons }>
                <View style={ styles.button }>
                    <AppButton color={ THEME.GREY_COLOR } 
                        onPress={ () => changeScreen(null) } >
                        <AntDesign name='back' size={ 20 } color='#fff' />
                    </AppButton>
                </View>
                <View style={ styles.button }>
                    <AppButton color={ THEME.DANGER_COLOR } 
                        onPress={ () => removeTodo(todo.id) } >
                            <FontAwesome name='remove' size={ 20 } color='#fff' />
                    </AppButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: Dimensions.get('window').width / 3
    },
    title: {
        fontSize: 17
    },
    card: {
        marginBottom: 20,
        padding: 15,
    },
    buttonEdit: {
        width: '25%'
    }
})