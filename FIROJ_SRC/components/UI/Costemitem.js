import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import ViewContainer from '../HOC/ViewContainer'
import Paragraph from './Paragraph'
import Clickble from '../HOC/Clizkable'
import { datauploade } from './Costeamareey'
import Colors from '../../constants/Colors'
import { FULL_WIDTH } from '../../constants/layout'
const Costemitem = ({navigation}) => {
  const [count,setcount]=useState(datauploade)
  return (
    <ViewContainer>
    <Clickble onPress={()=>navigation.navigate('Add',{data: {item,index}})}>
    <ViewContainer style={styles.main}>
    <ViewContainer key={index} style={styles.itemcointer}>
      <View style={styles.itemlogo}>
      <Paragraph style={styles.greenpar}>Best Quantity</Paragraph>
      <Image style={styles.shortimage} source={item.Image}/>
      </View>
      <ViewContainer style={styles.itembody}>
        <View style={styles.flex}>
        <Paragraph  style={styles.itemname}>
          {item.name}
        </Paragraph>
        <Clickble onPress={()=>setlike(!like)}>
        <Image style={styles.hrtimg} source={like == true ?  Imagepath.Cartegry : Imagepath.dill}/>
        </Clickble>
      </View>
      <ViewContainer style={styles.flex}>
        <Paragraph style={{marginVertical:5}}>{item.grm}</Paragraph>
        <View style={styles.flex2}>
        <Clickble onPress={() => handleDecriment(item.id)}>
        <View style={styles.view}>
          <Paragraph style={styles.miness}>-</Paragraph>
        </View>
        </Clickble>
        <Paragraph style={styles.suny}>{item.qty}</Paragraph>
        <Clickble onPress={() => handleIncrement(item.id)}>
        <View style={styles.view}>
          <Paragraph style={styles.miness}>+</Paragraph>
        </View>
        </Clickble>
        </View>
        </ViewContainer>
        <Paragraph style={styles.price}>{item.rs}</Paragraph>
        <View style={styles.longview}>
       <Paragraph style={styles.text}>more Variants</Paragraph>
        </View>
      </ViewContainer>
    </ViewContainer>
    </ViewContainer>
    </Clickble>
    </ViewContainer>
  )
}
 

export default Costemitem
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
  },
  flexDicler: {
    flexDirection: 'row',
  },
  refer: {
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  secoundview: {
    backgroundColor: Colors.green,
    height: 40,
  },
  listtab: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btntab: {
    width: FULL_WIDTH / 5,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: Colors.greybold,
    justifyContent: 'center',
    height: 70,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  texttab: {
    fontSize: 20,
  },
  btntabActive: {
    borderColor: 'green',
    borderWidth: 2,
  },
  texttabActive: {
    color: '#000',
  },
  itemcointer: {
    flexDirection: 'row',
    paddingVertical: 15,
    alignItems: 'center',
  },
  itemlogo: {
    width: 90,
    height: 100,
  },
  itemimage: {
    width: 50,
    height: 50,
  },
  itembody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  itemname: {
    fontWeight: '400',
    fontSize: 17,
    color: '#000',
    width: 170,
  },
  itemstatus: {
    backgroundColor: Colors.green,
    paddingHorizontal: 6,
    justifyContent: 'center',
    right: 12,
  },
  main: {
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 4,
  },
  imgtntab: {
    height: 30,
    width: 30,
    tintColor: 'green',
  },
  longview: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    borderColor: 'green',
    marginVertical: 5,
  },
  text: {
    color: Colors.green,
  },
  hrtimg: {
    width: 20,
    height: 20,
    right: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view: {
    backgroundColor: 'green',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  miness: {
    fontSize: 30,
    color: '#fff',
    bottom: 5,
  },
  flex2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    right: 10,
    top: 5,
  },
  suny: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  Paragraph: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#000',
  },
  shortimage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  greenpar: {
    textAlign: 'right',
    bottom: 7,
    fontSize: 10,
    fontWeight:'bold',
    color: Colors.green,
  },
  menu: {
    marginHorizontal: 10,
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
})