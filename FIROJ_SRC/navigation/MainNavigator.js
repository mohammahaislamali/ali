import React,{useRef,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator'
/*

 Always use stack navigation at the root of your project

*/
const MainNavigator = () => {
    let navigate = useRef(null)
    const getdata = async()=>{
        let token = await AsyncStorage.getItem('TOKEN')
        if(token){
            navigate.current.reset({
                index:0,
                routes:[{name:'Wellcome'}]
            })
            useEffect(()=>{
                getdata()
            },[])
        }  
    }
    return (
        <NavigationContainer ref={navigate}>
            <StackNavigator initialRouteName="Singup"/>
            {/* <DrawerNavigator/> */}
        </NavigationContainer>
    )
}

export default MainNavigator;