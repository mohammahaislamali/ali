import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Bottun from './Bottun';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import Input from './Input';

const Add = ({route ,navigation}) => {
  //  let abc = route?.params?.data
  //  console.log("==> abc",abc)
  // const[name,setname]=useState('')
  // console.log("===>boy",)
 const[dataa, setdataa]=useState([]) 
  const get = async()=>{
   let name =await AsyncStorage.getItem('ikm')
  if(name){
    setdataa(JSON.parse(name))    
  }
 }  
   useEffect(()=>{
    get()
   },[useIsFocused()])
   // delete/..////
   const deletedata=async(i)=>{
   let abc=dataa.filter((item,index)=>{

   return index != i;       //  delete btn...?////

   })
    setdataa(abc) 
   await AsyncStorage.setItem('ikm',JSON.stringify(abc))
   }

  return (
    <View>
      <Bottun
        onPress={() => navigation.navigate('Home')}
        style={{margin: 10}}
        btn="Add"
      />
      <Bottun onPress={get}/>
       
       <FlatList
       data={dataa}
       renderItem={({item,index})=>{
        return(
          <View style={{borderWidth:3,borderColor:'red',borderRadius:20,marginVertical:10}}>
  
          <Text style={{color:'black',fontSize:30,marginHorizontal:5}}>name:{item?.name}</Text>
          <Text style={{color:'black',fontSize:30,marginHorizontal:5}}>email:{item?.email}</Text>
          <Text style={{fontSize:30,color:'black',marginHorizontal:5}}>password:{item?.password}</Text>
          <Text style={{fontSize:30,color:'black',marginHorizontal:5}}>addresh:{item?.pincode}</Text>
          <Text style={{fontSize:30,marginHorizontal:5,color:'black'}}>pincode:{item?.addresh}</Text> 
          <View style={{flexDirection:'row',marginHorizontal:10,alignSelf:'flex-end'}}>
          <Bottun style={{marginHorizontal:5}} btn='Edit'onPress={()=>navigation.navigate('Home',{data:{item,index}})} />
          <Bottun btn='Delete' onPress={()=>deletedata(index)}/>
           </View>
          </View>
        )
       }}
       />
      
    </View> 
  );
};

export default Add;

const styles = StyleSheet.create({});
