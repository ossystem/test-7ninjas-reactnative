export const ON_NOTE_TYPING = 'ON_NOTE_TYPING'
export const ON_NOTE_ADDING = 'ON_NOTE_ADDING'



export const onNoteTyping = (note) => {
  return {
    type: ON_NOTE_TYPING,
    payload: note,
  }
}

export const onNoteAdding = (note) => {
  return {
    type: ON_NOTE_ADDING,
    payload: note,
  }
}


