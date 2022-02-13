import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { getStartStyles } from './Styles';

const GetStart = () => {
    return (
        <>
            <SafeAreaView style={{ backgroundColor: "#deedf7", }} />
            <View style={getStartStyles.container}>
                <Text>GetStart</Text>
            </View>

        </>
    )
}

export default GetStart