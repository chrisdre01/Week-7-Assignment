import React from "react";
import { View, Text, Button, StatusBar } from  "react-native";
import styles from "./Styles";

export default function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Home" onPress={() =>
            navigation.navigate("Home")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Movies" onPress={() =>
            navigation.navigate("Movies")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Register User" onPress={() =>
            navigation.navigate("Register User")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="About" onPress={() =>
            navigation.navigate("About")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Wi-fi" onPress={() =>
            navigation.navigate("Wi-fi")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Bluetooth" onPress={() =>
            navigation.navigate("Bluetooth")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Do Not Disturb" onPress={() =>
            navigation.navigate("Do Not Disturb")} />

            <StatusBar barStyle="dark-content" />
            <Text>Settings Screen</Text>
            <Button title="Airplane Mode" onPress={() =>
            navigation.navigate("Airplane Mode")} />
        </View>
    );
}