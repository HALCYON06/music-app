import  React, {Component} from 'react';
import { Text,View,Button,TouchableOpacity,StyleSheet} from 'react-native';
import Appheader from '../components/Appheader'

export default class Homescreen extends Component {
  render() {
    return (
     <View>
     <Appheader/>
     <TouchableOpacity style={[styles.button , {backgroundColor:'#F7CAC9'}]}>
         <Text style= {[styles.btext]}>HAPPY</Text>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.button, {backgroundColor:'#FFE5B4'}]}>
      <Text style={[styles.btext]}> DISCO </Text>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.button, {backgroundColor:'#FF9966'}]}>
      <Text style={[styles.btext]}> SAD </Text>
     </TouchableOpacity>

     </View>)
  }
}

const styles = StyleSheet.create({
  button:
  { 
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor:'1b5583',
    marginTop: 50,
    width: 200,
    height: 50,
  },

  btext:{
    textAlign:'center',
    color:'5A4FCF',
    fontSize:25

  },
  bg:{
    backgroundColor:'blue',
    
  }
});