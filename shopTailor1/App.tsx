import React from 'react';
import AppNavigation from "./Navigators/AppNavigation";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {

    return (
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
    )

}
