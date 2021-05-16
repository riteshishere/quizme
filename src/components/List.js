import React from "react";
import styled from "styled-components"
import { inputBorderColor, dark, darkGrey, accent, pure } from "../utils/constant";
import { Bookmark } from "./Button";
import { RadioInputView } from "./Input";

export const Li = styled.li`
    color: ${props => (props.checked ? inputBorderColor : dark)};
    position: relative;
    span {
        position: relative;
        left: 10px;
    }
`
export const Row = styled.div`
    position: relative;
    border-bottom: 1px solid #bbbbbb;
    border: ${props => (props.action ? `.5px solid ${inputBorderColor}` : "")};
    border-top: ${props => (props.borderTop ? `1px solid ${inputBorderColor}` : "none")};
    padding: 1rem;
    padding-left:1.5rem;
    cursor: pointer;
    &.active {
        border-right: ${props => (props.action ? "" : `5px solid ${accent}`)};
    }
    &.active + .question-container {
        display: block;
    }
    ${Li} {
        font-weight: ${props => (props.action ? "bold" : "regular")};
        span {
            font-weight: 400;
        }
    }
    @media (max-width: 699px) {
        border-bottom: ${props => (props.action ? `1px solid ${inputBorderColor}` : "none")};
    }
`
const StyledCheck = styled.i`
    display: ${props => (props.checked ? "block" : "none")};
    font-size:1.2rem;
    color: #57bb58;
    position: absolute;
    top: .5rem;
    left: -3rem;
    height: 1rem;
    width: 1rem;
`
const BookmarkContainer = styled.div`
    position: absolute;
    left: 0.4rem;
    bottom: 2rem;
    @media (min-width: 350px) {
        bottom: 1rem;
    }
    @media (min-width: 600px) {
        bottom: 0;
    }
    @media (min-width: 700px) {
        bottom: 2rem;
    }
    button i {
        color: ${props => (props.bookmarked ? accent : props.checked ? inputBorderColor : darkGrey)};
    }
    button:focus {
        outline: 0;
    }
`
export const InputContainer = styled.div`
    position: relative;
    margin: 0;
    ${RadioInputView}:checked + ${Row} {
        background: rgba(0, 255, 0, 0.15);
        transform: scale(1.01);
        transition: transform 0.1s ease-in-out;
        border: 1px solid ${pure};
    }
`
function ListRow(props) {
    const { setCurrentActiveQues, index, isBookmarked, setBookmarks } = props;
    const questionNumber = index + 1; 
    
    const checked = !!props.ans[index];
    
    function makeActive(e) {
        setCurrentActiveQues(index);
        document.querySelector("div.question.active").classList.remove("active");
        e.currentTarget.classList.add("active");
    }
    
    function bookMarkQuestion(e) {
        e.preventDefault();
        setBookmarks(prev => {
            const newAns = { ...prev, [index]: !prev[index] };
            return newAns;
        })
    }

    return (
        <Row aria-label="row" id={"question" + questionNumber} className={"question " + (props.active && "active") || ""} onClick={makeActive}>
            <Li checked={checked}>
                <span>{props.children.question}</span>
                <StyledCheck className="fas fa-check" checked={checked} />
            </Li>
            <BookmarkContainer onClick={bookMarkQuestion} bookmarked={isBookmarked} checked={checked}>
                <Bookmark />
            </BookmarkContainer>
        </Row>
    );
}

export const DirectoryList = React.memo(ListRow);