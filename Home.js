import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./Styles";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Home Screen</Text>


            <Button
                title="Movies"
                onPress={() => navigation.navigate("Movies",
                    { title: "Movies" })}
            />
            <Button
            title="Register User"
            onPress={() => navigation.navigate("Register User",
                { title: "Register User" })}
            />
            <Button
            title="About"
            onPress={() => navigation.navigate("About",
                { title: "About" })}
            />
        </View>
    );
}