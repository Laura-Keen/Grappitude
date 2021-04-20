import React,  { Component } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import axios from "axios";

export default class CreateThought extends Component {
  constructor(props) {
    super(props);
    this.onChangeThought = this.onChangeThought.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      thought: '',
    }
  }
  onChangeThought(thought) {
    this.setState({
      thought: thought
    });
  }
  onSubmit(e) {
    e.preventDefault();
    //
    // axios.get('https://type.fit/api/quotes')
    //   .then(response => console.log(response));
    // window.location = '/';


  return fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((json) => {
      const positiveQuote = json[(Math.floor(Math.random()*json.length))];
      const positiveText = positiveQuote.text
      const positiveAuthor = positiveQuote.author


      console.log(positiveQuote)
      alert(`${positiveText}` + ` - ${positiveAuthor}`)
    })
    .catch((error) => {
      console.error(error);
    });

  }

  // render form and submit button here

  render() {
   return (
     <View
     style={{
       marginTop: 40,
       margin: 15
     }}>
       <Button
         title="Inspire Me"
         color='blue'
         onPress={this.onSubmit}
         />
     </View>
   );
 }
}