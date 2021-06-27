import React,{useContext} from 'react'
import styled  from "styled-components";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import TransitionsModal from './TransitionModal';
import {DisplayListContext} from '../../Context/DisplayList'
import {NotesContext} from '../../Context/Notes'


export default  function DisplayNote({id,title,note}) {
    const [open, setOpen] = React.useState(false);

    const [displaylist,setDisplayList] =  useContext(DisplayListContext);

    const [notes,setNotes] = useContext(NotesContext);

    const handleDeleteNote = ()=>{
        setNotes([...notes.filter(n=> n.id != id)])
    }

    return (<>
            
       <DisplayNoteWrapper open={open} displaylist={displaylist}>
           <CheckCircleSharpIcon className="tick-icon"/>
            {(title==note=="")?
            <>
           <DisplayNoteTitle onClick={()=>setOpen(true)}>
                <DisplayText className="h2">{title}</DisplayText>
           </DisplayNoteTitle>
           <DisplayNoteContent onClick={()=>setOpen(true)}>
                <DisplayText>
                {note}
                </DisplayText>
           </DisplayNoteContent>
           </>
                :
           <DisplayNothing  onClick={()=>setOpen(true)}>
               <DisplayText className="nothing">Empty Note</DisplayText>
           </DisplayNothing>
           }
           <DisplayNoteIcons className="icon-active">
                <AddAlertOutlinedIcon className="menu"/>
                <PersonAddOutlinedIcon className="menu"/>
                <ColorLensOutlinedIcon className="menu"/>
                <ImageOutlinedIcon className="menu"/>
                <ArchiveOutlinedIcon className="menu"/>
                <MoreVertOutlinedIcon onClick={handleDeleteNote}  className="menu"/>
                   
           </DisplayNoteIcons>
           
       </DisplayNoteWrapper>
            
       <TransitionsModal open={open} setOpen={setOpen} id={id} title={title} note={note}/>
           
       </>
    )
}


const DisplayNoteWrapper = styled.div`
margin:10px;
display:flex;
flex-direction:column;
width:${props=>!props.displaylist?"230px":"600px"};

border: 1px solid white;
color:white;
border-radius:10px;
position:relative;
opacity:${props=> props.open?0:1};
// max-height:300px;
.menu{
    cursor:pointer;
    padding:5px;
   
    border-radius:50%;
}
.menu:hover{
       
    background:#2F3034;
}
.tick-icon{
    position:absolute;
    left:-13px;
    top:-13px;
    opacity: 0;
}

&:hover{
    .icon-active{
        opacity:0.7;
        cursor:pointer;
    }
    .tick-icon{
        opacity:1;
        cursor:pointer;
    }
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
}


`;
const DisplayNoteTitle = styled.div`
padding:10px;

`;
const DisplayNoteContent = styled.div`
padding:10px;
max-height:300px;
overflow:hidden;

`;
const DisplayNoteIcons = styled.div`
display:flex;
opacity : 0;
justify-content :space-around;
padding-top:20px;
padding-bottom:10px;
trancition : 3s ease;


// &:hover{
//     opacity: 0.7;
//     cursor:pointer;

    
// }

`;
const DisplayText = styled.p`
 &.h2{
    font-weight:700;
}
&.h4{
    font-weight:400;
}
&.nothing{
    font-size:30px;
}
`;

const DisplayNothing = styled.div`
// background:red;
padding-top: 10px;
text-align:center;
opacity: 0.5;
// height : 50%;
`;