import { AsyncStorage } from '@react-native-async-storage/async-storage';

const storeAccesToken = async (value) => {
    try {
        await AsyncStorage.setItem('accessToken', value);
    } catch (e) { console.log(e) }
}

const getAccessToken = async () => {
    try {
        const value = await AsyncStorage.getItem('accessToken');
    } catch (e) { console.log(e) }
}