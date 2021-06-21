import React,{useContext} from 'react'
import styled  from "styled-components";
import CreateNewNote from "./CreateNewNote"
import DisplayNote from './DisplayNote'
import {NotesContext} from '../../Context/Notes'



export default  function Notebody() {

    const [notes,setNotes] = useContext(NotesContext);
   

    return (
        <NoteWrapper>
           <NoteCreateWrapper>
                <CreateNewNote />
           </NoteCreateWrapper>
           <NoteDisplayWrapper>
               {notes.map(note => 
                    <DisplayNote className="item" title={note.title} note={note.note} />
               )}
           </NoteDisplayWrapper>
           
        </NoteWrapper>
    )
}


const NoteWrapper = styled.div`
        display flex;
        flex-direction:column;
        
       align-items:center;
        width:100%;
       
`;

const Heading = styled.p`
    &.heading_h1{
        font-size:25px;
    }
`;

const NoteCreateWrapper = styled.div`
padding-top:30px;
padding-bottom:30px;
`;
const NoteDisplayWrapper = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
align-items:baseline;
// flex-flow: row wrap;
// align-content:stretch;

`;
