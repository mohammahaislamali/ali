import React, { useState } from 'react';
import { Text, TouchableOpacity, View,Image,TextInput, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from "react-native-vector-icons/Ionicons";
import Imagepath from '../assets/Imagepath';


const choosephotofromlibrary=() =>{
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
        onPress: () =>choosephotofromlibrary(),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );











const Home_Screen = ({navigation}) => {
  const[image,setimage]=useState('')



  return (
    <View style={{ flex: 1, }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Bottomtab2')}>
<Text style={{fontSize:20}}>Home_Screen</Text>
</TouchableOpacity>



<TouchableOpacity onPress={()=>createThreeButtonAlert()}>
        <View style={{flexDirection:'row',alignItems:'center'}}>

     <Image style={{height:80,width:80,borderRadius:50}} source={image? {uri:image}: Imagepath.check}/>
     <TextInput style={{width:110,height:50,fontSize:20,}} placeholder='Add Profile' 
 placeholderTextColor='black'/>
 <Icon name='md-pencil' size={27}/>
 <Icon name='md-person-add-outline' size={27}/>
<Icon name='md-man' size={30}></Icon>
     </View>
     

      </TouchableOpacity>







    </View>
  );
}

export default Home_Screen;



// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View ,Image,Alert, TextInput} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import Icon from "react-native-vector-icons/Ionicons";
// import Imagepath from '../assets/Imagepath';

// const First = () => {
// const[image,setimage]=useState('')






// const choosephotofromlibrary=() =>{
//     ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true
//       }).then(image => {
//         setimage(image.path)

//         console.log(image);

//       });
// }   


// const takephotocamera=() =>{
//     ImagePicker.openCamera({
//         width: 300,
//         height: 400,
//         cropping: true,
//       }).then(image => {
//         setimage(image.path)

//         console.log(image);
//       });
// }   
  
// const createThreeButtonAlert = () =>
//   Alert.alert(
//     "Alert Title",
//     "My Alert Msg",
//     [
//       {
//         text: "Open camera",
//         onPress: () => takephotocamera()
//       },
//       {
//         text: "Gallary",
//         onPress: () =>choosephotofromlibrary(),
//         style: "cancel"
//       },
//       { text: "OK", onPress: () => console.log("OK Pressed") }
//     ]
//   );
// return (
//     <View style={{ flex: 1,padding:12 }}>
//         <TouchableOpacity onPress={()=>createThreeButtonAlert()}>
//         <View style={{flexDirection:'row',alignItems:'center'}}>

//      <Image style={{height:80,width:80,borderRadius:50}} source={image? {uri:image}: Imagepath.check}/>
//      <TextInput style={{width:110,height:50,fontSize:20,}} placeholder='Add Profile' 
//  placeholderTextColor='black'/>
//  <Icon name='md-pencil' size={27}/>
//  <Icon name='md-person-add-outline' size={27}/>
// <Icon name='md-man' size={30}></Icon>
//      </View>
     

//       </TouchableOpacity>
      
//     </View>
//   );
// }

// export default First;