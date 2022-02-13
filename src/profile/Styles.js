import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

const ProfileStyles = {
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
    }
}

export const profileStyles = StyleSheet.create(ProfileStyles);