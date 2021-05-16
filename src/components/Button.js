import React from "react";
import styled, { keyframes } from "styled-components";
import { accent, dark, lightGrey, pure } from "../utils/constant";

const Button = styled.button`
    width:9rem;
    padding:0.5rem 0;
    border:2px solid ${dark};
    color:${dark};
    margin: 1rem 0;
    font-size:1.1rem;
    border-radius:0.2rem;
    cursor:pointer;
    display:${props => props.hidden ? "none" : "block"};
    &:active{
        outline:none;
    }
`;
export const AccentButton = styled(Button)`
    color:${pure};
    border-color:${accent};
    background:${accent};
`;
export const OutlineButton = styled(AccentButton)`
    color:${accent};
    background:${pure};
    
`
export const LinkButton = styled(OutlineButton)`
    margin:0.5rem 0;
    border:none;
    padding:${props => props.padding || "0"};
    width:fit-content;
`
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`
const Custom = styled(LinkButton)`
    color:${ lightGrey };
    height:100%;
    padding:0;
    margin:0;
    -moz-transition: all 1s cubic-bezier(.68,-0.55,.27,1.55);
    -webkit-transition: all 1s cubic-bezier(.68,-0.55,.27,1.55);
    transition: all 1s cubic-bezier(.68,-0.55,.27,1.55);
    &.rotateBack {
        -moz-transform:rotate(360deg);
        -webkit-transform:rotate(360deg);
        transform:rotate(360deg);
    }
`
/**
&:active{
    -webkit-animation: ${ spin } 1s cubic-bezier(.68,-0.55,.27,1.55) 1;
    animation: ${ spin } 1s cubic-bezier(.68,-0.55,.27,1.55) 1;
}
**/
export const Bookmark = (props) => {
    function toggleClass(e) {
        e.currentTarget.classList.toggle("rotateBack");
    }
    return (
        <Custom {...props} onClick={toggleClass}><i className="far fa-bookmark"></i></Custom>
    );
}
