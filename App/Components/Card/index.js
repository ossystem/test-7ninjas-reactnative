import React, { Component } from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import PropTypes from 'prop-types'

import styles from './styles';

export default class NoteCard extends Component{
  static defaultProps = {
    noteTitle: 'Some Title',
    noteSubtitle: 'Subtitle',
    text: '',
    actions: [
      {
        onPress: () => {},
        title: 'Show',
        color: 'blue',
      }
    ] 
  }

  static propTypes = {
    noteTitle: PropTypes.string,
    noteSubtitle: PropTypes.string,
    text: PropTypes.string,
    actions: PropTypes.arrayOf(PropTypes.shape({
      onPress: PropTypes.func,
      title: PropTypes.string,
      color: PropTypes.string,
    }))
  }

  renderActions = () => {
    const { actions } = this.props;
    let buttons = null;
    if (actions.length) {
      buttons = actions.map((action) => {
        const { onPress, title, color } = action;
        return (
          <CardButton
            onPress={onPress}
            title={title}
            color={color}
          />
        );
      });
    }
    return buttons;
  }

  renderTitle = () => {
    const { title, subtitle } = this.props;
    let cardTitle = null;
    return (
      <CardTitle 
        title={title || ''}
        subtitle={subtitle || ''}
      />
    );
  } 

  render() {
    const { text } = this.props;
    return (
      <Card
        style={styles.card}
      >
        {this.renderTitle()}
        <CardContent
          style={styles.content}
          text={text}
        />
        <CardAction 
          separator={true} 
          inColumn={false}
        >
          {this.renderActions()}
        </CardAction>
      </Card>
    );
  }
}
