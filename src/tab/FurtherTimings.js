import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class FurtherTimings extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
            <CustomHeader title='Settings-Details'  navigation={this.props.navigation} />
            <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
             <Text>Further Timings details! </Text>
            
             </View>
           </SafeAreaView>
           
          );
    }
}