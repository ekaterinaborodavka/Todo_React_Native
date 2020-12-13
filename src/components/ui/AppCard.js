import React from 'react'
import { View, StyleSheet }  from 'react-native'

export const AppCard = props => {
    return (
        <View style={ { ...styles.default, ...props.style } }>
            { props.children }
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        borderRadius: 10,
        elevation: 8,
    }
})
