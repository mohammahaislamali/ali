import { createDrawerNavigator } from '@react-navigation/drawer';
import Bottom from '../navigation/TabNavigator'
import CostemDrower from '../screens/CostemDrower';


const Drawer = createDrawerNavigator();

const MyDrawer=()=> {
  return (
     <Drawer.Navigator   drawerContent={(props) => <CostemDrower {...props} />}>
      <Drawer.Screen name="Bottom" component={Bottom}    />
    </Drawer.Navigator>
  );
}
export default MyDrawer