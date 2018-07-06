import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddNoteScreen from '../../Screens/AddNoteScreen'
import { noteActions } from '../../Redux/Actions'
const { onNoteAdding, onNoteTyping } = noteActions

export default connect(
  (store) => ({
    notes: store.notes.notes,
    freshNote: store.notes.freshNote,
  }), 
  (dispatch) => ({
    onNoteAdding(note) {dispatch(onNoteAdding(note));},
    onNoteTyping(note) {dispatch(onNoteTyping(note));},
  })
)(AddNoteScreen);
