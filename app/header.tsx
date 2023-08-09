'use client'
import { Divider, StatusLight } from '@adobe/react-spectrum'
import React from 'react'

export default function Header() {
  return (
    <div>
      <div className='flex items-center justify-between h-8 px-4'>
        <div className='flex items-center'>
          <h1 className='font-bold'>Next Monitor</h1>
          <p className='text-xs ml-2'>私有部署版</p>
        </div>
        <div className=' text-white flex'>
          1
        </div>
      </div>
      <Divider size="S" />
    </div>
    // <div>
    //   <div className='flex items-center justify-between h-8 bg-blue-500 text-white'>
    //     <div className='flex items-center px-4'>
    //       <h1 className='font-bold'>Next Monitor</h1>
    //       <p className='text-xs ml-2'>私有部署版</p>
    //     </div>
    //     <div className=' text-white flex'>
    //       <div className='w-0 h-0 
    //       border-t-[16px] border-t-transparent
    //       border-r-[16px] border-r-white
    //       border-b-[16px] border-b-transparent'></div>
    //       {/* <div className="w-8 overflow-hidden inline-block">
    //         <div className=" h-8 bg-black -rotate-45 transform origin-bottom-right"></div>
    //       </div> */}
    //       <div className='bg-white pr-2 '>
    //         <StatusLight variant="positive">就绪</StatusLight>
    //       </div>
    //     </div>
    //   </div>
    //   <Divider size="S" />

    // </div>

    // <div>
    //   <div classNameName='flex items-center justify-between h-14 px-6'>
    //     <div>
    //       <h1 classNameName='font-bold'>Next Monitor</h1>
    //       <p classNameName='text-xs'>私有部署版</p>
    //     </div>
    //     <div classNameName='mt-1'>
    //       <StatusLight variant="positive">就绪</StatusLight>
    //     </div>
    //   </div>
    //   <Divider size="S" />
    // </div>
  )
}
