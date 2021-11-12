import React, {useEffect, useRef} from 'react';
import { Button,StyleSheet,View,TouchableOpacity,Animated } from 'react-native';
import Svg,{G,Circle} from 'react-native-svg';


const NextButton = ({percentage,scrollTo}) => {
    const size= 128;
    const strokeWidth = 2;
    const center = size/2;
    const radius = size/2-strokeWidth/2;
    const circumference = 2 * Math.PI * radius;
    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef= useRef(null);
    const animation = (toValue)=>{
        return Animated.timing(progressAnimation,{
            toValue,
            duration:250,
            useNativeDriver:true
        }).start()
    };
    useEffect(()=>{
        animation(percentage);
    },[percentage]);
    useEffect(()=>{
        progressAnimation.addListener((value)=>{
            const strokeDashoffset= circumference-(circumference* value.value)/100;
        if(progressRef?.current) {
            progressRef.current.setNativeProps({
                strokeDashoffset
            })
        }
        
        },[percentage]);
        return ()=>{
            progressAnimation.removeAllListeners()
        };
    },[]);
    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
            <G rotation='-90' origin={center} >
           
                <Circle stroke='#d4e2d4' cx={center} cy={center} r={radius} strokeWidth={strokeWidth} 
                />
                <Circle 
                ref={progressRef}
                stroke='#df7861'
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                
                
                />
            </G>
            </Svg>
            <TouchableOpacity  style={styles.button} activeOpacity={0.6}>
                    <Button  onPress={scrollTo} title='Next' size={32} color='#df7861' />
            </TouchableOpacity>
            
        </View>
    )
}

export default NextButton;
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20
    },
    button:{
        position:'absolute',
        backgroundColor:'#fff',
        borderRadius:100,
        padding:20,
    
    },
  })