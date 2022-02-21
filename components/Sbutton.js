import  React, {Component} from 'react';
import { Text,View,Button,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Audio} from 'expo-av';

export default class App extends Component {

  playSound = async (url) =>{
    await Audio.Sound.createAsync ( 
      {uri:url},
      { shouldPlay: true });
  };
  
  render() {
    var imagepath = '';
    return (
     <View style={styles.container} >
       <TouchableOpacity onPress={() => {
          this.playSound()}}>
        <Text>{this.props.text}</Text>
      <Image style={{height: 50, width: 50}} source={imagepath} />
      </TouchableOpacity>
     </View>
     
     )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "space-evenly",
    alignItems: "center",
    //height: "100%",
    textAlign: "center"
  }
});

