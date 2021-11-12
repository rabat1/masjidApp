import React,{useState,useEffect} from 'react';
import { TextInput,ScrollView,StyleSheet,} from 'react-native';
import { ListItem,Avatar} from 'react-native-elements';
import {CustomHeader} from '../index';


export function MasjidList(props){

const [list,setList] = useState([]);
const[data,setData] = useState([]);
useEffect(() => {
let listmake = ['Masjid-e-Aqsa','Masjid-e-Mubeen','Masjid-e-Bilal','Masjid-e-Madani','Masjid-e-Rizwan','Masjid-e-Ibrahim'];
setList(listmake);
},[]);
const handleChange = text=>{
    const newData = list.filter(item =>{
        if(item.indexOf(text) <= -1)
    {
    }
    else{
             return item.indexOf(text) > -1;
            }
      });
      console.log(newData);
      setData(newData);
}
return (
      <ScrollView>
        <CustomHeader title='Masjid-list'  navigation={props.navigation} />
  
        <TextInput style = {styles.TextInput} placeholder = "Enter masjid name to search" onChangeText={text => handleChange(text)}/>
            {data.length === 0 ? list.map(elem=>{
        return (
            <ListItem  key={list.indexOf(elem) } bottomDivider onPress={()=>{props.navigation.navigate('GeneralDetails',{masjidName:elem});}}  >
                <Avatar rounded source={{uri:"https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
                }}
                />

                <ListItem.Content style = {{display: 'flex'}} >
                    <ListItem.Title >{elem}</ListItem.Title>
                </ListItem.Content>

                <Avatar
                rounded
                source={{
                    uri:"https://i.pinimg.com/originals/1f/a9/b8/1fa9b8dbd4d97b18104bdbdde35af2dd.jpg"
                }}
                />

                </ListItem>
            );
        }) : data.map(elem=>{
            return (
                <ListItem key={list.indexOf(elem) }
                bottomDivider>
                {/* <ListItem.Chevron /> */}
                <Avatar
                rounded
                source={{
                    uri:"https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk="
                }}
                />

                <ListItem.Content>
                    <ListItem.Title>{elem}</ListItem.Title>
                </ListItem.Content>
                <Avatar
                rounded
                source={{
                    uri:"https://i.pinimg.com/originals/1f/a9/b8/1fa9b8dbd4d97b18104bdbdde35af2dd.jpg"
                }}
                />

                </ListItem>
 );
        })
        }

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
   }}
);








//export function MasjidList(props){
//import {CustomHeader} from '../index';

//<CustomHeader title='Notification'  navigation={props.navigation} />
                        