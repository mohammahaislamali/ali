import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Clickble from '../components/HOC/Clizkable'
import { Imagepath } from '../constants/image'
import Paragraph from '../components/UI/Paragraph'
import Colors from '../constants/Colors'
import { FULL_HEIGHT,FULL_WIDTH } from '../constants/layout'
import Card from '../components/UI/Card'
import ViewContainer from '../components/HOC/ViewContainer'


const Category = ({navigation}) => {
  return (
    <ViewContainer>
    <View style={styles.secoundview}>
    <Card>
    <View style={styles.flex}>
            <Image source={Imagepath.voctar6}/>
            <Paragraph size={20} color='#fff' style={styles.refer}>Category</Paragraph>
            </View>
    </Card>
</View>
    <Card>
    
    <View style={styles.flexdirecation}>
                    <Clickble onPress={()=>navigation.navigate('List')}>
            <View style={styles.box}>
                <Image style={styles.frutes} source={Imagepath.frutes}/>
                <Paragraph size={13}>FRUITS & VEGETABLES</Paragraph>
            </View>
            </Clickble>
            <View style={styles.box}>
            <Image style={styles.frutes} source={Imagepath.DRY}/>
            <Paragraph size={13} >DRY FRUITS</Paragraph>
            </View>
            
            </View>
            </Card>
            </ViewContainer>
  )
}

export default Category

const styles = StyleSheet.create({
  flexdirecation:{
    flexDirection:'row'
},
box:{
  elevation:8,
  backgroundColor:Colors.white,
  height:FULL_HEIGHT/5,
  width:FULL_WIDTH/2*0.9,
  marginHorizontal:5,
  alignItems:"center",
  justifyContent:'center',
  marginVertical:10
},
frutes:{
  height:FULL_HEIGHT/17,
  width:FULL_WIDTH/8,
  tintColor:Colors.green,
  marginVertical:20,
},
secoundview:{
  backgroundColor:Colors.green,
  height:40
},
flexdirecationsecound:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
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
flex:{
  flexDirection:'row',
  alignItems:'center'
}
})