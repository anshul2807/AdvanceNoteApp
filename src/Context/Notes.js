import React ,{ createContext, useState} from 'react'

export const NotesContext = createContext();

export const NotesProvider = (props)=> {
    const [notes,setNotes] = useState([{title:"Title",note:"Sample New Notes"},
                                        {title:"Title",note:"Sample New Notes"},
                                        {title:"Title",note:"Sample New Notes"},
                                        {title:"Title",note:"Sample New NotesSample New NotesSample New NotesSample New No NotesSample New NotesSample New No NotesSample New NotesSample New NotesSample New Notes"},
                                        {title:"Title",note:"Sample New NoNew NotesSample New NotesSaNew NotesSample New NotesSaNew NotesSample New NotesSates"},
                                        {title:"Title",note:"Sample New Notes"},
                                        {title:"Title",note:"Sample New Notes"},
                                        {title:"Title",note:"Sample New Notes"},
                                        {title:"Title",note:"SampNew NotesSample New NotesSaNew NotesSample New NotesSale New Notes"}
                                        ]);
    return (
        <NotesContext.Provider value={ [notes,setNotes]}>
            {props.children}
        </NotesContext.Provider>
    );
}
