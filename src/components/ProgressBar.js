import React from "react";
import styled from "styled-components";
import { FlexBox } from "../utils/Flexbox";
import { lightGrey, darkGrey } from "../utils/constant"

// Make margin config more robust
const Label = styled.label`
    font-size:0.8rem;
    margin-right:${props => (props.marginRight && "0.5rem" || "0")};
    margin-left:${props => (props.marginLeft && "0.5rem" || "0")};
    @media (min-width:700px){
        font-size:0.9rem;
    }
    @media (min-width:1000px){
        font-size:1rem;
    }
`;

// Try it with respect to flex-component
const Bar = styled.div`
    position:relative;
    background:${lightGrey};
    height:0.6rem;
    width:15rem;
    border-radius:0.5rem;
`;

const Progress = styled.div.attrs(props => ({
    style: {
        width: props.progress >= 1 ? "100%" : (props.progress * 100) + "%"
    }
}))`
    position:absolute;
    height:inherit;
    border-radius:inherit;
    background:${darkGrey};
`;

const totalSec = (min, sec) => (min * 60 + sec);

export default function (props) {
    const { label, currentValue, maxValue } = props;

    let current, total;
    if (props.timer) {
        let currentMin = parseInt(currentValue.split(":")[0]);
        let currentSec = parseInt(currentValue.split(":")[1]);
        current = totalSec(currentMin, currentSec);
        let maxMin = parseInt(maxValue.split(":")[0]);
        let maxSsec = parseInt(maxValue.split(":")[1]);
        total = totalSec(maxMin, maxSsec);
    } else {
        current = currentValue;
        total = maxValue;
    }

    return (
        <FlexBox>
            <Label marginRight>{label}:</Label>
            <Bar>
                <Progress progress={current / total}></Progress>
            </Bar>
            <Label marginLeft>{currentValue} / {maxValue}</Label>
        </FlexBox>
    );

}