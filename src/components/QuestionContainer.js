import React from "react";
import styled from "styled-components";
import { FlexBox } from "../utils/Flexbox";
import Para from "./Paragraph";
import { AccentButton, Bookmark, OutlineButton } from "./Button";
import { OrderedListContainer } from "./OrderedList";
import { accent, darkGrey, paraColor } from "../utils/constant";

const BookmarkContainer = styled(Bookmark)`
    color: ${props => (props.isBookmarked ? accent : props.checked ? inputBorderColor : darkGrey)};
`;
const FlexBoxContainer = styled.div`
    display:${props => props.currentQuestion ? "flex" : "none"};
    flex-direction:column;
    align-items:stretch;
    min-width:10rem;
    width:50%;
    padding:3rem 0 0 3rem;
    > ${OrderedListContainer}{
        margin-left:2.8rem;
    }
`;
const QuestionTitle = styled.div`
    min-height:3rem;
    width:100%;
    margin-bottom:2rem;
    display:grid;
    grid-template-columns:1rem auto;
    grid-gap:0 2rem;
    .index{
        font-size:1.1rem;
        font-weight:600;
        grid-column:1/span 1;
        grid-row:1/span 1;
        margin:auto;
        color:${paraColor};
    }
    ${BookmarkContainer}{
        grid-column:1/span 1;
        grid-row:2/span 1;
        background:transparent;
    }
    p{
        grid-column:2/span 1;
        grid-row:1/span 2;
    }
`;
const ButtonFlexBoxContainer = styled(FlexBox)`
    justify-content:flex-end;
    ${OutlineButton}{
        margin-right:1rem;
    }
`;

export function QuestionContainer (props) {
    const { index, 
        totalNumberOfQuestions, 
        questionJSON, 
        answers,
        setAns, 
        setCurrentActiveQues, 
        currentActiveQues,
        isBookmarked,
        setBookmarks } = props;
    const questionNumber = index + 1;
    const question = questionJSON.question;
    const options = questionJSON.options
    function changeActiveQuestion(e) {
        e.preventDefault();
        setCurrentActiveQues(parseInt(e.currentTarget.getAttribute("aria-controls")));
    }
    function bookMarkQuestion(e) {
        e.preventDefault();
        console.log("Abhi click kiye");
        setBookmarks(prev => {
            const newAns = { ...prev, [index]: !prev[index] };
            return newAns;
        })
    }
    return (
        <FlexBoxContainer currentQuestion={index===currentActiveQues}>
            <QuestionTitle>
                <span className="index">{index+1}.</span>
                <div onClick={bookMarkQuestion}>
                    <BookmarkContainer isBookmarked={isBookmarked} checked={false}/>
                </div>
                <Para para={question} />
            </QuestionTitle>
            <OrderedListContainer questionNumber={questionNumber} options={options} answer={answers[index]} setAns={setAns} type="action" />
            <ButtonFlexBoxContainer>
                <OutlineButton aria-controls={index - 1} onClick={changeActiveQuestion} hidden={questionNumber === 1}>
                    Previous
                </OutlineButton>
                <AccentButton aria-controls={index + 1} onClick={changeActiveQuestion} hidden={questionNumber === totalNumberOfQuestions}>
                    Next
                </AccentButton>
            </ButtonFlexBoxContainer>
        </FlexBoxContainer>
    )
}