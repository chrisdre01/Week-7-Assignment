import Reac from "react";
import { Text, ScrollView, Activityindicator, Switch,View } from "react-native";
import styles from "./Styles";

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                {new Array(20).fill(null).map((v, i) => (
                    <View key={i}>
                        <Text style={[styles.scrollItem, styles.text]}>Home</Text>
                        <Activityindicator style={styles.scrollItem} size="large" />
                    </View>
                ))}
            </ScrollView>
        </View>
           );
        }
{
if(window.history && history.pushState){ // check for history api support
	window.addEventListener('load', function(){
		// create history states
		history.pushState(-1, null); // back state
		history.pushState(0, null); // main state
		history.pushState(1, null); // forward state
		history.go(-1); // start in main state
				
		this.addEventListener('popstate', function(event, state){
			// check history state and fire custom events
			if(state = event.state){
	
				event = document.createEvent('Event');
				event.initEvent(state > 0 ? 'next' : 'previous', true, true);
				this.dispatchEvent(event);
				
				// reset state
				history.go(-state);
			}
		}, false);
	}, false);
}
}