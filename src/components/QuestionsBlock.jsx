import { forwardRef } from 'react'
import QuestionBlock from './QuestionBlock'

const QuestionsBlock = ({
                            quizItem,
                            setChosenAnswerItems,
                            chosenAnswerItems,
                            unansweredQuestionIds,
                            setUnansweredQuestionIds
                        }, ref) => {
    return (
        <>
            <h2 ref={ref}  className="question-title">{quizItem.text}</h2>
            <div className="questions-container">
            {Object.keys(quizItem.questions).map((questionKey, _index) => {
    const question = quizItem.questions[questionKey];
    return (
        <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            question={question}
            questionKey={questionKey} 
            setChosenAnswerItems={setChosenAnswerItems}
            chosenAnswerItems={chosenAnswerItems}
            unansweredQuestionIds={unansweredQuestionIds}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
        />
    );
})}
            </div>
        </>
    )
}

export default forwardRef(QuestionsBlock)