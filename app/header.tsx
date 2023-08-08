'use client'
import { Divider, StatusLight } from '@adobe/react-spectrum'
import React from 'react'

export default function Header() {
  return (
    <div>
      <div className='flex items-center justify-between h-14 px-6'>
        <div>
          <h1 className='font-bold'>Next Monitor</h1>
          <p className='text-xs'>私有部署版</p>
        </div>
        <div className='mt-1'>
          <StatusLight variant="positive">就绪</StatusLight>
        </div>
      </div>
      <Divider size="S" />
    </div>
  )
}
