import * as React from 'react';
import {Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CustomDrawerContent} from './src';
import {Details, FurtherDetail,Timings,FurtherTimings,RequestScreen,
  RequestDetailsScreen,AnnouncementsDetailsScreen,AnnouncementsScreen} from './src/tab';
import {GeneralDetails,Duaa,PrayerMethod,AccountDetails,MasjidList,DuaaDetails} from './src/drawer';
import {RegisterScreen,LoginScreen} from './src/auth'
import {IMAGE} from './src/constants/image'


const Tab = createBottomTabNavigator();
const navOptionHandler=()=>({
  headerShown:false
})
const StackDetails= createStackNavigator();

function DetailsStack(){
  return(
    <StackDetails.Navigator initialRouteName='details'>
      <StackDetails.Screen name='details' component={Details} options={navOptionHandler}/>
      <StackDetails.Screen name='furtherDetail' component={FurtherDetail} options={navOptionHandler}/>

    </StackDetails.Navigator>
  )
}

const StackTimings= createStackNavigator();

function TimingsStack(){
  return(
    <StackTimings.Navigator initialRouteName='timings'>
      <StackTimings.Screen name='timings' component={Timings} options={navOptionHandler}/>
      <StackTimings.Screen name='SettingDetail' component={FurtherTimings} options={navOptionHandler}/>

    </StackTimings.Navigator>
  )
}
const StackRequest= createStackNavigator();


function RequestStack(){
  return(
    <StackRequest.Navigator initialRouteName='request'>
      <StackRequest.Screen name='request' component={RequestScreen} options={navOptionHandler}/>
      <StackRequest.Screen name='requestdetails' component={RequestDetailsScreen} options={navOptionHandler}/>

    </StackRequest.Navigator>
  )
}

const StackAnnouncements= createStackNavigator();

function AnnouncementsStack(){
  return(
    <StackAnnouncements.Navigator initialRouteName='announcements'>
      <StackAnnouncements.Screen name='announcements' component={AnnouncementsScreen} options={navOptionHandler}/>
      <StackAnnouncements.Screen name='announcementsDetails' component={AnnouncementsDetailsScreen} options={navOptionHandler}/>

    </StackAnnouncements.Navigator>
  )
}



 function TabNavigator(){
   return(
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Details') {
        iconName = focused
          ? IMAGE.ICON_MASJID
          : IMAGE.ICON_MASJIDFILL
      } else if (route.name === 'Timings') {
        iconName = focused ? IMAGE.ICON_TIME:IMAGE.ICON_TIMEFILL;
      }  else if (route.name === 'Announcements') {
        iconName = focused ? IMAGE.ICON_ANNOUNCEMENTSFILL:IMAGE.ICON_ANNOUNCEMENTS;
      }  else if (route.name === 'Request') {
        iconName = focused ? IMAGE.ICON_REQUESTFILL:IMAGE.ICON_REQUEST;
      } 
      

      // You can return any component that you like here!
      return <Image source={iconName} style={{width:20, height:20}}/>;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'green',
    inactiveTintColor: 'black',
  }}
  
  >
    <Tab.Screen name="Details" component={DetailsStack} />
    <Tab.Screen name="Timings" component={TimingsStack} />
    <Tab.Screen name="Announcements" component={AnnouncementsStack} />
    <Tab.Screen name="Request" component={RequestStack} />
   
  </Tab.Navigator>
   )
 }

const Drawer = createDrawerNavigator();
function DrawerNavigator({navigation}){
  return(
    <Drawer.Navigator initialRouteName="MenuTab"
     drawerContent={()=><CustomDrawerContent navigation={navigation} />}
     >
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="AccountDetails" component={AccountDetails} />
        <Drawer.Screen name="MasjidList" component={MasjidList} />
        <Drawer.Screen name="PrayerMethod" component={PrayerMethod} />
        <Drawer.Screen name="Duaa" component={Duaa} />
        
      </Drawer.Navigator>
  )
}
const StackApp=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
     <StackApp.Navigator initialRouteName='Login'>
      <StackApp.Screen name='HomeApp' component={DrawerNavigator} options={navOptionHandler}/>
      <StackApp.Screen name='Login' component={LoginScreen} options={navOptionHandler}/>
      <StackApp.Screen name='Register' component={RegisterScreen} options={navOptionHandler}/>
      <StackApp.Screen name='GeneralDetails' component={GeneralDetails} options={navOptionHandler}/>
      <StackApp.Screen name='DuaaDetails' component={DuaaDetails} options={navOptionHandler}/>
 
    </StackApp.Navigator>
    </NavigationContainer>
  );
}