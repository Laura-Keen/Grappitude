import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet, Alert } from 'react-native';

export default class InspireMe extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();


  return fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((json) => {
      const positiveQuote = json[(Math.floor(Math.random()*json.length))];
      const positiveText = positiveQuote.text
      let positiveAuthor = ""
      if(positiveQuote.author === null) {
        positiveAuthor = "Unknown"
      } else {
        positiveAuthor = positiveQuote.author
      }

      Alert.alert(`${positiveText}\n\n${positiveAuthor}`)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
   return (
     <View
     style={{
       marginTop: 40,
       margin: 15
     }}>
       <Button
         title="Inspire Me"
         color='hotpink'
         onPress={this.onSubmit}
         />
     </View>
   );
 }
}
