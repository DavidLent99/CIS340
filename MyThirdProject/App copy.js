import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, my name is {props.name}. I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340 </Text>
      <Student name="David Lent"/>
      <Student name="Alice Something"/>
      <Student name="Bob Denmark"/>
      <Student name="Jon Clark"/>
    </View>
  );
}