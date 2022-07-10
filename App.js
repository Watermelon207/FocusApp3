import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './DrawerNavigator'
import Feed from "./Feed";
import Home from './Home';

export default function App(){
    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    );
};