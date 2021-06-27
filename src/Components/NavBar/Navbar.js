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
import {DisplayListContext} from '../../Context/DisplayList'
import ViewCompactOutlinedIcon from '@material-ui/icons/ViewCompactOutlined';


export default function Navbar() {

    const [sideToggle,setSideToggle] = useContext(SidebarToggleContext);

    const [inputclose,setInputClose] = useState(false);
    const [search,setSearch] = useState('')
    const [displaylist,setDisplayList] =  useContext(DisplayListContext);
   
    
    const handleInputcloseV1 = () =>{
        setSearch('')
        setInputClose(!inputclose);
        
    }
    const handleInputcloseV2 = () =>{
        if(!inputclose)
             setInputClose(true)
    }

    const [inputcolor,setInputColor] = useState(false);


  return (
      <NavWrapper  colorsI={inputcolor}>
        <MenuSharpIcon className="menu" fontSize="medium" color="inherit" onClick={()=>setSideToggle(!sideToggle)}/> 
        <Heading>Keep Notes</Heading>
        <InputWrapper className="mobile" inputclose={inputclose} onFocus={(e) => {setInputColor(true)}} onBlur={(e) => {setInputColor(false)}} colorsI={inputcolor}>
            <SearchRoundedIcon colorsI={inputcolor} className="menu search-icon"  />
            <Input colorsI={inputcolor}  onClick={handleInputcloseV2} value={search} onChange={e=> setSearch(e.target.value)} />
            <CloseIcon colorsI={inputcolor}   className="menu inputcloses search-icon"  onClick={handleInputcloseV1}/>
        </InputWrapper>
        <RighWrapper>
            <RefreshIcon className="menu" fontSize="medium" />
            {!displaylist?
            <ViewStreamOutlinedIcon onClick={()=>setDisplayList(!displaylist)} className="menu mobile" fontSize="medium"/>
            :
            <ViewCompactOutlinedIcon onClick={()=>setDisplayList(!displaylist)} className="menu mobile" fontSize="medium"/>
            }
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
        
        height:65px;
        position: fixed;
    top: 0;
    width: 100%;
        background-color: #202124;
        color:white;
        z-index: 986;
        -webkit-box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%);
        box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%), 0px 2px 4px -1px rgb(0 0 0 / 20%);
       
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
       
            background:${(props)=>!props.colorsI ?"#5E5E61" : "#F0F0F0" };
       
        
    }
    @media (max-width: 940px)
    {
     .mobile{
      display:none;   
     }  
    }
    
`;

const Heading = styled.h1`
  cursor:pointer;
  opacity:0.9;
  @media (max-width: 940px)
  {
   font-size: 25px;  
  }
`;

const InputWrapper = styled.div`
       
        display:flex;
        flex-direction:row;
        align-items:center;
        min-width:45%;
        padding-right:5px;
       
        border-radius:10px;
        background-color: ${(props)=>!props.colorsI ? "#525355" : "white" };
        color: ${(props)=>props.colorsI ? "#525355" : "white" };
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
        
        background-color: ${(props)=>!props.colorsI ? "#525355" : "white" };
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
            color:${(props)=>props.colorsI ? "#525355" : "white" };
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
