import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

const LoginStyles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        flex: 1
    },
    inputBox: {
        width: width * .9,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15
    },
    loginButton: {
        width: width * .9,
        backgroundColor: '#001399',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

const SignupStyles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'teal',
        flex: 1
    }
}

const ResetStyles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        flex: 1
    }
}

export const loginStyles = StyleSheet.create(LoginStyles)
export const signupStyles = StyleSheet.create(SignupStyles)
export const resetStyles = StyleSheet.create(ResetStyles)