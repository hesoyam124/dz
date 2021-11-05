import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ListScreen } from '../screens/ListScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";


const Stack = createStackNavigator();

export function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{title: "Home Screen"}}
            />
            <Stack.Screen 
            name="About"
            components={AboutScreen}
            options={{title:"About Screen"}}
            />
            <Stack.Screen 
            name="List"
            components={ListScreen}
            options={{title:"List Screen"}}
            />
            <Stack.Screen 
            name="Settings"
            components={SettingsScreen}
            options={{title:"Settings Screen"}}
            />





        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{headerTitle:"HOME"}}
                />

<Tab.Screen 
                name="About"
                component={AboutScreen}
                options={{headerTitle:"ABOUT"}}
                />
                <Tab.Screen 
                name="List"
                component={ListScreen}
                options={{headerTitle:"LIST"}}
                />

                <Tab.Screen 
                name="Settings"
                component={SettingsScreen}
                options={{headerTitle:"SETTINGS"}}
                />



            </Tab.Navigator>
        </NavigationContainer>
    )
}









