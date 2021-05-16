import React from "react";
import styled from 'styled-components';
import { paraColor } from "../utils/constant";

const Para = styled.p`
    color:${paraColor};
    font-size:1.1rem;
    @media (min-width:700px){
        font-size:1.2rem;
    }
    @media (min-width:1000px){
        font-size:1.3rem;
    }
    font-weight:600;
`
export default (props) => {
    return (
        <Para>
            {props.para}
        </Para>
    )
};
