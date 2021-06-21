import React from 'react'
import styled  from "styled-components";
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';


export default function CreateNewNote() {
    return (
        <NewNoteWrapper>
            <NewNoteHeader>Take a note...</NewNoteHeader>
            <NewNoteIcons>
                <CheckBoxOutlinedIcon className="menu"/>
                <BrushIcon className="menu"/>
                <ImageOutlinedIcon className="menu"/>
            </NewNoteIcons>
        </NewNoteWrapper>
    )
}

const NewNoteWrapper = styled.div`
        display: flex;
        
        align-items:center;
        color: white;
        border: 1px solid rgba(255, 255, 255, .5);
        box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
        width:598px;
        height:46px;
        opacity:0.7;
        border-radius: 10px;
        .menu{
            // border: 1px solid white;
            padding:10px;
            border-radius:50%;
            cursor:pointer;
        }
        .menu:hover{
            background: #303236;
        }
        
`;
const NewNoteIcons = styled.div`
flex:0.3;
// border: 1px solid white;
display:flex;
justify-content:space-around;
align-items:center;
height:100%;
`;
   
const NewNoteHeader = styled.p`
flex:0.7;
// border: 1px solid white;
display:flex;
align-items:center;
padding-left:20px;
height:100%;
cursor:text;
opacity:0.5;
`;
   
   