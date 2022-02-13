import { View, Text, Button, SafeAreaView, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './ModalStyles'
import { GetStarStack, BookingsFormStack } from '../home/HomeStack';

const ModalComponent = (props, { navigation, isVisibel, modalType, }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            {/* {console.log('Modal type', modalType)} */}
            <SafeAreaView />
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <SafeAreaView style={{ backgroundColor: "#deedf7", }} />
                    <View style={styles.modalView}>
                        <View style={styles.modalInside}>
                            <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}      >
                                <Text style={styles.textStyle}>close</Text>
                            </Pressable>
                            <GetStarStack />
                        </View>

                    </View>


                </Modal>

                <Pressable onPress={() => setModalVisible(true)}   >
                    {props.children}
                </Pressable>
            </View>
        </>
    )
}

export default ModalComponent