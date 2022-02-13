import { View, Text, Button, SafeAreaView, StatusBar, Image, ImageBackground, TouchableWithoutFeedback, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import { homeStyles, PADDING, SPACING } from './Styles';
import { Modal } from '../commonComponents'
import Icon from 'react-native-vector-icons/Ionicons'

import banner from '../assets/homeBanner.png'

const { width, height } = Dimensions.get('screen');


const Home = ({ navigation, props }) => {
    const CATEGORY_DATA = [
        {
            id: '00',
            title: "Cleaning",
            img: 'https:cdn-icons-png.flaticon.com/512/147/147140.png'
        },
        {
            id: '01',
            title: "Repairing",
            img: 'https:cdn-icons-png.flaticon.com/512/147/147140.png'
        },
        {
            id: '02',
            title: "Pest",
            img: 'https:cdn-icons-png.flaticon.com/512/147/147140.png'
        },
        {
            id: '03',
            title: "Painting",
            img: 'https:cdn-icons-png.flaticon.com/512/147/147140.png'
        },
        {
            id: '04',
            title: "Laundry",
            img: 'https:cdn-icons-png.flaticon.com/512/147/147140.png'
        },
    ]

    const RECOMMENDED_DATA = [
        {
            id: '00',
            title: 'Studio Apartment',
            price: '250',
            rating: '4.1',
            offer: '30%',
            img: 'https://www.asilsera.com/images/haberler/bir-kadin-icin-temiz-dunyanin-anlami.jpg',
        },
        {
            id: '01',
            title: 'One Bed Unit',
            price: '250',
            bedroom: '1',
            bathroom: '1',
            offer: '20%',
            rating: '4.0',
            img: 'https://www.asilsera.com/images/haberler/bir-kadin-icin-temiz-dunyanin-anlami.jpg',
        },
        {
            id: '03',
            title: 'Two Bed Unit',
            price: '450',
            bedroom: '3',
            offer: '20%',
            bathroom: '2',
            rating: '4.1',
            img: 'https://www.asilsera.com/images/haberler/bir-kadin-icin-temiz-dunyanin-anlami.jpg',
        },
        {
            id: '04',
            title: 'Three Bed Unit',
            price: '450',
            offer: '10%',
            bedroom: '3',
            bathroom: '2',
            rating: '4.1',
            img: 'https://www.asilsera.com/images/haberler/bir-kadin-icin-temiz-dunyanin-anlami.jpg',
        },
    ]

    const bannerImage = 'https://static.vecteezy.com/system/resources/previews/003/416/992/large_2x/isometric-industrial-cleaning-service-workers-equipment-remove-carpet-free-vector.jpg'

    const DrawerButton = () => {
        return (
            <View style={{}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ width: 8, height: 8, backgroundColor: '#0C3469', borderRadius: 2, marginRight: 4 }} />
                    <View style={{ width: 8, height: 8, backgroundColor: '#6088bc', borderRadius: 2, }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4, }}>
                    <View style={{ width: 8, height: 8, backgroundColor: '#0C3469', borderRadius: 2, marginRight: 4 }} />
                    <View style={{ width: 8, height: 8, backgroundColor: '#0C3469', borderRadius: 2, }} />
                </View>
            </View>
        )
    }

    const Categories = ({ title, id, img }) => {
        return (
            <>

                <View style={homeStyles.categoriesCard}>
                    <View style={[homeStyles.shadow, { backgroundColor: 'white', padding: 10, borderRadius: 50, }]}>
                        <Image style={{ width: 45, height: 45, borderRadius: 50, }} source={{ uri: img }} />
                    </View>
                    <Text style={{ color: '#0C3469', paddingTop: 5 }}>{title}</Text>
                </View>

            </>
        )
    }

    const RecommendedCard = ({ id, title, img, description, rating, price, offer }) => {
        return (
            <View style={homeStyles.recommendedCard}>
                <Image style={{ width: '35%', height: 100, }} source={{ uri: img }} />
                <View style={{ backgroundColor: '#F7F8FA', width: '65%', padding: SPACING * 1.5, justifyContent: 'space-between' }}>

                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Icon name='ios-star' color='#FCC943' />
                                <Text style={{ color: '#0C3469', fontSize: 12, fontWeight: '600' }}> {rating}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ color: '#8c9aad', fontSize: 10, fontWeight: '500' }}>Off </Text>
                                <Text style={{ color: '#8c9aad', fontSize: 10, fontWeight: '500' }}> {offer}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: '600', color: '#0C3469', paddingTop: 5 }}>{title}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ fontSize: 12, color: '#0C3469', paddingTop: 5 }}>$ </Text>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#0C3469', paddingTop: 5, }}>{price}</Text>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <>
            <SafeAreaView style={{ backgroundColor: '#deedf7', }} />
            <View style={homeStyles.container}>
                <View style={homeStyles.topButtons}>
                    <DrawerButton />
                    <Image style={{ width: 35, height: 35, borderRadius: 50, borderWidth: 1.5, borderColor: 'white', }} source={{ uri: 'https:cdn-icons-png.flaticon.com/512/147/147140.png' }} />
                </View>
                <View style={homeStyles.banner}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ width: '60%', height: '100%', paddingTop: 10, }}>
                            <Text style={{ fontSize: 20, color: '#FFAE5A', fontWeight: '400' }}>Hi! Jawad</Text>
                            <Text style={{ fontSize: 25, fontWeight: '600', color: '#0C3469', paddingTop: 10 }}>What service do you need?</Text>



                            <Modal modalType='banner'>
                                <View style={{ backgroundColor: '#FFAE5A', padding: 10, borderRadius: 10, marginTop: 10, width: "50%" }}>
                                    <Text style={{ color: '#0C3469', fontWeight: '500' }}>Get Start</Text>
                                </View>
                            </Modal>



                        </View>
                        <Image source={banner} resizeMode="cover" style={{ width: 200, height: 200, marginLeft: -30, marginBottom: -50 }} />
                    </View>
                </View>


                <View style={homeStyles.category}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#0C3469', paddingHorizontal: PADDING, }}>Category</Text>
                    <FlatList
                        contentContainerStyle={{ width: '110%', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: PADDING, }}
                        data={CATEGORY_DATA}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <Modal modalType={item.title} >
                                    <Categories id={item.id} title={item.title} img={item.img} />
                                </Modal>
                            )
                        }}

                    />
                </View>


                <View style={homeStyles.recommended}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#0C3469', paddingBottom: SPACING }}>Recommended</Text>

                    <FlatList
                        data={RECOMMENDED_DATA}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <Modal modalType={'recommended'}>
                                    <RecommendedCard id={item.id} title={item.title} img={item.img} rating={item.rating} offer={item.offer} price={item.price} description={item.description} />
                                </Modal>
                            )
                        }}

                    />
                </View>
            </View>
        </>
    )
}

export default Home