import { StyleSheet, Text, View,Image,Share } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FULL_HEIGHT, FULL_WIDTH } from '../constants/layout';
import { Imagepath } from '../constants/image';
import Paragraph from '../components/UI/Paragraph';
import Card from '../components/UI/Card';
import ViewContainer from '../components/HOC/ViewContainer';
import Clickable from '../components/HOC/Clizkable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScrollContainer from '../components/HOC/ScrollContainer';
 const Add =({route,navigation})=>{
const [count,setcount]=useState(0)
const counting = () =>{
  if(count > 0){
    setcount(count -1)
  }
  else{
    setcount(0)
  }
}
const onPress = () => {
  setlike(!like),
  setDate()
}
const [like,setlike]=useState(false)
  const change = route?.params?.data;
  const data = route?.params?.abc
  const [add,setadd]=useState(change)
  let obj = {
   add:add,

   
  }
  const setDate = async () => {
    let arr = [];
    arr.push(add)
    await AsyncStorage.setItem('data', JSON.stringify(arr));
    console.log('=====>',arr);
    // navigation.goBack();
  };
  const itemlist = () => {
    setcount  += count + item.rs
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
        
          '#YouDeserveFresh Hello folks, I loved the iFresh App. It delivers fresh Fruits and Veggies at your doorstep.Download App:    http://ifresh.co.in/shareapp.php?friendcode=',
      });
      {
        Imagepath.Apple
      }
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ScrollContainer>
    <View style={{flex:1,backgroundColor:'white'}}>
      <Text></Text>
      <Image style={styles.Image} source={change?.item?.Image}/>
      <View style={styles.flex2}>
      <View style={styles.flex}>
      <Clickable onPress={()=>onPress()}>
      <Image style={styles.dill} source={like ? Imagepath.dill : Imagepath.Cartegry}/>
      </Clickable>
      <Paragraph>Save</Paragraph>
      </View>
      <View style={styles.flex}>
        <Clickable onPress={()=>onShare()}>
      <Image style={styles.dill} source={Imagepath.share}/>
      </Clickable>
      <Paragraph>share</Paragraph>
      </View>
      <View style={styles.flex}>
      <Image style={styles.dill} source= { Imagepath.threelins}/>
      <Paragraph>Similar Productcts
      </Paragraph>
      </View>
      </View>
      <Card>
      <Paragraph style={styles.Paragraph}>{change?.item?.name}</Paragraph>
      <Paragraph style={styles.rs}>Offer Price:{change?.item?.rs}</Paragraph>
      <Paragraph>({change?.item?.grm})</Paragraph>
        <View style={styles.View}>
<Paragraph style={styles.Quasnitiy}>Quantity</Paragraph>
<ViewContainer style={styles.flex3}>
      <View style={styles.flex2}>
      <Clickable onPress={() =>counting()}>
      <View style={styles.view}>
        <Paragraph style={styles.miness}>-</Paragraph>
      </View>
      </Clickable>
      <Paragraph style={styles.suny}>{count}</Paragraph>
      <Clickable onPress={() => setcount(count + 1)}>
      <View style={styles.view}>
        <Paragraph style={styles.miness}>+</Paragraph>
      </View>
      </Clickable>
      </View>
      </ViewContainer>
        </View>
        <Paragraph>Product Details</Paragraph>
        <Paragraph>{change?.item?.name}</Paragraph>
      </Card>
    </View>
    </ScrollContainer>
  )
}
export default Add
const styles = StyleSheet.create({
  Image:{
    height:FULL_HEIGHT/3,
    width:FULL_WIDTH,
    resizeMode:'contain'
  },
  dill:{
    height:30,
    width:30,
    marginHorizontal:5,
    tintColor:'green'
  },
  flex:{
    flexDirection:"row"
  },
  flex2:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center',
    marginHorizontal:15
  },
  Paragraph:{
  fontSize:18,
  marginVertical:10
  },
  rs:{
    marginVertical:20,
    fontSize:20,
    fontWeight:'bold',

  },
  View:{
    height:100,
    borderTopWidth:2,
    borderBottomWidth:2,
    marginVertical:10,
    borderColor:'grey',
    marginVertical:10,
    width:'100%'
  },
  view:{
    backgroundColor:"green",
    width:30,
    height:30,
    alignItems:"center",
    justifyContent:'center',
    borderRadius:100,
    marginHorizontal:10,
  },
  flex3:{
    flexDirection:"row",
    alignSelf:'center',
    bottom:10
  },
  miness:{
    fontSize:30,
    color:'#fff',
    bottom:3
  },
  Quasnitiy:{
    marginVertical:5
  }
 
})