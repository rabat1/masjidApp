import React,{useState,useEffect} from 'react';
import { View } from 'react-native';
import { TextInput,ScrollView,StyleSheet,Text} from 'react-native';
import { ListItem,Avatar} from 'react-native-elements';
import {CustomHeader} from '../../index';
import duaa from './DuaaObject';


export function Duaa(props){

const [list,setList] = useState([]);
let listmake = [];

useEffect(() => {

    duaa.map(function (record, i) {
        
          listmake.push(record);
         
    });
setList(listmake);
},[]);

return (
      <ScrollView >

        <CustomHeader title='Duaa-list'  navigation={props.navigation} />
        <View >
        <Text style={{textAlign:'center', fontSize:20, color:'#df7861'}}>Duaa</Text>
            {list.map(elem=>{
        return(
            <ListItem key={list.indexOf(elem) } bottomDivider onPress={()=>{props.navigation.navigate('DuaaDetails',{duaa:elem});}}  >
                <Avatar  source={{uri:"https://iconarchive.com/download/i66170/designbolts/religious-symbol/Dua.ico"
                }}
                />

                <ListItem.Content style = {{display: 'flex',}} >
                    <ListItem.Title >{elem.title}</ListItem.Title>
                </ListItem.Content>

                <Avatar
                rounded
                source={{
                    uri:"https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-512.png"
                }}
                />

                </ListItem>
          
             ) }) 
            
        }
      </View>
    </ScrollView>

);
}
const styles = StyleSheet.create({
   TextInput:{
    margin: 15,
    height: 50,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius:40,
    backgroundColor:'white',
   },
  
}
);








//export function MasjidList(props){
//import {CustomHeader} from '../index';

//<CustomHeader title='Notification'  navigation={props.navigation} />
                        