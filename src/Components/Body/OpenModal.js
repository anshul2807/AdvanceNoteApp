import React from 'react'
import styled  from "styled-components";
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';


export default function OpenModal({title,note}){
    return (
        <OpenModalWrapper>
            <OpenModalTitle>
                <InputField className="title" value={title} />
            </OpenModalTitle>

            <OpenModalContent>
                <InputField autofocus="true"   className="notes" value={note} />
            </OpenModalContent>

            <OpenModalIcons>
                <OpenModalIconsLeft>
                    <AddAlertOutlinedIcon />
                    <PersonAddOutlinedIcon />
                    <ColorLensOutlinedIcon />
                    <ImageOutlinedIcon />
                    <ArchiveOutlinedIcon />
                    <MoreVertOutlinedIcon />
                </OpenModalIconsLeft>

                <OpenModalIconsRight>
                    <ModalCloseButton>
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

`;

const OpenModalTitle = styled.div`
max-height: 100px;
`;

const OpenModalContent = styled.div`
max-height: 400px;
`;

const OpenModalIcons = styled.div`
display:flex;
background:green;
`;

const OpenModalIconsLeft = styled.div`
flex:0.9;

`;

const OpenModalIconsRight = styled.div`
flex:0.1;
`;

const InputField = styled.textarea`
    width:100%;
    background:red;
    &.title
    {
       height : 100%;
       resize: none;
    }
    &.noted{
        height : 100%;
        resize: none;
    }
`;

const ModalCloseButton = styled.button`

`;
