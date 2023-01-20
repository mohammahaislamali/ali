import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image ,StyleSheet} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Cart from '../screens/Cart';
import Category from '../screens/Category';
import Favourite from '../screens/Favourite.';
import Home from '../screens/Home';
import { Imagepath } from '../constants/image';
import Colors from '../constants/Colors';
import Clickable from '../components/HOC/Clizkable';

const Tab = createBottomTabNavigator();

const Bottom = ({navigation,route}) =>{
let location = route?.params?.data
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor:'green',
        tabBarActiveTintColor:'#fff',
        tabBarInactiveBackgroundColor:'green'
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
            headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image style={Styles.home} source={Imagepath.Home}/>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
            headerShown:false,
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Image style={Styles.home} source={Imagepath.Cart}/>
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
            headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (

           <Image style={Styles.home} source={Imagepath.Cartegry}/>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
            headerShown:false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
           <Image style={Styles.home} source={Imagepath.foverty}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Bottom
const Styles=StyleSheet.create({
    home:{
    height:23,
    width:23,
    tintColor:Colors.grey
    }
})