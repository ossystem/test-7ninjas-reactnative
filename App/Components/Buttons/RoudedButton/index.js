import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class RoundedButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string,
  }

  getText () {
    const buttonText = this.props.text ||  ''
    return buttonText
  }

  render () {
    return (
      <TouchableOpacity 
        style={styles.button} 
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
