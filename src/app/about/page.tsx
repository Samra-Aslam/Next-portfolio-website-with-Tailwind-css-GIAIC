import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh] w-[100%] text-[80%] bg-slate-800 flex flex-col items-center justify-center text-white'>
    <div className='flex flex-col items-left justify-left h-[100vh] w-[100%] pl-[30px] pt-[30px] pr-[30px]'>
    <h4 className='font-bold text-red-500 p-[8px] text-lg drop-shadow-sm text-left '>Hi, i`m SAMRA </h4>
    <h2 className='text-2xl sm:text-3xl p-[20px] font-extrabold drop-shadow-sm text-yellow-300'>i`m Graphic Designer and Frontend Developer</h2>
    <p className='text-justify  sm:text-lg' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque pariatur, ipsa magnam repellendus eaque et cupiditate nisi vel quo perspiciatis ex tempore impedit voluptate tenetur voluptatum non quis, obcaecati rerum.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque pariatur, ipsa magnam repellendus eaque et cupiditate nisi vel quo perspiciatis ex tempore impedit voluptate tenetur voluptatum non quis, obcaecati rerum.</p>
    <div className='buttons'>
    <button className='w-[110px] h-[40px] bg-purple-500 font-bold border-2 border-purple-400 rounded-md ml-2 hover:bg-purple-600 hover:w-[118px] mt-[20px]'>Hire Me</button>
    <button className='w-[110px] h-[40px] bg-purple-500 font-bold border-2 border-purple-400 rounded-md ml-2 hover:bg-purple-600 hover:w-[118px] mt-[20px]'>Let`s Talk</button>
    </div>
  </div>
  </div>
  )
}

export default page