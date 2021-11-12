import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class RequestScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
            <CustomHeader title='Request' isHome={true} navigation={this.props.navigation} />
            <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
             <Text>Requests </Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('requestdetails')}>
                <Text>Further Requests Details</Text>
              </TouchableOpacity >
             </View>
           </SafeAreaView>
          );
    }
}