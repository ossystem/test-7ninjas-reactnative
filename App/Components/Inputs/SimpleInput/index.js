import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

//styles
import styles from './styles'

export default class SimpleInput extends Component{

  onChangeText = (val) => {
    this.props.onChange(val)
  }

  render() {
    return (
      <TextInput
        style={styles.textField}
        onChangeText={this.onChangeText}
        value={this.props.value}
        multiline={true}
        underlineColorAndroid="transparent"
      />
    );
  }
}



