import * as React from "react";
import { Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./About";
import Home from "./Home";
import Details from "./Details";
import Settings from "./Settings";
import { PropTypes } from "prop-types";
import { Text, View, FlatList } from "react-native";
import styles from "./Styles";
import { Platform, StyleSheet, StatusBar } from "react-native";
import { sheet, sheets } from "./Read";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Movie_Database =[
    { label: "Home", value: null },
    { label: "Movies", value: "Movies" },
    { label: "Register User", value: "Register User" },
    { label: "About", value: "About" },
    { label: "Settings", value: "Settings"},
];

export default function App() {
    return (
        <NavigationContainer>
            {Platform.OS === "ios" && (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Movies" component={Movies} />
                    <Tab.Screen name="Register User" component={Page2} />
                    <Tab.Screen name="About" component={About} />
                    <Tab.Screen name="Settings" component={Home} 
                    />
                </Tab.Navigator>
            )}

            {Platform.OS == "android" && (
                <Drawer.Navigator>
                    <Drawer.Scree name="Home" component={Home} />
                    <Drawer.Scree name="Movies" component={Movies} />
                    <Drawer.Scree name="Register User" component={Page2} />
                    <Drawer.Scree name="About" component={About} />
                    <Drawer.Scree name="Settings" 
                    component={Settings} />
                </Drawer.Navigator>
            )}
            
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen 
                    name="Details" 
                    component={Details} 
                    options={({ route }) => ({
                        headerRight: () => {
                            return (
                                <Button
                                title="View"
                                onPress={() => {}}
                                disabled={route.params.stack === 0}
                                />
                            );
                        },
                    })}
                />
                <Stack.Screen name="Settings" component={Settings} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


