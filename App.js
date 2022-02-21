import  React, {Component} from 'react';
import { Text,View,Button,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Audio} from 'expo-av';
import Homescreen from './screen/Homescreen';
import Sbutton from './components/Sbutton'

export default class App extends Component {

  
  render() {
    return (
       <View>
       
       <Sbutton  onPress={() => {
          var url = 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3';
          this.playSound(url);}}
          text="the one"
          />
           

       <Sbutton  onPress={() => {
         var url = 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3';
          this.playSound(url);}}
          text="state of grace"/>

       <Sbutton  onPress={() => {
         var url = 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3';
          this.playSound(url);}}
          text="willow"/>

       <Sbutton  onPress={() => {
         var url = 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3';
          this.playSound(url);}}
          text="lover"/>
       </View>
     
     )
  }
}

const styles = StyleSheet.create({
  button:{}
  
})

