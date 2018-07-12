import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { Images } from '../../Themes'

import NotesList from '../../Components/NotesList'

// Styles
import styles from './styles'

export default class NotesListScreen extends Component {

  static propTypes = {}

  static defaultProps = {}

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <NotesList 
            list={this.props.myNotes}
          />
        </ScrollView>
      </View>
    )
  }
}