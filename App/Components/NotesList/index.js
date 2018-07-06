import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ListView, Text } from 'react-native'

export default class NotesList extends Component {

  prepareList = (list) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(list);
  }

  render() {
    return (
      <ListView
        dataSource={this.prepareList(this.props.list)}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}
