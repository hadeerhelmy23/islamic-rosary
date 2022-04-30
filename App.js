import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const App = () => {
    const [counter, setCounter] = useState(0);
    const onPress = () => setCounter(Counter => Counter + 1);
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={{fontSize:30,}}>عدد التسابيح: {count}</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={onPress}>
          <Text style={{fontSize:20, color:"black"}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"green",
      justifyContent: "center",
      paddingHorizontal: 10
    },
    TouchableOpacity: {
      alignItems: "center",
      backgroundColor: "white",
      borderRadius:13
    
    },
    countContainer: {
      alignItems: "center",
      marginTop:20,
      padding: 10
    }
});}
