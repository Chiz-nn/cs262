import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name , setName] = useState('');
  const [birthday, setbirthday] = useState([]);
  const [count, setCount] =useState(0);
  const birthdayIncrement = () => {
    setbirthday(birthday.concat({ key: count.toString()}));
    setCount(oldCount => oldCount + 1);
  }
   
  const clickhandler = () => {
    setName('Chizulum');
  }
  
  return (
    <View style= {styles.container}>
      <View style= {styles.secondContainer}>

      <FlatList 
        data />
    
      <text> Enter Name: </text>
      <TextInput 
      style= {styles.input} 
      placeholder = 'e.g John Doe'
      onChangeText={(val) =>setName(val)}/>
      
      <Text>{name} is {count} years old  </Text>
      </View>

      <TouchableOpacity style= {styles.buttonContainer} 
        onPress={birthdayIncrement}><Text>Click when it's your birthday!</Text>
      </TouchableOpacity> 

      <FlatList
        data = {birthday}
        renderItem= {({ item }) => (
          <text> {item.key} </text>
        )}>

        </FlatList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  } ,
  input: {
    borderWidth: 1,
    bordercolor: '#777',
    padding: 8,
    margin: 50,
    width: 200,

  }

});
