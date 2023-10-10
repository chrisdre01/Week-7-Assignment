import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles";
import { StyleSheet } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.boxText}>Home</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Movies</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.boxText}>Page 2</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.boxText}>About</Text>
        </View>
    </View>

)};

StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        paddingTop: 40,
        backgroundColor: "ghostwhite",
        justifyContent: "space-around",
        justifyContent: "center",
        ...Platform.select({
            ios: { paddingTop: 20 },
            android: { paddingTop: StatusBar.currentHeight },
        }),
    },

    box: {
        height: 100,
        justifyContent: "center",
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray",
    },

    item: {
        margin: 5,
        padding: 5,
        color: "slategrey",
        backgroundColor: "ghostWhite",
        textAlign: "center",
    },
    
    boxText: {
        color: "darkslategray",
        fontWeight: "bold",

    },

    pickerBlock: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    pickerHeight: {
        height: 250,
    },

    pickerContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: 6,
        height: 240,
    },

    pickerLabel: {
        fontSize: 14,
        fontWeight: "bold",
    },
    picker: {
        width: 150,
        backgroundColor: "white",
    },

    selection: {
        flex: 1,
        textAlign: "center",
    },
});