import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddNoteScreen from '../../Screens/AddNoteScreen'
import { noteActions } from '../../Redux/Actions'
const { onNoteAdding, onNoteTyping } = noteActions

export default connect(
  (store) => ({
    myNotes: store.myNotes.notes,
    freshNote: store.myNotes.freshNote,
  }), 
  (dispatch) => ({
    onNoteAdding(note) {dispatch(onNoteAdding(note));},
    onNoteTyping(note) {dispatch(onNoteTyping(note));},
  })
)(AddNoteScreen);
