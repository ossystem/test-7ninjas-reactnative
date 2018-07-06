import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotesListScreen from '../../Screens/NotesListScreen'
import { noteActions } from '../../Redux/Actions'
const { onNoteAdding, onNoteTyping } = noteActions

export default connect(
  (store) => ({
    notes: store.notes.notes,
  }), 
  (dispatch) => ({
    
  })
)(NotesListScreen);
