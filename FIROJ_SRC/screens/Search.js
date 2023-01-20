import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Card from '../components/UI/Card'
import Paragraph from '../components/UI/Paragraph'
import { Imagepath } from '../constants/image'
import Colors from '../constants/Colors'
import Input from '../components/UI/UiInput'
import list from './List'
import Clickble from '../components/HOC/Clizkable'
const Search = () => {
  return (
    <View>
      <View style={styles.secoundview}>
    <Card>
    <View style={styles.flex2}>
    <Clickble onPress={()=>navigation.goBack()}>
            <Image source={Imagepath.voctar6}/>
            </Clickble>
            <Paragraph size={20} color='#fff' style={styles.refer}>Search</Paragraph>
            </View>
    </Card>
</View>
<View style={styles.flex}>
<Image style={styles.img} source={Imagepath.search}/>
<Input style={styles.Input}/>
</View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    secoundview:{
        backgroundColor:Colors.green,
        height:40
      },
      refer:{
        marginHorizontal:20,
        fontWeight:"bold"
      },
      flex2:{
        flexDirection:'row',
        alignItems:'center',
      },
      Input:{
        width:350,
        top:8
      },
      img:{
        height:25,
        width:25,
        marginHorizontal:10
      },
      flex:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.white,
        elevation:20,
        height:70
      }
})