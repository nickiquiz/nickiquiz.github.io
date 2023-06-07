const QuestionBlock = ({
                           question,
                           quizItemId,
                           setChosenAnswerItems,
                           chosenAnswerItems,
                           unansweredQuestionIds,
                           setUnansweredQuestionIds
                       }) => {

    const handleClick = () => {
        setChosenAnswerItems(prevState => {
        let newState = [...prevState];
            newState[quizItemId] = question.text;
            return newState;
        })
        setUnansweredQuestionIds(unansweredQuestionIds.filter((id) => id !== quizItemId))
    }

    const validPick = !chosenAnswerItems?.includes(question.text) &&
        !unansweredQuestionIds?.includes(quizItemId)


    return (
        <button
            className="question-block"
            onClick={handleClick}
            disabled={validPick}

        >
            <img src={question.image} alt={question.alt} className="img"/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.image}>{question.credit} </a>
            </p>

        </button>
    )
}

export default QuestionBlock