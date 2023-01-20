import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import ImagePath from './IMG/ImagePath';
const Screen = ({navigatoin}) => {
  const [image,setimage]= useState('')

  const Camera=() =>{
     ImagePicker.openPicker({
         width: 300,
         height: 400,
         cropping: true
       }).then(image => {
         setimage(image.path)
   
         console.log(image);
   
       });
   }  
   
   const takephotocamera=() =>{
     ImagePicker.openCamera({
         width: 300,
         height: 400,
         cropping: true,
       }).then(image => {
         setimage(image.path)
         console.log(image);
       });
   }   
   
   
   const createThreeButtonAlert = () =>
     Alert.alert(
       "Alert Title",
       // "My Alert Msg",
       "hii,habib",
       [
         {
           text: "Open camera",
           onPress: () => takephotocamera()
         },
         {
           text: "Gallary",
           onPress: () =>Camera(),
           style: "cancel"
         },
         { text: "OK", onPress: () => console.log("OK Pressed") }
       ]
     );
   
   
  
  return (
    <View style={{height:100,backgroundColor:'red'}}>
      <View>
        <TouchableOpacity onPress={()=>createThreeButtonAlert()}>
          <Image  style={styles.camra} source={image? {uri:image}: ImagePath.camra} />
         </TouchableOpacity>
 
       </View>

    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
  camra:{
    height:100,width:100
  }
})