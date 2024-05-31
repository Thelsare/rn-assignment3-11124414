import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';


const Topframe1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topRectangle}>
            <Text style={styles.text1}>Hello, Devs</Text>
            <Text style={styles.text2}>14 Tasks Today</Text>

            
            </View>

            <View style={styles.imageBox}>

            <Image style={styles.profile} source={require('./person.png')}/>

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        position: 'relative',
        bottom: 330,
    },
    topRectangle:{
        width: 300,
        
    },
    text1:{
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 10,
        
    },
    text2:{
        color: 'black',
        fontSize: 15,
        paddingLeft: 10,
    },
    imageBox:{
        backgroundColor: 'white',
        width: 60,
        height: 60,
        position: 'absolute',
        right: 10,
        top: 8,
        marginRight: 3,
        borderRadius: 50,
    },
    profile:{
        width: 60,
        height: 60,
        bottom: 5
    }
    
    

});




export default Topframe1;