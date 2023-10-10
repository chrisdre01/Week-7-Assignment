import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./Styles";

export default function Details({ route,navigation }) {
    const { content, title } = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({ title });
    }, []);

    return(
        <View style={styles.container}>
            <StatusBar barstyle="dark-content" />
            <Text>{title}</Text>
        </View>
    );
}