import React, { useEffect,useState } from 'react';
import {Text,View,Button,TextInput,StyleSheet,Image} from 'react-native';
import {CustomHeader} from '../index';


export function GeneralDetails(props) {
    const [masjid,setMasjid] = useState({
            name:'',
            Address:'',
            url:'',
            Imam:'',
            prayertime:{fajr:'5:30', zhr:'6:00', asr:'7:30',maghrib:'8:00',isha:'9:00'},

    });
    const setMasjidDetails = async (name)=>{
        setMasjid({
            name:name,
            Address:'Abc road, karachi.',
            url:'masjidpic',
            Imam:'',
            prayertime:{fajr:'10:30', zhr:'6:00', asr:'7:30',maghrib:'8:00',isha:'9:00'},

        });

        };
   useEffect(()=>{
        setMasjidDetails(props.route.params.masjidName);
            },[]);
    return (
        <View>
             <CustomHeader title='General-Details'  navigation={props.navigation} />
  
            <Text style={styles.textHeading}>{masjid.name}</Text>
            <Text style={styles.textAddress}>{masjid.Address}</Text>
            <Image style={styles.Image}
        source={{
          uri: 'http://media1.santabanta.com/full1/Islam/Mosques/mosques-59a.jpg',
        }}
      />
            {Object.entries(masjid.prayertime).map(([key, value]) => {
            return (
              <Text style={styles.textTimings}>
                {key} : {value}
              </Text>
            );
          })}
        </View>
);
};
const styles = StyleSheet.create({
    textHeading:{
        textAlign:'center',
        marginTop:20,
        fontSize:20,
    },
    textAddress:{
        textAlign:'center',
        fontSize:15,
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
