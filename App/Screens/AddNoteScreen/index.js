import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../../Themes'

// Components
import { RoudedButton } from '../../Components/Buttons'
import { SimpleInput } from '../../Components/Inputs'

// Styles
import styles from './styles'

export default class AddNoteScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  onNoteAdding = () => {
    const { freshNote, onNoteAdding } = this.props
    onNoteAdding(freshNote)
  }

  showNotes = () => {
    this.props.navigation.navigate('NotesListScreen')
  }

  render () {
    const {
      onNoteTyping,
      freshNote,
    } = this.props
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>
          <View style={styles.section}>
            <SimpleInput 
              onChange={onNoteTyping}
              value={freshNote}
            />
          </View>
          <RoudedButton
            onPress={this.onNoteAdding}
            text="Save Note"
            style={styles.save}
          />
          <RoudedButton
            onPress={this.showNotes}
            text="Show Notes"
            style={styles.navigateTo}
          />
        </ScrollView>
      </View>
    )
  }
}
