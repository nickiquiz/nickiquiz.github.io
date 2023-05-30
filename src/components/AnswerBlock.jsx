import {useEffect, useState, forwardRef} from 'react'

const AnswerBlock = ({answerOptions, chosenAnswers}, ref) => {
    const [result, setResult] = useState(null)
    // const [scores, setScores] = useState({ 
    // 'rookie': 0, 
    // 'chun_li': 0, 
    // 'um_chile': 0, 
    // 'academic': 0, 
    // 'onika_burg': 0, 
    // 'emo_onika': 0, 
    // 'roman_zolanski': 0, 
    // 'barbie': 0 });

    useEffect(() => {
        answerOptions.forEach(answer => {
            if (chosenAnswers.includes(answer.combination[0]) &&
                chosenAnswers.includes(answer.combination[1]) &&
                chosenAnswers.includes(answer.combination[2])
            ) {
                setResult(answer)
            } else if (!result) {
                setResult(answerOptions[0])
            }
        })
    }, [result])

    // // move this to question block later 
    // useEffect(() => {
    //     if (chosenAnswerItems.every(item => item !== null)) {
    //         // If the chosenAnswerItems array is fully filled, calculate the scores
    //         let newScores = { 
    //             'rookie': 0, 
    //             'chun_li': 0, 
    //             'um_chile': 0, 
    //             'academic': 0, 
    //             'onika_burg': 0, 
    //             'emo_onika': 0, 
    //             'roman_zolanski': 0, 
    //             'barbie': 0 };
    
    //         chosenAnswerItems.forEach((answer, index) => {
    //             const question = jsonDatabase.questions[index];  // Retrieve the question by index
    //             const answerScores = question.answers[answer];  // Retrieve the scores for the chosen answer
    //             Object.keys(answerScores).forEach(nicki => {
    //                 newScores[nicki] += answerScores[nicki];
    //             });
    //         });
    
    //         setScores(newScores);  // Update the scores state
    //     }
    // }, [chosenAnswerItems, jsonDatabase.questions]);

    return (
        <div ref={ref} className="answer-block">
            <h2>{result?.text}</h2>
            <img src={result?.image} alt={result?.text}/>
        </div>
    )
}

export default forwardRef(AnswerBlock)