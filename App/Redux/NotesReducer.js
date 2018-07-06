import { NOTE_CONSTANTS } from './Actions/index'

const initialState = {
  notes: [],
  freshNote: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NOTE_CONSTANTS.ON_NOTE_TYPING: {
      return { ...state, freshNote: action.payload }
    }
    case NOTE_CONSTANTS.ON_NOTE_ADDING: {
      return { ...state, notes: state.notes.concat(action.payload), freshNote: '' }
    }
    default: 
      return { ...state }
  }
}
