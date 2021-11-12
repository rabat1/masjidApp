import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class Details extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
             <CustomHeader title='Details' isHome={true} navigation={this.props.navigation}/>
             <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
              <Text>Details! </Text>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('furtherDetail')}>
                <Text>Further Detail</Text>
              </TouchableOpacity>
              </View>
            </SafeAreaView>
          );
    }
}