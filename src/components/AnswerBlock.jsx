import {useEffect, useState, forwardRef} from 'react'

const AnswerBlock = ({answerOptions, chosenAnswers,nicki}, ref) => {
    const [result, setResult] = useState(null)
    const [scores, setScores] = useState({ 
    'rookie': 0, 
    'chun_li': 0, 
    'um_chile': 0, 
    'academic': 0, 
    'onika_burger': 0, 
    'emo_onika': 0, 
    'roman_zolanski': 0, 
    'barbie': 0 });
    // console.log(chosenAnswers,'chosenAnswers')
    // move this to question block later 
    useEffect(() => {
        if (chosenAnswers.every(item => item !== null)) { // chosen answer Items??
            // If the chosenAnswerItems array is fully filled, calculate the scores
            let newScores = { 
                'rookie': 0, 
                'chun_li': 0, 
                'um_chile': 0, 
                'academic': 0, 
                'onika_burger': 0, 
                'emo_onika': 0, 
                'roman_zolanski': 0, 
                'barbie': 0 };
    
            chosenAnswers.forEach((answer, index) => {
                const question = answerOptions[index].questions;  // Retrieve the question by index
                const answerScores = question[answer].score;  // Retrieve the scores for the chosen answer
                console.log(question, answerScores,'q&a')
                Object.keys(answerScores).forEach(nicki => {
                    newScores[nicki] += answerScores[nicki];
                });
            });
            console.log(newScores,'newScores')
            setScores(newScores);  // Update the scores state

            // find maximum and go back to answers
            let maxNicki = Object.entries(newScores).reduce((max, [nicki, score]) => 
                (!max || score > max[1]) ? [nicki, score] : max, 
                null)[0];

            console.log(maxNicki, answerOptions)
            console.log(nicki)
            setResult(nicki[maxNicki])
            console.log(result)
        }
    }, [result]);

    return (
        <div ref={ref} className="answer-block">
            <h2>{result?.text}</h2>
            <p>{result?.explanation}</p>
            <img src={result?.image} alt={result?.text}/>
        </div>
    )
}

export default forwardRef(AnswerBlock)