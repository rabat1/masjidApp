import React, { useEffect,useState } from 'react';
import {Text,View,Button,TextInput,StyleSheet,Image} from 'react-native';
import {CustomHeader} from '../../index';

export function DuaaDetails(props) {

    const [duaa,setDuaa]= useState({name:'', details:''});
    const [show,setShow] = useState(false);

    const setDuaaDetails = async (duaa)=>{
        setDuaa({
            name:duaa.title,
            details: duaa.description,
           
        });
    };

   useEffect(()=>{
        setDuaaDetails(props.route.params.duaa);
            },[]);

    return (
        <View >
            <CustomHeader title='Duaa-Details'  navigation={props.navigation} />
            <View style={styles.container}>
          <Text style={styles.textHeading}>{duaa.name}</Text>
            
            
            <Text style={styles.textTranslation} onPress={()=>setShow(!show)}>{show?'Hide translation':'Show Translation'}</Text>
           {show && <Text style={styles.text}>{duaa.details}</Text>}
            
           </View>
        </View>
);
}
const styles = StyleSheet.create({
    textHeading:{
        textAlign:'center',
        marginTop:20,
        fontSize:22,
        color:'#df7861',
        },
    container:{
        backgroundColor:'#fcf8e8',
    },
    textTranslation:{
        margin:10,
        fontSize:17,
        textAlign:'center',
        borderBottomColor:'purple',
        color:'black',
        borderBottomWidth:1,
        borderColor:'pink',
        borderWidth:1,
        borderRadius:30
    },
    textTimings:{
        textAlign:'center',
        fontSize:15,
        marginTop:10
    },
    Image:{
        height:300,
        width:360,
        marginTop:10
    }
});
