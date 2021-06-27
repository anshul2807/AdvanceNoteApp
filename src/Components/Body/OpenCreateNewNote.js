import React ,{useContext,useState} from 'react'
import styled  from "styled-components";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import {NotesContext} from '../../Context/Notes'



export default function OpenCreateNewNote({setToogleNote}) {

    const [notes,setNotes] = useContext(NotesContext);

    const [localnotes,setLocalNotes] = useState({id: Date.now().toString(),title:"",note:""});

    
    const handleLocalNote = () =>{
        if(localnotes.note != "" || localnotes.title != ""){
            // setLocalNotes({...localnotes, id : Date.now().toString() })
            setNotes([localnotes,...notes])
            
            setLocalNotes({id:"",title:"",note:""})
            console.log( Date.now().toString());
        }
        setToogleNote(false)
    }

    return (
       <NewNoteWrapper >
          
            <OpenModalTitle>
                <InputField value={localnotes.title} onChange={(e)=>setLocalNotes({...localnotes,title : e.target.value})} placeholder="Title" rows="1" className="title"/>
            </OpenModalTitle>

            <OpenModalContent>
                <InputField  value={localnotes.note} onChange={(e)=>setLocalNotes({...localnotes,note : e.target.value})} placeholder="Take a note..."  rows="1" className="content"  autoFocus="true"  />
            </OpenModalContent>
            <NewNoteIcons>
                    <NewNoteIconsLeft>
                        <AddAlertOutlinedIcon className="menu" fontSize="small" />
                        <PersonAddOutlinedIcon className="menu" fontSize="small"/>
                        <ColorLensOutlinedIcon className="menu" fontSize="small"/>
                        <ImageOutlinedIcon className="menu"  fontSize="small" />
                        <ArchiveOutlinedIcon className="menu" fontSize="small"/>
                        <MoreVertOutlinedIcon className="menu" fontSize="small"/>
                    </NewNoteIconsLeft>

                    <NewNoteIconsRight>
                        <ModalCloseButton onClick={handleLocalNote}>
                            Close
                        </ModalCloseButton>
                    </NewNoteIconsRight>

                </NewNoteIcons>
       </NewNoteWrapper>
    )
}


const  NewNoteWrapper = styled.div`
width:600px;
height : 120px;
border: 1px solid rgba(255, 255, 255, .5);
box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
color : white;
padding: 10px 0px 0 0px;
border-radius: 10px;
opacity:0.7;

`;

const OpenModalTitle = styled.div`
margin-bottom:10px;
`;

const OpenModalContent = styled.div`



`;

const NewNoteIcons = styled.div`
display:flex;
background:#202124;
align-items: center;


.menu{
// border:1px solid black;
padding:5px;
border-radius:50%;
}
.menu:hover{
cursor:pointer;
background:#2F3034;
}
.menu:active{
    opacity:0.7;
}
`;

const NewNoteIconsLeft = styled.div`
flex:0.6;
display:flex;
justify-content: space-around;
align-items: center;
// border: 1px solid black;
padding :5px

`;

const NewNoteIconsRight = styled.div`
flex:0.4;

display:flex;
justify-content:center;
// border: 1px solid black;
padding : 5px;
`;


const InputField = styled.textarea`
    width: 95%;
    font-size: 15px;
    background : #202124;
    color : white;
    border: none;
    overflow-wrap: break-word;
    resize: none;
    padding-left : 10px;
    &::placeholder {
        color:white;
        font-size: 15px;
        opacity:0.7;s
      }
    &:focus{
        outline:none;
    }
    &.title{
    
    }
    &.content{

    }
  `;  

const ModalCloseButton = styled.a`
font-weight: 400;
padding:5px 15px 5px 15px;
// border:1px solid black;
background: #202124;
border-radius : 5px;
cursor:pointer;
user-select: none;

&:hover{
    background:#2F3034;
    opacity : 0.7;
}
&:active{
    opacity : 1;
}
`;

