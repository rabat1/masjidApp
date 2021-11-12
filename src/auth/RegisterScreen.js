import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class RegisterScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
            <CustomHeader title='Registration'  navigation={this.props.navigation} />
            <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
             <Text>Registration </Text>
            
             </View>
           </SafeAreaView>
          );
    }
}