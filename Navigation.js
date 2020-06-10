import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import { useSelector } from 'react-redux'

const ImgNav = createStackNavigator();



export const ImgNavigation = () => {

    const state = useSelector(state => state.getImages)
    const openedImg = state.images.find((item)=>item.id===state.id)
   let name = 'Image'
   if(openedImg){
       name = openedImg.user.first_name
   }
    return (
        <ImgNav.Navigator
        screenOptions={
            {
                headerStyle: {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 7,
                    },
                    shadowOpacity: 0.43,
                    shadowRadius: 9.51,
                    elevation: 11,
                }
            }
        }>
            <ImgNav.Screen name="Main" component={MainScreen} 
            options={{
                title:'Gallety',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
            <ImgNav.Screen name={'Img'} component={SecondScreen} 
            options={{
                title:name,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}/>
        </ImgNav.Navigator>
    );
}