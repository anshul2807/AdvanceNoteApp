import {useContext} from 'react'
import styled  from "styled-components";
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {SidebarToggleContext} from '../../Context/SidebarToggle'

export default function Sidebar() {

    const [sideToggle,setSideToggle] = useContext(SidebarToggleContext);

    return (
        <SideWrapper sideToggle={sideToggle}>
            <ItemWrapper className="items active">
                <WbIncandescentOutlinedIcon className="icons"/>
                <ItemLabel>Notes</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <NotificationsOutlinedIcon  className="icons"/>
                <ItemLabel>Reminder</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <LabelOutlinedIcon  className="icons"/>
                <ItemLabel>Label</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <LabelOutlinedIcon  className="icons"/>
                <ItemLabel>Label</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <LabelOutlinedIcon  className="icons"/>
                <ItemLabel>Label</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <EditOutlinedIcon className="icons" />
                <ItemLabel>Edit Label</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <ArchiveOutlinedIcon  className="icons"/>
                <ItemLabel>Archive</ItemLabel>
            </ItemWrapper>
            <ItemWrapper className="items">
                <DeleteOutlineOutlinedIcon  className="icons"/>
                <ItemLabel>Trash</ItemLabel>
            </ItemWrapper>
        </SideWrapper>
    )
}

const SideWrapper = styled.div`
    display:${props=>props.sideToggle?"flex":"none"};
    // display:flex;
    flex-direction:column;
    margin-top:5px;
    
    min-width:310px;
    transition: width 3s ease-in-out;
    .icons{
        opacity:0.7;
    }
    .items:hover{
        background:#28292C;
     }
     .active{
         background:#41331C;
     }
     .active:hover{
        background:#41331C;
    }
`;

const ItemWrapper = styled.div`
    display:flex;
    
    flex-direction:row;
    padding-left:45px;
    padding-top:15px;
    padding-bottom:15px;
    width:260px;
    background:#202124;
    color:white;
    border-radius:0px 30px 30px 0px;
    cursor:pointer;
    outline:none !important;
    
`;


const ItemLabel = styled.label`
    
    // display:${props=>props.sideToggle?"inline-block":"none"};
    // display:none;
    margin-left:25px;
    font-weight:700;
`;



