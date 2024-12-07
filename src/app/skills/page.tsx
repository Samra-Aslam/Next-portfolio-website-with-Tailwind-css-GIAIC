import React from 'react'
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const page = () => {
  return (
    <div className='w-[100%] h-[auto] bg-blue-300 grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 grid-cols-1 sm:grid-rows-3 grid-rows-6 items-center justify-center p-[50px] gap-x-4 gap-y-4'>
      <div className='tracking-wide w-[290px] h-350px] bg-orange-400 p-[16px] text-justify rounded-lg border-2 border-orange-400 ' >
      <div className='w-[290] h-[290] font-bold text-7xl flex justify-center items-center'>
        <MdHtml  /></div>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='w-[290px] h-350px] bg-blue-200 p-[16px] text-justify rounded-lg border-2 border-blue-200 ' >
        <div className='w-[290] h-[290] font-bold text-7xl flex justify-center items-center'>
        <MdCss  /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='w-[290px] h-350px] bg-yellow-400 p-[16px] text-justify rounded-lg border-2 border-yellow-400 ' >
        <div className='w-[290] h-[290] font-bold text-7xl flex justify-center items-center'>
        <IoLogoJavascript  /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='w-[290px] h-350px]  bg-blue-500 p-[16px] text-justify rounded-lg border-2 border-blue-500 ' >
        <div className='w-[290] h-[290] font-bold text-7xl flex justify-center items-center'>
        <TbBrandTypescript /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='w-[290px] h-350px] bg-blue-400 p-[16px] text-justify rounded-lg border-2 border-blue-400 ' >
        <div className='w-[290] h-[290] font-bold text-7xl flex justify-center items-center'>
        <FaReact /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
      <div className='w-[290px] h-350px] bg-green-400 p-[16px] text-justify rounded-lg border-2 border-green-400 ' >
      <div className='w-[290] h-[290] font-bold text-7xl flex justify-center items-center'>
        <RiNextjsLine /></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti vitae, molestiae id, nulla nisi esse molestias sint omnis dignissimos atque fugit illum dolorum impedit accusamus recusandae modi rerum officiis. Eligendi?</p>

      </div>
    </div>
  )
}

export default page