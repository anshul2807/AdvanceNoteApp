import React,{useState,useContext,useEffect} from 'react'
import styled  from "styled-components";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import {NotesContext} from '../../Context/Notes'

export default function OpenModal({id,title,note,setOpen}){

    const [notes,setNotes] = useContext(NotesContext);

    const [localtitle,setLocalTitle] = useState(title);
    const [localnote,setLocalNote] = useState(note);

   useEffect(() =>{
    const temp = notes.filter(note=> note.id === id);
    temp.title = localtitle
    temp.note = localnote;
    console.log(temp);

    const newList = notes.map((note) => {
        if (note.id === id) {
          const updatednote = {
            ...note,
            title:localtitle,
            note : localnote
          };
   
          return updatednote;
        }
   
        return note;
      });
   
      setNotes(newList);
   
    console.log(notes);
    

   },[localtitle,localnote]);

    return (
        <OpenModalWrapper>
            <OpenModalTitle>
                <InputField  placeholder="Title" className="title" value={localtitle} onChange={(e)=>setLocalTitle(e.target.value)}/>
            </OpenModalTitle>

            <OpenModalContent>
                <InputField   placeholder="note"   autofocus="true"   className="notes" value={localnote} onChange={(e)=>setLocalNote(e.target.value)} />
            </OpenModalContent>

            <OpenModalIcons>
                <OpenModalIconsLeft>
                    <AddAlertOutlinedIcon className="menu" fontSize="small" />
                    <PersonAddOutlinedIcon className="menu" fontSize="small"/>
                    <ColorLensOutlinedIcon className="menu" fontSize="small"/>
                    <ImageOutlinedIcon className="menu"  fontSize="small" />
                    <ArchiveOutlinedIcon className="menu" fontSize="small"/>
                    <MoreVertOutlinedIcon className="menu" fontSize="small"/>
                </OpenModalIconsLeft>

                <OpenModalIconsRight>
                    <ModalCloseButton onClick={()=>setOpen(false)}>
                        Close
                    </ModalCloseButton>
                </OpenModalIconsRight>

            </OpenModalIcons>
        </OpenModalWrapper>
    )
}

const OpenModalWrapper = styled.div`
width: 600px;
max-height: 600px;
background : #202124;
color : white;
padding : 10px 10px 0px 10px;
border-radius:10px;
`;

const OpenModalTitle = styled.div`
max-height: 100px;
margin-bottom:5px;
`;

const OpenModalContent = styled.div`
height: 400px;
// height:100%;
// background:red;


`;

const OpenModalIcons = styled.div`
display:flex;
background:#202124;
align-items: center;

// z-index:1;
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

const OpenModalIconsLeft = styled.div`
flex:0.6;
display:flex;
justify-content: space-around;
align-items: center;
// border: 1px solid black;
padding :5px

`;

const OpenModalIconsRight = styled.div`
flex:0.4;

display:flex;
justify-content:center;
// border: 1px solid black;
padding : 5px;
`;

const InputField = styled.textarea`
    width:100%;
    background:#202124;
    color : white;
    font-size: 17px;
    opacity:0.7;
    font-weight:600;
    border : none;
    
    overflow-wrap: break-word;
    resize: none;
    height : 100%;
    &::-webkit-scrollbar {
        width: 10px;
        cursor:pointer;
      }
      
    
      &::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
       
    
      &::-webkit-scrollbar-thumb {
        background: #888; 
      }
      
      
      &::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    &:focus{
       
        outline : none;
    }

    &.title
    {
        height : 100%;
      
       font-size: 25px;
       opacity:1;
       font-weight:500;
    }
    &.noted{
       
       
       
       
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
