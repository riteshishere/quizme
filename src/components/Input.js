import React, { useState } from 'react';
import styled from 'styled-components';
import { accent, inputBorderColor, placeholdeColor } from "../utils/constant";
export const Input = styled.input`
    font-size:1rem;
    padding:.5rem;
    padding-left:1rem;
    width:100%;
    border:2px solid ${inputBorderColor};
    border-radius:.1rem;
    @media (min-width:700px){
        font-size:1.1rem;
    }
    @media (min-width:1000px){
        font-size:1.2rem;
    }
    &:placeholder{
        color:${placeholdeColor};
    }
    &:focus,&:active{
        outline:none;
        border-color:${accent};
    }
`
export const FileInput = styled.input`
    position:absolute;
    padding:.8rem;
    opacity:0;
    width:8rem;
    cursor:pointer;
`
export const FileInputWrapper = styled.div`
    color:${accent};
    position:relative;
    display:flex;
    align-items:center;
    font-weight:600;
    .text{
        margin-left:1rem;
    }
    .button{
        border:2px solid ${accent};
        color:${accent};
        font-weight:600;
    }
`
export const LabledIconInput = styled(Input)`
    border:none;
    padding:.5rem .1rem .5rem 2rem;
    border-bottom:2px solid ${inputBorderColor};
    &:focus,&:active{
        border:none;
        border-bottom:2px solid ${accent};
    }
`
export const LabledIconInputWrapper = styled.div`
    position:relative;
    .icon{
        position:absolute;
        top:20%;
        left:0;
        font-size:1.2rem;
    }
    input:active+.icon,input:focus+.icon{
        color:${accent};
    }
`
export const Checkbox = styled.input`
    position:absolute;
    opacity:0;
    height:1rem;
    width:1rem;
    cursor:pointer;
    z-index:1;
`
export const CheckboxWrapper = styled.div`
    position:relative;
    display:flex;
    padding:.5rem 0;
    align-items:center;
    .box{
        width:1rem;
        height:1rem;
        margin:0;
        display:flex;
        align-items:center;
        padding:0;
        border-radius:.1rem;
        border:1px solid ${inputBorderColor};
        outline:none;
        box-shadow:none;
        .icon{
            line-height:1.5rem;
            font-size:.8rem;
            color:white;
            display:none;
        }
    }
    input:checked+.box{
        background:${accent};
        border:1px solid ${accent};
        .icon{
            display:inline-block;
        }
    }
    label{
        font-size:1.1rem;
        color:#222;
        margin-left:1rem;
        @media (min-width:700px){
            font-size:1.15rem;
        }
        @media (min-width:1000px){
            font-size:1.2rem;
        }
        a{
            color:${accent};
            text-decoration:underline;
            &:hover{
                color:rgba(216,32,68,.9);
            }
        }
    }
`
export function CheckboxInput(props) {
    return (
        <CheckboxWrapper>
            <Checkbox name={props.name} type="checkbox" />
            <div className="box">
                <i className="fas fa-check icon"></i>
            </div>
            <label>{props.children}</label>
        </CheckboxWrapper>
    )
}
export const RadioInputView = styled.input`
    position: absolute;
    top: 0;
    height: 100%;
    z-index:2;
    opacity:0;
    width: 100%;
`

// Customised hooks
export const useInput = (props) => {
    const [value, setValue] = useState("");
    const input = <Input value={value} onChange={e => setValue(e.target.value)} type={props.type} placeholder={props.placeholder} name={props.name} autoComplete="off" />;
    return [value, input];
};

export const useLabledIconInput = props => {
    const [value, setValue] = useState("");
    const input = <LabledIconInputWrapper>
        <LabledIconInput value={value} onChange={e => setValue(e.target.value)} type={props.type} placeholder={props.placeholder} name={props.name} autoComplete="off" />
        <i className={"fas icon " + props.icon}></i>
    </LabledIconInputWrapper>
    return [value, input];
};

// Not to be considered as a hook
export const RadioInput = props => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        props.setAns(name-1, value);
    }
    return <RadioInputView type="radio" name={props.name} value={props.value} checked={props.checked} onChange={handleChange} />
}
