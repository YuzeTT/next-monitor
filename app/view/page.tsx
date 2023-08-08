'use client'
import { ActionBar, Divider, Item, LabeledValue, Meter, ProgressCircle, StatusLight, Well } from '@adobe/react-spectrum'
import React, { useEffect, useState } from 'react'

export default function View() {
  const [info, setInfo] = useState<any>({})
  const [status, setStatus] = useState<any>(null)

  const getStatus = () => {
    fetch("http://192.168.1.8:5000/status")
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }
  useEffect(()=>{
    fetch("http://192.168.1.8:5000/info")
      .then((response) => response.json())
      .then((data) => setInfo(data.data));
    getStatus()
    const intervalId = setInterval(() => {
      getStatus()
    }, 1000);

    return () => clearInterval(intervalId);
  },[])
  return (
    <div>
      <div>
        <img src="http://192.168.1.8:5000/video_feed" alt="" />
      </div>
      <div className='px-4 py-2 flex justify-between'>
        <div className='flex gap-4 items-center'>
          <p>{info.hostname}</p>
          <Divider orientation="vertical" size="S" />
          <p>{info.platform}</p>
          <Divider orientation="vertical" size="S" />
          <div className='flex items-center gap-2'>
            <ProgressCircle aria-label="Loading…" size='S' value={status?.cpu_used} />
            <div>CPU：{parseInt(status?.cpu_used)}%</div>
          </div>
          <Divider orientation="vertical" size="S" />
          <div className='flex items-center gap-2'>
            <ProgressCircle aria-label="Loading…" size='S' value={status?.mem_used} />
            <div>内存：{parseInt(status?.mem_used)}%</div>
          </div>
          <Divider orientation="vertical" size="S" />
        </div>
        <div>
          IP：192.168.1.8
        </div>
      </div>
      <Divider size="S" />
      {/* <div>
        <img src="http://192.168.1.8:5000/video_feed" alt="" />
      </div>
      <div className='p-4 flex justify-between'>
        <div className='flex gap-4 items-center'>
          <LabeledValue label="计算机" value="DESKTOP-I905K0F" />
          <Divider orientation="vertical" size="S" />
          <Meter label="CPU" variant="positive" value={23} size="S" width={100} />
          <Divider orientation="vertical" size="S" />
          <Meter label="内存" variant="positive" value={75} size="S" width={100} />
        </div>
        <div>
          <StatusLight variant="positive">192.168.1.8</StatusLight>
        </div>
      </div> */}
    </div>
  )
}
