'use client'
import { createRef, useEffect, useRef } from 'react'
import G2 from './g2'

export default function Home() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="flex-1 mr-10">
        <G2/>
      </div>
      <div>
        <div className="flex">
          <div>
            <div className="font-bold text-2xl">内存</div>
            <div className="flex items-end">
              <div className="font-bold text-9xl">70</div>
              <div className="font-bold text-4xl">%</div>
            </div>
          </div>
          <div className="space-y-1 ml-4">
            <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <div>
            <div>CPU</div>
            <div className="font-bold text-4xl">70 %</div>
          </div>
          <div>
            <div>内存</div>
            <div className="font-bold text-4xl">70 %</div>
          </div>
        </div>
      </div>
    </div>
  )
}
