import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useState} from 'react'
import ViewContainer from '../components/HOC/ViewContainer'
import Colors from '../constants/Colors'
import { FULL_HEIGHT, FULL_WIDTH } from '../constants/layout'
import { Imagepath } from '../constants/image'
import Paragraph from '../components/UI/Paragraph'
import {Picker} from '@react-native-picker/picker';
import UiButton from '../components/UI/UiButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
const Salectlocation = ({navigation,route}) => {
    const [selectecointry, setSelectedcountry] = useState();
    const [selectstate, setSelectstate] = useState();
    const [selectCity, setSelectCity] = useState();
    const [selectArea, setSelectArea] = useState();
    let obj = {
        selectCity:selectCity,
        selectArea:selectArea
    }
    const setDate = async () => {
        let arr = [];
        arr.push(obj)
        await AsyncStorage.setItem('data1', JSON.stringify(obj));
        console.log('=====>',arr);
        navigation.navigate('Bottom');
      };
    console.log('====================================');
    console.log(obj);
    console.log('====================================');
  return (
   <ViewContainer>
    <View style={styles.main}>
    <Image style={styles.Image} source={Imagepath.location}/>
    </View>
    <View style={styles.whitebox}>
        <Paragraph textAlign='center'>Please Select Your location</Paragraph>
        <Paragraph style={styles.selectCountry}>Select Country</Paragraph>
        <Picker
        selectedValue={selectecointry}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedcountry(itemValue)
  }>
       <Picker.Item label="india" value="india" />
      </Picker>
      <Paragraph style={styles.selectCountry}>Select State</Paragraph>
        <Picker
        selectedValue={selectstate}
        onValueChange={(itemValue, itemIndex) =>
        setSelectstate(itemValue)
  }>
       <Picker.Item label="Rajasthan" value="Rajasthan"/>
      </Picker>
      <Paragraph style={styles.selectCountry}>Select City</Paragraph>
        <Picker
        selectedValue={selectCity}
        onValueChange={(itemValue, itemIndex) =>
        setSelectCity(itemValue)
  }>
       <Picker.Item label="Select City" value="Select City" />
       <Picker.Item label="Parbatsar" value="Parbatsar" />
      </Picker>
      <Paragraph style={styles.selectCountry}>Select Area</Paragraph>
        <Picker
        selectedValue={selectArea}
        onValueChange={(itemValue, itemIndex) =>
        setSelectArea(itemValue)
  }>
       <Picker.Item label="Select Area" value="Select Area" />
       <Picker.Item label="Sipahiyo ka mohhala pbc" value="PSipahiyo ka mohhala pbc" />
       <Picker.Item label="Bush statend pbc" value="Bush statend pbc" />
       <Picker.Item label="Gandhi chock pbc" value="Gandhi chock pbc" />
       <Picker.Item label=" Madrasha pbc" value="Madrasha pbc" />
       <Picker.Item label="Giwariyo ka mohhala pbc" value="Giwariyo ka mohhala pbc" />
       <Picker.Item label=" School No. 4 pbc" value="School No. 4 pbc" />
      </Picker>
      <UiButton onPress={()=>setDate()} text='SUBMIT'/>

    </View>
   </ViewContainer>
  )
}

export default Salectlocation

const styles = StyleSheet.create({
    main:{
        height:FULL_HEIGHT/5,
        backgroundColor:Colors.green,
        alignItems:'center',
        justifyContent:'center'
    },
    Image:{
        height:FULL_HEIGHT/9*0.9,
        width:FULL_WIDTH/5,
        resizeMode: 'contain',
        tintColor:Colors.white
    },
    whitebox:{
        height:FULL_HEIGHT/2,
        backgroundColor:Colors.white,
        elevation:10,
        width:FULL_WIDTH/1*0.8,
        alignSelf:'center',
        bottom:20,
        padding:10
    },
    selectCountry:{
        marginVertical:5,
        color:Colors.greybold,
        fontWeight:'400'
    },

})