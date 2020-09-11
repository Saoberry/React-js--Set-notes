import { createContext } from 'react';

//  PAS TOUCHE !!!!!!! (debut)
export const initialState = {
    notes : [17,18],
    note : '',
    notesMax: '1',
    active: false
};
// PAS TOUCHE !!!!!!! (fin)

export const NotesContext = createContext({})

export const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT':

            return {
                ...state,
                notes: action.notes
            }
        case 'SET_NOTE':

                return {
                    ...state,
                    note: action.note
                }
        case 'ADD_NOTE':

            const notes = [...state.notes]; 
            notes.push(Number(state.note));

            return {
                ...state,
                notes: notes,
                note: ''
            }
        case 'MOY_NOTES':

            return {
                ...state,
                active: true
            }

        default:
            return state;
    }
}
