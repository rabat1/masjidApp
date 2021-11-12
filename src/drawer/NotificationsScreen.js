import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';

export function NotificationsScreen(props){
    return(
                        <SafeAreaView style={{flex:1}} >
                        <CustomHeader title='Notification'  navigation={props.navigation} />
                        <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
                         <Text>Notificationssss </Text>
                        
                         </View>
                       </SafeAreaView>
                      
    )
}
