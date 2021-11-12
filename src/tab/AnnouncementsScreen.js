import React,{Component} from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity,ScrollView} from 'react-native';
import {CustomHeader} from '../index';
export class AnnouncementsScreen extends Component{
    render(){
        return (
            <SafeAreaView style={{flex:1}} >
            <CustomHeader title='Settings' isHome={true} navigation={this.props.navigation} />
            <View style={{flex:1, alignItems: 'center',justifyContent:'center' }}>
             <Text>AnnouncementsScreen </Text>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate('announcementsDetails')}>
                <Text>Further AnnouncementsScreen Details</Text>
              </TouchableOpacity >
             </View>
           </SafeAreaView>
          );
    }
}