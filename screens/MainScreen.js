import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, FlatList, Image, TouchableHighlight } from 'react-native'
import { fetchImages, getIdOfImg } from '../store/actions/get'
import { styles } from './../theme/Theme'

const MainScreen = ({ navigation }) => {
    const state = useSelector(state => state.getImages)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImages())
    }, [])

    return (
        <View style={styles.containerMainScreen}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={state.images}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.imgContainerMainScreen}>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate('Img')
                                dispatch(getIdOfImg(item.id))
                            }}>
                                <Image
                                    style={styles.imgMainScreen}
                                    source={{
                                        uri: item.urls.small
                                    }}
                                />
                            </TouchableHighlight>
                            <Text style={styles.textMainScreen}>{item.user.first_name}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}


export default MainScreen
