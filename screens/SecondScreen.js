import React from 'react'
import { View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from '../theme/Theme';

export default function SecondScreen() {
    const state = useSelector(state => state.getImages)
    const openedImg = state.images.find((item)=>item.id===state.id)
    
    return (
        <View>
            <Image
            style={styles.imgSecondScreen}
            source={{
                uri: openedImg.urls.small
            }}/>
        </View>
    )
}
