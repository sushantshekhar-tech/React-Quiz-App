import React from 'react'

const Quizview = ({questions,handleQuestionClick,currentquestion}) => {
    return (
        <div className='absolute w-full h-full bg-black text-white flex justify-center items-center'>
        <div className='border-2 border-white h-[60vh] w-[50vh] rounded-lg shadow-lg shadow-white flex items-center 
        flex-col sm:w-[70vh] sm:h-[60vh]'>
            <p className='py-3 font-bold'>Qustion {currentquestion + 1} out of {questions.length} </p> 
            <p className='py-2 px-4 mx-2 sm:mx-2 sm:px-2 flex items-center justify-center'>{questions[currentquestion].question}</p>
            <div className='flex flex-col'>

           


{questions[currentquestion].answers.map(({text,isCorrect})=>(
    <button key={text} onClick={()=>{handleQuestionClick(isCorrect)}} className='border-2 my-2 rounded-full border-white shadow-lg shadow-purple-500 h-10 w-60 px-2 py-3 md:w-80 flex items-center justify-center'>{text}</button>

))}






              
               
            </div>
        </div>
    </div>
  )
}
export default Quizview