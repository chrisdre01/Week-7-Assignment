import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./Styles";

export default function Select(props) {
    return (
        <View>
            <Text style={styles.pickerlabel}>{props.label}</Text>
            <Picker {...props}>{props.items.map((i) => (
                <Picker.Item key={i.label} {...i} />   
        ))}
        </Picker>
        </View>
    );
}