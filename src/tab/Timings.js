import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class Timings extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
            <CustomHeader title='Settings' isHome={true} navigation={this.props.navigation} />
            <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
             <Text>Timings </Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('SettingDetail')}>
                <Text>Further Timings Details</Text>
              </TouchableOpacity >
             </View>
           </SafeAreaView>
          );
    }
}