/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
   AppRegistry,
   Text,
   View,
   ScrollView,
   TouchableOpacity,
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 import FacebookTabBar from './fb.js';

 //import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
 var ScrollableTabView = require('react-native-scrollable-tab-view');
 var App = React.createClass({
   render() {
     return (
       <ScrollableTabView
          style={{marginTop: 20, }}
          initialPage={1}
          renderTabBar={() => <FacebookTabBar />}
          ref={(tabView) => { this.tabView = tabView; }}
      >
         <ReactPage tabLabel="ios-home-outline" />
         <View tabLabel='ios-chatboxes'><Text style={{fontSize:50}} >Messages</Text></View>
         <FlowPage tabLabel="ios-notifications" />
         <TouchableOpacity tabLabel='ios-people' onPress={() => this.tabView.goToPage(0)}>
            <Text style={{fontSize:50}}>Back To Home</Text>
         </TouchableOpacity>
       </ScrollableTabView>
     );
   }
 });
 var ReactPage =React.createClass({
   render(){
     return(
       <ScrollView>
          <Text style={{fontSize:96}}>Home Page</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
      </ScrollView>
     )
   }
 });
 var FlowPage =React.createClass({
   render(){
     return(
       <ScrollView>
          <Text style={{fontSize:96}}>Notifications</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
      </ScrollView>
     )
   }
 });
 var JestPage =React.createClass({
   render(){
     return(
       <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
      </ScrollView>
     )
   }
 });

AppRegistry.registerComponent('Icon', () => App);
