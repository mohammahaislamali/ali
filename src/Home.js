import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bottun from './Bottun'
import Input from './Input'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Home = ({navigation,route}) => {
let edit = route?.params?.data
console.log('==>',edit)
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const[password,setpasword]=useState('')
  const[pincode,setpincod]=useState('')
  const[addresh,setaddresh]=useState('')
  let obj={
   name:name,
   email:email,
   password:password,
   pincode:pincode,
   addresh:addresh
   }
  console.log('===>obj',obj)
  const set =async()=>{   
   let arr = [];
  let oldvalue= await AsyncStorage.getItem('ikm')
  if(oldvalue){
  if(edit){
   let aqu= JSON.parse(oldvalue)
   aqu[edit?.index]=obj
   arr=aqu
  }else{
    arr= JSON.parse(oldvalue)
    arr.push(obj)
  }
  }
  await AsyncStorage.setItem("ikm",JSON.stringify(arr))
  navigation.goBack()
  }
 useEffect(()=>{
console.log('===>edit',edit)
if(edit){
setname(edit?.item?.name)
setemail(edit?.item?.email)
setpasword(edit?.item?.password)
setpincod(edit?.item?.pincode)
setaddresh(edit?.item?.addresh)
}
console.log('=>=>',edit?.item?.name)
 },[])
  
  return (
    <View style={{margin:10}}>
      <Text style={{fontSize:30}}>name:{name}</Text>
      <Text style={{fontSize:30}}>email:{email}</Text>
      <Text style={{fontSize:30}}>password:{password}</Text>
      <Text style={{fontSize:30}}>addresh:{addresh}</Text>
      <Text style={{fontSize:30}}>pincode:{pincode}</Text>
      <Input onchange={(xt)=>setname(xt)}  value={name}/>
      <Input onchange={(xt)=>setemail(xt)}  value={email}/>
      <Input onchange={(xt)=>setpasword(xt)} value={password} />
      <Input onchange={(xt)=>setaddresh(xt)}  value={addresh}/>
      <Input onchange={(xt)=>setpincod(xt)} value={pincode} />
      <Bottun onPress={set} btn={edit?'update':'submit'}/>  
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})