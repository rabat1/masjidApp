import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {IMAGE} from './src/constants/image';
export function CustomHeader(props){
  return(
    <View style={{flexDirection: 'row', height:50}}>
                <View style={{flex:1,justifyContent:'center'}}>
               
              {
                props.isHome?
                <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                  <Image style={{width:30, height:30, marginLeft:7}}
                source={IMAGE.ICON_MENU}
                  />
                </TouchableOpacity>
                :
                <TouchableOpacity style={{flexDirection: 'row', alignContent:'center'}}
                onPress={()=>props.navigation.goBack()}
                >
         <Image style={{width:25, height:25, marginLeft:7}}
                  source={IMAGE.ICON_BACK}
                  resizeMode='contain'
                  />
                  <Text>Go Back</Text>
                </TouchableOpacity>
        
              }
              </View>
                
                <View style={{flex:1.5,justifyContent:'center'}}> 
                <Text style={{textAlign:'center'}}>{props.title}</Text>
                </View>
               <View style={{flex:1}}></View>
        
            </View>
  )
}
