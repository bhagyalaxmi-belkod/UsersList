import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import AstroidDetails from "../screens/astroidDetails";
import React from "react";

const Stack= createStackNavigator()

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{title: "Astroid Search"}}
                
                />
                 <Stack.Screen
                    name="astroidDetails"
                    component={AstroidDetails}
                    options={{ title: "Astroid Details" }}
                />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation