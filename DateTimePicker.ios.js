import React from "react";
import React, { useState } from "react";
import { Text, View } from "react-ntive";
import DatePicker from "./DateTimePicker.Android";
import DateTimePicker from "react-native-community/datetimepicker";
import TimePicker from "./DateTimePicker.Android"
import styles from "./Styles";


export default function DatePicker(props) {

CollectingDateTimeInput() 
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());   

    return (
        <View style={styles.container}>
            <DatePicker label="Pick a date, any date:" value={date} onChange={setDate} />
            <TimePicker label="Pick a time, any time:" value={time} onChange={setTime} />
        </View>
    );
}
