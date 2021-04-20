import React,  { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from "axios";

export default class DisplayThoughts extends Component {
   constructor(props) {
    super(props);
    this.state = {
      thoughts: []
    }
  }

  getThoughts = () => {
    axios.get('http://localhost:5000/thoughts').
    then( (res) => {
      const data = res.data;
      this.setState({ thoughts: data });
    }).
    catch( () => {
      alert('Error retrieving data');
    });
  }

  render() {

    return (
      <View
        style={{
          marginTop: 40,
          margin: 150,
          marginBottom: 0
        }}>
        {this.getThoughts()}

          <FlatList
            data={this.state.thoughts.slice().reverse()}
            renderItem={({item}) => <Text style={{
              textAlign: "center",
              marginBottom: 10
            }}>{item["thought"]}{"\n"}
            {item["createdAt"].slice(8,10)}
            {item["createdAt"].slice(4,8)}
            {item["createdAt"].slice(0,4)} {item["createdAt"].slice(11,16)}</Text>}
            keyExtractor={(item, index) => {return index.toString()}}
          />
      </View>
    );
  }
}
