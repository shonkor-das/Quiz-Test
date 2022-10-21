import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';

const Home = () => {
  let quizes = useLoaderData();
  return (
    <div className='container '>
      
    <div className='py-3'>
    <h1 className="">Start the Quiz Test</h1>
         <p className="">Good luck!</p>
         <p className="card-text"><small></small></p>
    </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-3">
       {

          quizes.data.map(quiz => <Quizs quiz={quiz} key={quiz.id}></Quizs>)

       }
     
      </div>
    </div>
  );
};

export default Home;