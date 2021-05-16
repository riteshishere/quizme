import React from "react";
import styled from 'styled-components';
export const Heading = styled.h3.attrs(props => ({
    fontWeight: props.fontStyle ? props.fontStyle.fontWeight : 500,
    fontSize: props.fontStyle ? props.fontStyle.fontSize : "unset",
}))`
    color:#222;
    letter-spacing:1px;
    font-size:1rem;
    lineHeight:1.2;
    @media (min-width:700px){
        font-size:1.3rem;
    }
    @media (min-width:1000px){
        font-size:1.5rem;
    }
`;

export default function (props) {
    return (
        <Heading fontStyle={props.fontStyle || null}>
            {props.Title}
        </Heading>
    )
}