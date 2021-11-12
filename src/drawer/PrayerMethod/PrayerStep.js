import React from 'react';
import {View, Text,StyleSheet,Image,useWindowDimensions, ScrollView} from 'react-native';

const PrayerStep = ({item}) => {
    const {width}= useWindowDimensions(); //resize se pehle width, lik saktay hain image mn
    return (
        <ScrollView>
          <View style={[styles.container,{width}]}> 
          
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        
        <Image source={item.image}  style={[styles.image,{ resizeMode:'contain'}]}/>
        <View style={{flex:0.3}}>
            
           </View>
            
        </View>
        </ScrollView>
    )
}

export default PrayerStep;
const styles= StyleSheet.create({
    container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
    },
    image:{
        flex:0.7,
        justifyContent:'center',
        width:300,
    },
    title:{
        fontSize:18,
        borderBottomColor:'#df7861',
        borderBottomWidth:1,
        marginBottom:16,
        color:'#df7861',
        textAlign:'center',
        paddingHorizontal:10
    },
    
    description:{
        fontSize:18,
        color:'grey',
        textAlign:'center',
        paddingHorizontal:64,
    },

})
