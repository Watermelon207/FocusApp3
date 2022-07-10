import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'


import Home from './Home';
import Feed from "./Feed";

const drawer = createDrawerNavigator()

const DrawerNavigator =()=>{
    return(
      <drawer.Navigator>
      <drawer.Screen name='Home' component={Home}/>
      <drawer.Screen name='Feed' component={Feed}/>
      </drawer.Navigator>
    )

  }

export default DrawerNavigator;