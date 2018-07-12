import React, { Component } from 'react'
import { ScrollView, View, Text, } from 'react-native'
import { Images } from '../../Themes'

import MyModal from '../../Components/Modal'
import { RoudedButton } from '../../Components/Buttons'
import NotesList from '../../Components/NotesList'

// Styles
import styles from './styles'

export default class NotesListScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  state = {
    modalVisible: false,
    text: '',
  }

  renderModal = () => {
    const { modalVisible, text } = this.state
    return (
      <MyModal
        visible={modalVisible}
      >
        <View
          style={styles.details}
        >
          <Text>
            {text}
          </Text>
          <RoudedButton
            style={styles.button}
            onPress={this.closeDatails}
            text="Close"
          />
        </View>
      </MyModal>
    );
  }

  closeDatails = () => {
    this.setState({
      modalVisible: false,
      text: '',
    });
  }

  showDetails = (text) => {
    console.log('SHOW_DETAILS', text);
    this.setState({
      modalVisible: true,
      text: text,
    });
  }



  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <NotesList 
            list={this.props.myNotes}
            showDetails={this.showDetails}
          />
        </ScrollView>
        {this.renderModal()}
      </View>
    )
  }
}

