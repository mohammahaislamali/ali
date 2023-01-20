import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Imagepath } from '../constants/image'
import Colors from '../constants/Colors'
import Paragraph from '../components/UI/Paragraph'
import UiButton from '../components/UI/UiButton'

const Cart = ({navigation}) => {
  return (
    <View style={styles.imgview}>
      <Image style={styles.ifresh} source={Imagepath.ifresh}/>
      <Paragraph style={styles.bigpargarph} size={20} color='#000'>Your Cart is empty</Paragraph>
      <Paragraph style={styles.Paragraph} size={18} color='#c0c0c0'>You have items in your shopping Cart</Paragraph>
      <Paragraph style={styles.Paragraph} size={18} color='#c0c0c0'>Let's go buy something</Paragraph>
      <UiButton text='SHOP NOW' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  ifresh:{
    height:300,
    width:'60%'
  },
  imgview:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    backgroundColor:Colors.white
  },
  Paragraph:{
    fontWeight:'400',
    color:Colors.greybold
  },
  bigpargarph:{
    marginVertical:10
  }
})