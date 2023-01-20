import React, { useEffect, useRef } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import colors from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
};
const StackNavigator = () => {
    const { Navigator, Screen } = createStackNavigator()
    return (
        <Navigator
        
            screenOptions={{
                // your stack style
            }}
            initialRouteName="Salectlocation"
        >
            <Screen
                name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Home').default}
                options={{
                    ...commonOptions
                }}
            />
            
            <Screen
                name='Video'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Video').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='Bottom'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../navigation/TabNavigator').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='MyDrawer'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../navigation/DrawerNavigator').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='List'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/List').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='Add'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Add').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='Search'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Search').default}
                options={{
                    ...commonOptions
                }}
            />
              <Screen
                name='Viewall'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Viewall').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='Dryfruets'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Dryfruets').default}
                options={{
                    ...commonOptions
                }}
            />
             <Screen
                name='Salectlocation'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/Salectlocation').default}
                options={{
                    ...commonOptions
                }}
            />
           
        </Navigator>
    )
}

export default StackNavigator