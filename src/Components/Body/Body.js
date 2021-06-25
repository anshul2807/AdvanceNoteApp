import React from 'react'
import styled  from "styled-components";
import Sidebar from './Sidebar'
import Notebody from './Notebody'
export default function Body() {
    return (
        <BodyWrapper>
            <Sidebar />
            <Notebody />
        </BodyWrapper>
    )
}

const BodyWrapper = styled.div`
        display:flex;
        flex-direction:row;
        background-color: #202124;
        margin-top:65px;
        border-top:1px solid #525355;
        min-height:90vh;
`;
