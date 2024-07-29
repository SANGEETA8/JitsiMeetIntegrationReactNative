import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity,View } from "react-native";
import { StyleSheet } from "react-native";

const Home =()=>{
    const navigation = useNavigation();
    return(
        <View style ={styles.home}>
            <Text style={[styles.text,{marginTop:10,fontSize:30}]}>Welcome!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Meeting')}
                style={styles.button}>
                <Text style={[styles.text,{color:'white',fontSize:18}]}> Join Now </Text>
             </TouchableOpacity>
             <Image source={require('../assests/images/jitsi-meet.jpg')} style={styles.img}/>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'white',
    },
    text:{
        fontWeight:'600',
        alignSelf:'center',
        justifyContent:'center',
    },
    button:{
        height:40,
        width:150,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:25,
        backgroundColor:'#2596BE',
        marginTop:30
    },
    img:{
        width:400,
        height:500,
        marginTop:30
    }
})