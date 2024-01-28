import React from 'react'

export const Resultview = ({score,handleResetClick,questions}) => {
  return (
    <div className='absolute w-full h-full bg-black text-white flex justify-center items-center'>
    <div className='border-2 border-white h-[30vh] w-[50vh] rounded-lg shadow-lg shadow-white flex items-center 
    flex-col sm:w-[70vh] sm:h-[25vh]'>
        <p className='py-3 font-bold'>Result</p> 
        <p className='py-2 px-3 flex items-center font-bold text-[20px] justify-center md:text-2xl'>Your Score was {score} out of {questions.length}</p>
        <div className='flex flex-col'>
            <button onClick={()=>{handleResetClick()}} className='border-2 my-2 rounded-full border-white shadow-lg shadow-purple-500 h-10 w-60 px-2 py-3 md:w-80  flex items-center justify-center'>Reset</button>
            
           
        </div>
    </div>
</div>
  )
}
