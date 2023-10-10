import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import styles from "./Styles";

export default function ListFilter({ onFilter }) {
    return (
        <View>
            <TextInput
            autofocus
            placeholder="Search"
            style={styles.filter}
            onChangeText={onFilter}
            />
        </View>
    );
}

ListFilter.propTypes = {
    onFilter: propTypes.func.isRequired,
};