import React,{useContext,useState} from 'react'
import styled  from "styled-components";
import CreateNewNote from "./CreateNewNote"
import DisplayNote from './DisplayNote'
import {NotesContext} from '../../Context/Notes'
import OpenCreateNewNote from './OpenCreateNewNote'
import BlankPage from '../BlankPage/BlankPage'
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';

export default  function Notebody() {

    const [notes,setNotes] = useContext(NotesContext);
   const [togglenote,setToogleNote] = useState(false);


 

    return (
        <NoteWrapper>
           <NoteCreateWrapper>
               {!togglenote?
                <CreateNewNote setToogleNote={setToogleNote}/>
                :
                <OpenCreateNewNote  setToogleNote={setToogleNote}/>
               }
           </NoteCreateWrapper>
           {notes.length != 0?
           <NoteDisplayWrapper>
               {notes.map(note => 
                    <DisplayNote key={note.id} id={note.id} className="item" title={note.title} note={note.note} />
               )}
           </NoteDisplayWrapper>
           :
           <BlankPage WbIncandescentRoundedIcon={WbIncandescentRoundedIcon} message="Notes you add appear here" />
           }
           
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
// display:flex;
// flex-direction:row;
// flex-wrap:wrap;
// justify-content:space-around;
align-items:baseline;

display: grid;
grid-template-columns: auto auto auto ;

// flex-flow: row wrap;
// align-content:stretch;

`;