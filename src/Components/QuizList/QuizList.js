import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import './QuizList.css'

const QuizList = ({qus,questions}) => {
  let { question, options,id, correctAnswer } = qus
  let [show, setShow] = useState(false)
  console.log(options)
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{question}</h5>
          {
            options.map(option => <Options option={option} id={id} correctAnswer={correctAnswer} ></Options>)
          }
        </div>
        <div>
          <EyeIcon className="text-blue-500 eyeion mb-3" onClick={() => setShow(!show)} />
          {show ? <p className='text-success fw-bold'>Ans  :{correctAnswer}</p> : undefined}
        </div>
      </div>
    </div>
  );
};

export default QuizList;