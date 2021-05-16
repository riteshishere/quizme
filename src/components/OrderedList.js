import React from "react";
import styled from 'styled-components';
import { RadioInput } from "./Input";
import { DirectoryList, InputContainer, Li, Row } from "./List";
export const StyledOptionCheck = styled.i`
    display: ${props => (props.checked ? "block" : "none")};
    font-size: 1.2rem;
    color: #57bb58;
    position: absolute;
    top:50%;
    transform:translateY(-8px);
    right:2rem;
    height: 1rem;
    width: 1rem;
`
export const OrderedList = styled.ol`
    padding:${props => props.attribute === "A" ? "0" : "0 0 0 2rem"};
    list-style-type:${props => 
        props.attribute === "A" ? "upper-alpha" : 
        props.attribute === "01" ? "decimal-leading-zero": "decimal"};
`
export const OrderedListContainer = (props) => {
    const { type } = props;
    if (type === "directory") {
        const { answers, setCurrentActiveQues, currentActiveQues, bookmarks, setBookmarks } = props;
        return (
            <OrderedList attribute="01">
                {props.questions.map((q, index) =>
                    <DirectoryList
                        key={index}
                        index={index}
                        active={index === currentActiveQues}
                        ans={answers}
                        setCurrentActiveQues={setCurrentActiveQues}
                        isBookmarked={bookmarks[index]}
                        setBookmarks={setBookmarks}
                    >
                        {q}
                    </DirectoryList>
                )}
            </OrderedList>
        )
    } else if(type==="action"){
        const { questionNumber, options, answer, setAns } = props;
        return (
            <OrderedList attribute="A">
                {options.map((option, index) => (
                    <InputContainer key={option}>
                        <RadioInput type="radio" name={questionNumber} value={option} checked={(answer && answer===option)||false} setAns={setAns} />
                        <Row style={{paddingLeft:"2.5rem"}} action={true.toString()} borderTop={index === 0}>
                            <StyledOptionCheck className="fas fa-check" checked={(answer && answer===option)||false} />
                            <Li style={{fontSize:"1.2rem"}}>
                                <span style={{fontSize:"1rem"}}>{option}</span>
                            </Li>
                        </Row>
                    </InputContainer>
                ))}
            </OrderedList>
        )
    }
}
