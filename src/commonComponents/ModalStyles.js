
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');


export const PADDING = width * .05
export const SPACING = height * .01

const modalStyle = {
    centeredView: {

    },
    modalInside: {
        width: width,
        paddingHorizontal: PADDING,
        height: height * .9,
        backgroundColor: "#deedf7",
    },
    modalView: {
        backgroundColor: "#deedf7",
        alignItems: "center",
        height: height,
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonOpen: {
        backgroundColor: "gray",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        padding: 5,
        paddingHorizontal: 10,
        alignSelf: 'flex-end',
        borderRadius: 5,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

}

export const styles = StyleSheet.create(modalStyle);