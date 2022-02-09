import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { resetStyles } from './Styles';


const ResetPassword = () => {

    return (
        <View style={resetStyles.container}>
            <Text>Reset password</Text>
        </View>
    );
};

export default ResetPassword;
