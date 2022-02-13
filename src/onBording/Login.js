import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginStyles } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess } from '../redux/AuthenticationSlice';
import { fetchLogin } from '../api/userAPI';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('dfdd@gmail.com');
    const [password, setPassword] = useState('Manakamana123');
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.authentication.isLoading)



    const loginHandler = async () => {
        const data = { email: email, password: password }

        dispatch(loginRequest());
        const response = await fetchLogin(data)

        if (response.status === "success") {
            dispatch(loginSuccess())

            const accessToken = JSON.stringify(response.accessJWT)
            const refreshToken = JSON.stringify(response.refreshJWT)
            setAccessToken(accessToken)
            setRefreshToken(refreshToken)

            saveTokens()
        }
    }


    const saveTokens = async () => {
        try {
            await AsyncStorage.setItem('accessToken', accessToken)
        } catch (err) {
            console.log(err)
        }

        try {
            await AsyncStorage.setItem('refreshToken', refreshToken)
        } catch (err) {
            console.log(err)
        }
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
