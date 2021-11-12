import React,{Component} from 'react';
import { Text, View,SafeAreaView,Image, TouchableOpacity, ScrollView,StyleSheet } from 'react-native';
import {IMAGE} from './constants/image'
export class CustomDrawerContent extends Component{
render(){
    return(
        <SafeAreaView style={styles.Container}>
          <View style={styles.SubContainer}>
            <Image source={IMAGE.ICON_PROFILE}
            style={styles.Image}
            />
          </View>

          <ScrollView style={styles.ScrollView}>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
          <View style={styles.ViewText}>
              <Image source={require('./images/clock.png')} style={{width:20, height:20}} />
              <Text style={styles.TextInput}>Home</Text>
          </View>
    </TouchableOpacity >

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
            <View style={styles.ViewText}>
              <Image source={require('./images/clock.png')} style={{width:20, height:20}} />
              <Text style={styles.TextInput}>Login</Text>
          </View>
    </TouchableOpacity >

    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AccountDetails')}>
            <View style={styles.ViewText}>
              <Image source={require('./images/clock.png')} style={{width:20, height:20}} />
              <Text style={styles.TextInput}>Account-Details</Text>
          </View>
    </TouchableOpacity >

   <TouchableOpacity onPress={()=>this.props.navigation.navigate('MasjidList')}>
     <View style={styles.ViewText}>
              <Image source={require('./images/clock.png')} style={{width:20, height:20}} />
              <Text style={styles.TextInput}>Show Masjid List</Text>
          </View>
     </TouchableOpacity >



    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PrayerMethod')}>
            <View style={styles.ViewText}>
              <Image source={require('./images/clock.png')} style={{width:20, height:20}} />
              <Text style={styles.TextInput}>Prayer-Method</Text>
          </View>
    </TouchableOpacity >


    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Duaa')}>
            <View style={styles.ViewText}>
              <Image source={require('./images/clock.png')} style={{width:20, height:20}} />
              <Text style={styles.TextInput}>Duaa</Text>
          </View>
    </TouchableOpacity >

          </ScrollView>
        </SafeAreaView>
      )
}
};
const styles = StyleSheet.create({
  TextInput:{
    marginLeft:18,
    fontSize:16,
     borderBottomWidth:2,
     width:'73%',
    //  textAlign:'center',
     borderBottomColor:'#008080'
  },
  Image:{
    height:50,width:50,borderRadius:60
  },
  Container:{
    flex: 1,
    //backgroundColor:'#90EE90'  
    //neechay wala part color
    
  },
  ViewText:{
    flexDirection: 'row',
    // borderBottomWidth:2, image ke nichay bhi border
    marginTop:14
  },
  SubContainer:{
    height:150, alignItems:'center', justifyContent:'center',
    backgroundColor:'#008080'
  }, 
  ScrollView:{
    marginTop:20,
    marginLeft:5,
  }
}
);