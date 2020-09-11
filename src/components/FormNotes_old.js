import React, { useContext } from 'react';
import { NotesContext } from '../reducer/note.js';

export const FormNotes = (props) => {
    const [state, dispatch] = useContext(NotesContext);
    const { note, notes, notesMax, active } = state;

    console.log(state);

    const handleChange = e => {
        const { value, name } = e.target;
        dispatch({ type: "SET_NOTE", note: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(notesMax);
        if(state.notesMax < 2){
            dispatch({ type: "ADD_NOTE" });
            state.notesMax++
        } else {
            dispatch({ type: "MOY_NOTES" });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div><input type="text" name="note" value={note} onChange={handleChange} disabled={active} /></div>
                <div><button disabled={active}>Add</button></div>
            </form>
            {notes.map((num, i) => <p key={i}>{num}</p>)}
        </>
    )
}