import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, Text } from 'react-native'

import NoteCard from '../Card'

import { styles } from './styles'

export default class NotesList extends Component {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    list: [],
  }

  renderNoteCard = (rowData) => {
    console.log('Row Item DATA', rowData);
    return (
      <NoteCard
        text={rowData.item}
      />
    );
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.list}
        renderItem={this.renderNoteCard}
      />
    );
  }
}
