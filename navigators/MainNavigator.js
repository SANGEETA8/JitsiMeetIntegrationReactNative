import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../component/Home";
import Meeting from "./Meeting";

const Stack = createStackNavigator();

const MainNavigator =()=>{
    return(
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Meeting" component={Meeting}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainNavigator;

const styles = StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'White'
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        color:'Black'
    }
})