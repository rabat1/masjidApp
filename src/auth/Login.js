import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class LoginScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
            <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
             <Text>Login Screen </Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('HomeApp')}>
                <Text>Login</Text>
              </TouchableOpacity >
        
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                <Text>Register</Text>
              </TouchableOpacity >
             </View>
           </SafeAreaView>
          );
    }
}