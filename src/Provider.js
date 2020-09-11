import React, { useReducer } from 'react';
import { initialState, reducer, NotesContext } from './reducer/note';


const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // React.useEffect(() => {
    //     dispatch({
    //         type: 'INIT', notes: [
    //             11,
    //             15,
    //             10
    //         ]
    //     })
    // }, []);
    return (
        <NotesContext.Provider value={[state, dispatch]}>
            {children}
        </NotesContext.Provider>
    );
}

export default Provider;