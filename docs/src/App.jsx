import {useEffect, useState, createRef } from 'react'
import Title from './components/Title'
import QuestionsBlock from './components/QuestionsBlock'
import AnswerBlock from "./components/AnswerBlock"

const App = () => {
    const [quiz, setQuiz] = useState(null)
    const [chosenAnswerItems, setChosenAnswerItems] = useState(new Array(4).fill(null))
    const [unansweredQuestionIds, setUnansweredQuestionIds] = useState(null)
    const [showAnswer, setShowAnswer] = useState(false)

    const refs = unansweredQuestionIds?.reduce((acc, id) => {
        acc[id] = createRef()
        return acc
    }, {})

    const answerRef = createRef()

    console.log(refs,'ref')
    console.log(chosenAnswerItems,'answer')

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/quiz')
            const json = await response.json()
            setQuiz(json)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        const unansweredIds = quiz?.content?.map(({id}) => id)
        setUnansweredQuestionIds(unansweredIds)
    }, [quiz])

    useEffect(() => {
        if (chosenAnswerItems.some((item => item !== null))){
            if (showAnswer) {
                // scroll to answer block
                answerRef.current.scrollIntoView({behavior: 'smooth'})
            }
            if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.some((item => item !== null))) { // 
                setShowAnswer(true)
            } else {
                // scroll to highest unansweredQuestionId
                const highestId = Math.min(...unansweredQuestionIds)
                refs[highestId].current.scrollIntoView({behavior: 'smooth'})
            }
        }
    }, [unansweredQuestionIds, showAnswer, chosenAnswerItems, answerRef, refs])

    return (
        <div className="app">
            <Title title={quiz?.title} subtitle={quiz?.subtitle} banner = {quiz?.bannerimg}/>
            {refs && quiz?.content?.map(contentItem => (
                <QuestionsBlock
                    key={contentItem.id}
                    quizItem={contentItem}
                    setChosenAnswerItems={setChosenAnswerItems}
                    chosenAnswerItems={chosenAnswerItems}
                    unansweredQuestionIds={unansweredQuestionIds}
                    setUnansweredQuestionIds={setUnansweredQuestionIds}
                    ref={refs[contentItem.id]}
                />
            ))}
            {showAnswer && (
                <AnswerBlock
                    answerOptions={quiz?.content}
                    chosenAnswers={chosenAnswerItems}
                    nicki = {quiz?.answers}
                    ref={answerRef}
                />
            )}
            <p> made with love: D&H</p>
        </div>
    )
}

export default App
