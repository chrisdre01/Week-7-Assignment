import React from "react";
import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import styles from "./Styles";
import Switch from "./Switch";

export default function CustomSwitch(props) {
    return (
        <View style={styles.customSwitch}>
            <Text>{props.label}</Text>
            <Switch {...props} />
        </View>
    );
}

TogglingOnAndOff() 
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);

    return (
        <View style={styles.container}>
            <Switch label="Wi-fi" value={first} disabled={second} onValueChange={setFirst}/>
            <Switch label="Bluetooth" value={first} disabled={second} onValueChange={setFirst}/>
            <Switch label="Do Not Disturb" value={first} disabled={second} onValueChange={setFirst}/>
            <Switch label="Airplane Mode" value={first} disabled={second} onValueChange={setFirst}/>
        </View>
    );
