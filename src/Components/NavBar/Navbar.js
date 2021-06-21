import styled  from "styled-components";
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import RefreshIcon from '@material-ui/icons/Refresh';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import { useState,useContext } from "react";
import {SidebarToggleContext} from '../../Context/SidebarToggle';


export default function Navbar() {

    const [sideToggle,setSideToggle] = useContext(SidebarToggleContext);

    const [inputclose,setInputClose] = useState(false);
    const [search,setSearch] = useState('')

   
    
    const handleInputcloseV1 = () =>{
        setSearch('')
        setInputClose(!inputclose);
        
    }
    const handleInputcloseV2 = () =>{
        if(!inputclose)
             setInputClose(true)
    }

  return (
      <NavWrapper >
        <MenuSharpIcon className="menu" fontSize="medium" color="inherit" onClick={()=>setSideToggle(!sideToggle)}/> 
        <Heading>Keep Notes</Heading>
        <InputWrapper inputclose={inputclose} >
            <SearchRoundedIcon className="menu search-icon"  />
            <Input  onClick={handleInputcloseV2} value={search} onChange={e=> setSearch(e.target.value)} />
            <CloseIcon   className="menu inputcloses search-icon"  onClick={handleInputcloseV1}/>
        </InputWrapper>
        <RighWrapper>
            <RefreshIcon className="menu" fontSize="medium" />
            <ViewStreamOutlinedIcon  className="menu" fontSize="medium"/>
            <SettingsIcon className="menu" fontSize="medium"/>
            <AccountCircleRoundedIcon className="menu" fontSize="medium" />
        </RighWrapper>
      </NavWrapper>
  );
}

const NavWrapper = styled.div`
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        border-bottom:1px solid #525355;
        height:65px;
        position:sticky;
        background-color: #202124;
        color:white;
        
       
    .menu{
        cursor:pointer;
        padding:10px;
       
        border-radius:50%;
       
    }
    .menu:hover{
       
        background:#2F3034;
    }
    .menu:active{
        opacity:0.7;
    }
    .search-icon{
        margin:5px;
       
    }
    .search-icon:hover{
        background:#5E5E61;
    }
`;

const Heading = styled.h1`
  cursor:pointer;
  opacity:0.9;
`;

const InputWrapper = styled.div`
       
        display:flex;
        flex-direction:row;
        align-items:center;
        min-width:45%;
        padding-right:5px;
       
        border-radius:10px;
        background-color: #525355;
        .inputcloses{
          
            display : ${props => props.inputclose?"inline":"none"}
           
                
        }
        
       
       
       
`;
const Input = styled.input.attrs(props=>({
            type: "text",
            placeholder:"Search"
        }))
        `
        width:80%;
        font-size:18px;
        padding:10px;
      
        border:none;
        
        background-color: #525355;
        color: white;
        font-weight:400;
        &:focus{
            outline:none;
            background-color:white;
            color:black;
            font-weight:400;
            width:100%;
            
        }
        &::placeholder{
            font-weight:700;
            color:white;
            opacity:0.7;
        }
        
        `;


const RighWrapper = styled.div`
        display:flex;
        flex-direction:row;
        align-items:center;
        min-width:15%;
        justify-content:space-around;
        
`;
