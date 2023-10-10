import React from "react";
import PropTypes from "prop-types";
import { Text, View, FlatList } from "react-native";
import styles from "./Styles";
import ListControls from "./ListControls";

const data = new Array(34)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

export default function List({ Controls, data, onFilter, onSort, asc }) {

  return (
    <FlatList
        data={data}
        ListHeadComponent={<Controls {...{ onFilter, onSort, asc }} />}
        renderItem={({ item }) => <Text
        style={styles.item}>{item.value}</Text>}
        />
    );
}

List.PropTypes = {
    Controls: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    asc: PropTypes.bool.isRequired,
};

List.defaultProps = {
    Controls: ListControls,

};


    

