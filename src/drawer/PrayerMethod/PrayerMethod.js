import React,{useState,useRef} from 'react';
import {View, Text, StyleSheet,FlatList,Animated,ScrollView,useWindowDimensions} from 'react-native';
import slides from './Slide';
import PrayerStep from './PrayerStep';
import {CustomHeader} from '../../index';
import NextButton from './NextButton';
import Paginator from './Paginator'

export function PrayerMethod(props){
  const {width}= useWindowDimensions();
  const [currentIndex,setCurrentIndex]= useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef=useRef(null);

  const viewableItemsChanged= useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig= useRef({viewAreaCoveragePercentThreshold:50}).current;

  const scrollTo=()=>{
    if(currentIndex < slides.length-1){
      slidesRef.current.scrollToIndex({index:currentIndex+1});
    }else{
      alert('You are Already on last slide');
    }
  }

  return (
    <ScrollView>
  <View style={styles.container}>
      <CustomHeader title='Prayer_method'  navigation={props.navigation} />
      <Text style={[styles.Maintitle, width]}>Prayer Method step by step</Text>
  
    <View style={{flex:3}}>

            <Paginator data={slides} scrollX={scrollX} /> 
            <NextButton scrollTo={scrollTo} percentage={(currentIndex+1)*(100/slides.length)} />
            
            <FlatList data={slides}
            renderItem={({item})=><PrayerStep item={item} />}
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor={(item)=>item.id}
            onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
                useNativeDriver:false,
                })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />

      </View>
    
  </View>
  </ScrollView>
);
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fcf8e8'
  },
  Maintitle:{
    fontWeight:'300',
    fontSize:24,
    borderBottomColor:'#df7861',
    borderBottomWidth:2,
    color:'#df7861',
    textAlign:'center',
    paddingHorizontal:10
},
})