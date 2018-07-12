import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
  Modal,
  View,
 } from 'react-native'


 import styles from './styles'

export default class MyModal extends Component{
  static defaultProps = {
    animationType: "fade",
    transparent: true,
  }

  static propTypes = {
    animationType: PropTypes.string,
    transparent: PropTypes.bool,
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  }

  render() {
    const {
      animationType,
      transparent,
      visible,
      children,
     } = this.props;
    return (
      <Modal
        animationType={animationType}
        supportedOrientations={['portrait', 'landscape']}
        transparent={transparent}
        visible={visible}
      > 
        <View
          style={styles.container}
        >
          {children}
        </View>
      </Modal>
    );
  }
} 
