import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity,View } from "react-native";
import { StyleSheet } from "react-native";

const Home =()=>{
    const navigation = useNavigation();
    return(
        <View style ={styles.home}>
            <Text style={[styles.text,{marginTop:10}]}>Welcome!!</Text>
            <TouchableOpacity
                color="blue"
                onPress={() => navigation.navigate('Meeting')}
                style={styles.button}>
                <Text style={styles.text}> Join Now </Text>
             </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'White'
    },
    text:{
        fontSize:18,
        fontWeight:'500',
        alignSelf:'center',
        justifyContent:'center'
       
    },
    button:{
        height:32,
        width:150,
        alignSelf:'center',
        borderRadius:12,
        backgroundColor:'blue',
        marginTop:40

    }
})