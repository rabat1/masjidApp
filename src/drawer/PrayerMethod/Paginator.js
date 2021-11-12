import React from 'react';
import {View, Text, StyleSheet,FlatList,Animated,useWindowDimensions} from 'react-native';


const Paginator = ({data, scrollX}) => {
    const {width}= useWindowDimensions();
    return (
        <View style={{flexDirection:'row', height:60,flexWrap:'wrap',alignContent:'center',justifyContent:"center"}}>
            {data.map((_,i)=>{
                const inputRange=[(i-1)*width,i*width,(i+1)*width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',

                });
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3],
                    extrapolate:'clamp'
                })

                return <Animated.View style={[styles.dot,{width:dotWidth,opacity,},]} key={i.toString()} />
            })}
               
        </View>
            
        
    )
}

export default Paginator;
const styles = StyleSheet.create({
    dot:{
   height:10,
   borderRadius:5,
   backgroundColor:'#df7861',
   marginHorizontal:3,
    }
  })
//https://www.youtube.com/watch?v=SLbay2efwso&list=PLqtWgQ5BRLPv6gF7n89p8aX7I1lxDqEYL&index=3