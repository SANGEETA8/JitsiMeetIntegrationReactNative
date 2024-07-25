import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Home =()=>{
    return(
        <View style ={styles.home}>
            <Text style={styles.text}>Welcome!!</Text>
            <TouchableOpacity
                color="blue"
                onPress={() => navigation.navigate('Meeting')}
                style={{height: 32, width: 32}}>
                <Text style={styles.text}> Join Now </Text>
             </TouchableOpacity>
        </View>
    )
}

export default Home;

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
        color:'Black',
        justifyContent:'center',
        alignSelf:'center',
        width:'50%'
    }
})