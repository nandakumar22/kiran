import React, { Component } from 'react';
import { View, Text, TextInput, ToastAndroid, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: ''
    }
  }

  validate() {
    //include your validation inside if condition
    if (this.state.password == "123$" && this.state.email == 'doogadmin.com') {
     alert('Login success');
      // navigate to next screen
    }

    else if (this.state.email !== "doogadmin.com") {
     alert('incorrect email');
    }
    
    else if (this.state.password !== "123$") {
     alert('incorrect password');
    }

    alert("Sorry Entered Value Dose not Exist.")
  
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', backgroundColor: '#ddd', flex: 1 }}>

        <Label>Enter Email</Label>
        <Item inlineLabel>

          <Input
            style={{ width: '90%', backgroundColor: 'white' }}
            returnKeyType="go"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            onChangeText={(email) => this.setState({ email })} />
        </Item>

        <Label>Enter Password</Label>
        <Item inlineLabel>

          <Input
            style={{ width: '60%', backgroundColor: 'white' }}
            returnKeyType="go"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            onChangeText={(password) => this.setState({ password })} />
        </Item>


        <TouchableOpacity onPress={() => this.validate()}
          style={{ padding: 15, marginTop: 20, width: 250, justifyContent: 'center', alignSelf: 'center', backgroundColor: 'rgb(102, 192, 231)' }}>
          <Text style={{ textAlign: 'center' }}>Next</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



import React, { Component } from 'react'; 
import { View, Picker } from 'react-native'; 
 
export default class myApp extends Component { 
 
  constructor() { 
    super(); 
 
    this.state = { 
      textValue: '' 
    } 
    //The following line must be added to attach "state",  for non React methods 
    this.fun_name = this.fun_name.bind(this); 
  } 
  fun_name(value) { 
    this.setState({ textValue: value }) 
  } 
 
  render() { 
    return ( 
      <View> 
        <Picker selectedValue={this.state.textValue} onValueChange={this.fun_name}> 
          <Picker.Item label="HTML Code Play" value="1" /> 
          <Picker.Item label="Android Code Play" value="2" /> 
          <Picker.Item label="3Dthreejs Code Play" value="3" /> 
        </Picker> 
 
        <Picker> 
          <Picker.Item label="Test 1" value="1" /> 
          <Picker.Item label="Test 2" value="2" /> 
          <Picker.Item label="Test 3" value="3" /> 
        </Picker> 
      </View> 
    ); 
  } 
}


