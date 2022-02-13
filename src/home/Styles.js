import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen');

export const PADDING = width * .05
export const SPACING = height * .01

const HomeStyles = {
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    banner: {
        backgroundColor: '#deedf7',
        padding: PADDING,
        // backgroundColor: 'orange'
    },
    topButtons: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        backgroundColor: '#deedf7',
        paddingHorizontal: PADDING,
        paddingTop: PADDING,
    },
    category: {
        paddingVertical: SPACING,
    },
    categoriesCard: {
        paddingVertical: SPACING,
        alignItems: 'center',
    },
    shadow: {
        shadowRadius: 5,
        shadowOpacity: .3,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 0 }
    },
    recommended: {
        paddingTop: SPACING,
        paddingHorizontal: PADDING,
        flex: 1,
    },
    recommendedCard: {
        flexDirection: 'row',
        marginBottom: PADDING,
    }
}

const GetStartStyles = {
    container: {
        backgroundColor: "#deedf7",
        flex: 1,
    },
}


const Form = {
    container: {
        backgroundColor: 'teal',
        flex: 1,
    }
}

export const homeStyles = StyleSheet.create(HomeStyles);
export const getStartStyles = StyleSheet.create(GetStartStyles);
export const formStyles = StyleSheet.create(Form);