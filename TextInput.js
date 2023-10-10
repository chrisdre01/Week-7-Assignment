import React, { useState } from "react";
import propTypes from "prop-types";
import { Text, TextInput, View } from "react-native";
import styles from "./Styles"

function Input(props) {
    return (
        <View styles={styles.textInputContainer}>
            <Text style={styles.textInputLabel}>{props.label}</Text>
            <TextInput style={styles.textInput}>{...props}</TextInput>
        </View>
    );
}

Input.propTypes = {
    label: propTypes.string,
};

export default function CollectingTextInput() {
    const [changedText, setChangedText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    return (
        <View style={styles.container}>
            <Input label="Full Name:" />
            <Input label="Email:" />
            <Input label="Phone:" />
            <Input label="Bio:" />
            <Input label="Password:" secureTextEntry />
            <Input label="Confirm Password:" onChangeText={(e) => {
                setChangedText(e);
            }}
            ononSubmitEditing={(e) => {
                setSubmittedText(e.nativeEvent.text);
            }}
            onFocus={() => {
                setChangedText("");
                setSubmittedText("");
            }}
            />
            <Text>Changed: {changedText}</Text>
            <Text>Submitted: {submittedText}</Text>
        </View>
    );
}