import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    Text, View, Dimensions
  } from 'react-native'

  import { form, struct, String } from 'tcomb-form-native';
  import I18n from 'react-native-i18n';
  import en from '../i18n/locales/en';
  import es from '../i18n/locales/es';
  import styles from '../styles/common';

  I18n.fallbacks = true;
  I18n.translations = {en, es};
  
  const Form = form.Form
  
  const newUser = struct({
    email: String,
    password:  String
  })
  
  const options = {
    fields: {
      email: {
        autoCapitalize: 'none',
        autoCorrect: false
      },
      password: {
        autoCapitalize: 'none',
        password: true,
        autoCorrect: false,
        secureTextEntry: true
      }
    }
  }
  
  class StartTrialView extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        value: {
          email: '',
          password: ''
        }
      }
    }
  
    componentWillUnmount() {
      this.setState = {
        value: {
          email: '',
          password: null
        }
      }
    }
  
    _onChange = (value) => {
      this.setState({
        value
      })
    }
  
    _handleAdd = () => {
      const value = this.refs.form.getValue();
      // If the form is valid...
      if (value) {
        const data = {
          email: value.email,
          password: value.password,
        }
        // Serialize and post the data
        const json = JSON.stringify(data);
        fetch('http://localhost:3000/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: json
        })
        .then((response) => response.json())
        .then(() => {
          alert('Success! You may now log in.');
          // Redirect to home screen
          this.props.navigator.pop();
        })
        .catch((error) => {
          alert('There was an error creating your account.');
        })
        .done()
      } else {
        // Form validation error
        alert('Please fix the errors listed and try again.')
      }
    }
  
    render() {
      return (
        <View style={localStyles.container2}>
        <ScrollView style={[localStyles.container]}>
          <Text style={[styles.display2, localStyles.marginB]}>YESTER</Text>
          <Text style={[styles.title, localStyles.marginB]}>{I18n.t('before_lbl1_1')}
            <Text style={{fontWeight: 'bold',}}>{I18n.t('before_lbl1_2')}</Text>
          </Text>
          <Text style={[styles.title, localStyles.marginB]}>{I18n.t('before_lbl2')}</Text>
          <TouchableHighlight onPress={this._handleAdd} 
          style={[styles.button, styles.filledButton, localStyles.marginB]}>
            <Text style={[styles.buttonText, ]}>START FREE TRIAL</Text>
          </TouchableHighlight>
          <Text style={[styles.body1]}>$4.99/month after trial ends.</Text>
          <TouchableHighlight onPress={this._handleAdd} 
          style={[styles.button, styles.outlinedButton, localStyles.marginB]}>
            <Text style={[styles.buttonText, styles.notColor]}>Log In</Text>
          </TouchableHighlight>
          <View style={[styles.separator, ]}/>
          <Text style={[styles.body2]}>Cancel Anytime</Text>
          <Text style={[styles.body1]}>At Tatalapp is recurring subscription. If you decide to purchase a subcription, an initial payment will be...</Text>
        </ScrollView>
        <View style={localStyles.container3}> 
        <Text style={[styles.body2]}>{I18n.t('before_lbl6_1')}</Text>
        </View>
         </View>
      )
    }
  }
  
  let { height, width } = Dimensions.get('window');
  const localStyles = StyleSheet.create({
    container: {
      height: height * 0.92,
      paddingTop: height * 0.075,
      paddingHorizontal: width * 0.1,
      flex: 1,
      flexDirection: 'column',
      zIndex: 0,
      
    },
    container2: {
      position: 'absolute'
    },
    container3: {
      position: 'absolute',
      marginTop: height * 0.92,
      height: height * 0.08,
      width: width,
      zIndex: 2,
      backgroundColor: '#BDE0FC',
    },
    marginB: {
      marginBottom: height * 0.04,
    }
  })
  
  export default StartTrialView