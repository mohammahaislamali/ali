import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Paragraph from '../components/UI/Paragraph';
import Clickable from '../components/HOC/Clizkable';
import UiButton from '../components/UI/UiButton'
import ViewContainer from '../components/HOC/ViewContainer';
import Card from '../components/UI/Card';
import { Imagepath } from '../constants/image';
import Colors from '../constants/Colors';
const Favourite = ({navigation}) => {
  const [name,setname]=useState('')
  const [student, setstudent] = useState([]);
  console.log('===============',student);
  const getdate = async () => {
    let name = await AsyncStorage.getItem('data');
    setname(name);
    setstudent(JSON.parse(name));
  };
  useEffect(() => {
    getdate();
  }, [useIsFocused()]);
  const dele = async () => {
await AsyncStorage.clear()
  }
  return (
    <ViewContainer>
       <View style={styles.secoundview}>
    <Card>
    <View style={styles.flex2}>
      <Clickable onPress={()=>navigation.goBack()}>
            <Image source={Imagepath.voctar6}/>
            </Clickable>
            <Paragraph size={20} color='#fff' style={styles.refer}>Favourite</Paragraph>
            </View>
    </Card>
</View>
      {/* <UiButton onPress={()=>dele()}/> */}
      {student ?  <FlatList
   data={student}
   renderItem={({item,index})=>{
    return(
      <ViewContainer style={styles.flex}>
      <Image style={styles.Image} source={student[0]?.item?.Image}/>
      <View>
      <Text style={{width:200}}>{student[0]?.item?.name}</Text>
      <Text>{student[0]?.item?.rs}</Text>
      <Text>{student[0]?.item?.qty}</Text>
      </View>
      </ViewContainer>
    )
   }}
   /> : <View style={styles.textview}>
    <Paragraph size={30} style={styles.nofound}>No Favourites Found</Paragraph>
    </View>}
  
   </ViewContainer>
  )
}

export default Favourite

const styles = StyleSheet.create({
  Image:{
height:100,
width:100,
resizeMode:'contain',
marginHorizontal:10
  },
  flex:{
    flexDirection:'row',
    alignItems:"center",
    backgroundColor:'white',
    marginVertical:10,
    marginHorizontal:10,
    borderRadius:10,
   elevation:10
  },
  secoundview:{
    backgroundColor:Colors.green,
    height:40
  },
  menu:{
    height:23,
    width:23,
    tintColor:Colors.white
  },
  refer:{
    marginHorizontal:20,
    fontWeight:"bold"
  },
  flex2:{
    flexDirection:'row',
    alignItems:'center',
  },
  nofound:{
    textAlign:'center',
    justifyContent:'center',
    color:Colors.green,

  },
  textview:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})