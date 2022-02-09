import React, { useState } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { storeAccesToken, getAccessToken } from '../api/localStorage'

import { loginStyles } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess } from '../redux/AuthenticationSlice';
import { fetchLogin } from '../api/userAPI';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('dfdd@gmail.com');
    const [password, setPassword] = useState('Manakamana123');
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.authentication.isLoading)

    const loginHandler = async () => {
        const data = { email: email, password: password }

        dispatch(loginRequest());
        const response = await fetchLogin(data)
        // console.log('promise', response.accessJWT)



        if (response.status === "success") {
            dispatch(loginSuccess())

            const accessToken = response.accessJWT;
            const refreshToken = response.refreshJWT


        }
        storeAccesToken(accessToken)
        getAccessToken()

    }

    return (
        <View style={loginStyles.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} style={loginStyles.inputBox} />
            <TextInput placeholder="Password" onChangeText={setPassword} style={loginStyles.inputBox} secureTextEntry={true} />

            <TouchableWithoutFeedback onPress={loginHandler}>
                <View style={loginStyles.loginButton}>
                    {isLoading ? <ActivityIndicator /> : <Text style={{ color: 'white', fontWeight: '600' }}>Login</Text>}
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('ForgotPassword')}>
                <View style={loginStyles}>
                    <Text>Forgot password?</Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    );
};

export default Login;
