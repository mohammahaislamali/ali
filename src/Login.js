import { Button, StyleSheet, Text, View } from 'react-native'
import Input from './Input'
import Bottun from './Bottun'

const Login = () => {
 
  
  return (
    <View style={styles.mainboxx}>
     <Text style={{fontSize:50,color:'red'}}>Form Login</Text> 
     <View style={{marginHorizontal:10,marginVertical:50}}>
     <Input />
     <Input placeholder='enter the password'/>
     <Bottun style={{marginVertical:10}} btn='Login'/>
     </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  mainboxx:{
    width:"90%",height:500,borderWidth:5,borderColor:'red',borderRadius:20,
    alignSelf:'center',marginVertical:50 
  }
})