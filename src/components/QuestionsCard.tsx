import React from 'react';
import { Wrapper , ButtonWrapper } from './QuestionCard.style'

type Props = {
    question:string;
    answers:string[];
    callback:any;
    userAnswer:any;
    questionNr:number;
    totalQuestions:number;
}

const QC: React.FC<Props> = function ({question,answers,callback,userAnswer,questionNr,totalQuestions}) {
    return(
        <Wrapper>
            <p className='number'>
                Qusetion : {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </ButtonWrapper>
                ))} 
            </div>
        </Wrapper>
    )
};

export default QC;