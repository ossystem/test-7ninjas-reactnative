import { createReducer } from 'reduxsauce'
import { NOTE_CONSTANTS } from './Actions/index'

const INITIAL_STATE = {
  notes: [],
  freshNote: '',
};

function onNoteTyping(state, action) {
  return { ...state, freshNote: action.payload }
}

function onNoteAdding(state, action) {
  return { ...state, notes: state.notes.concat(action.payload), freshNote: '' }
}

export const reducer = createReducer(INITIAL_STATE, {
  [NOTE_CONSTANTS.ON_NOTE_TYPING]: onNoteTyping,
  [NOTE_CONSTANTS.ON_NOTE_ADDING]: onNoteAdding,
})

