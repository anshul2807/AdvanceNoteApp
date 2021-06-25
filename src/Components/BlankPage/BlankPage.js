import React from 'react'
import styled  from "styled-components";
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';


export default  function BlankPage({message}) {
    return (
        <BlankWrapper>
            <BlankIcon>
                <WbIncandescentRoundedIcon fontSize="large" htmlColor="white"/>
            </BlankIcon>
            <BlankText>
                <TextField>{message}</TextField>
            </BlankText>
        </BlankWrapper>
    )
}

const BlankWrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center;
margin-top: 20vh;
`;
const BlankIcon = styled.div`

`;
const BlankText = styled.div`

`;

const TextField = styled.p`
    color: #9aa0a6;
    cursor: default;
    font-family: 'Google Sans',Roboto,Arial,sans-serif;
    font-size: 1.375rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.75rem;
`;

