'use client'
import { Tabs, Divider, Item, TabList, TabPanels, ProgressCircle, StatusLight, Well } from '@adobe/react-spectrum'
import React, { useEffect, useRef, useState } from 'react'
import { Line, TinyArea } from '@ant-design/plots';
import G2 from './g2'

export default function View({ params }: { params: { id: string } }) {
  const [info, setInfo] = useState<any>({})
  const [status, setStatus] = useState<any>()
  const [data, setData]  = useState<{mem: number, cpu: number}[]>([]);
  const chart_ref_mem = useRef()
  const chart_ref_cpu = useRef()

  const getStatus = () => {
    fetch(`http://${params.id}:5000/status`)
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }
  useEffect(()=>{
    fetch(`http://${params.id}:5000/info`)
      .then((response) => response.json())
      .then((data) => setInfo(data.data));
    getStatus()
    const intervalId = setInterval(() => {
      getStatus()
      const t = new Date()
      setData(v => [...v, {mem: parseInt(status?.mem_used), cpu: parseInt(status?.cpu_used)}])
      // dataRef.current.push(parseInt(status?.mem_used))
      // console.log({time: t.getTime(), used: parseInt(status?.mem_used)});
      // console.table(status);

      // @ts-ignore
      chart_ref_mem.current?.getChart().changeData(data.map(item => item.mem))
      // @ts-ignore
      chart_ref_cpu.current?.getChart().changeData(data.map(item => item.cpu))
      
      
    }, 500);

    return () => clearInterval(intervalId);
  },[status])
  return (
    <div>
      <Tabs aria-label="List"  defaultSelectedKey={'1'} isQuiet>
        <div>
          <div className='px-4'>
            <TabList>
              <Item key="1">屏幕监看</Item>
              <Item key="2">性能监控</Item>
            </TabList>
          </div>
          <Divider size="S" />
        </div>
        <TabPanels>
          <Item key="1">
            <div>
              <img src={`http://${params.id}:5000/video_feed`} alt="" />
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
                IP：{params.id}
              </div>
            </div>
            <Divider size="S" />
          </Item>
          <Item key="2">
            <div className="flex justify-center items-center p-4">
              <div className="flex-1 mr-10">
                <TinyArea data={[]} padding={'auto'} height={128}  ref={chart_ref_mem}></TinyArea>
                <TinyArea data={[]} padding={'auto'} height={128}  ref={chart_ref_cpu}></TinyArea>
                {/* <Line data={dataRef.current} padding={'auto'} xField='time' yField='used'></Line> */}
              </div>
              <div>
                <div className="flex">
                  <div>
                    <div className="font-bold text-2xl">内存</div>
                    <div className="flex items-end">
                      <div className="font-bold text-9xl">{parseInt(status?.mem_used||0)}</div>
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
                    <div className="font-bold text-4xl">{parseInt(status?.cpu_used||0)}%</div>
                  </div>
                  {/* <div>
                    <div>内存</div>
                    <div className="font-bold text-4xl">{parseInt(status?.mem_used)}%</div>
                  </div> */}
                </div>
              </div>
            </div>
          </Item>
        </TabPanels>
      </Tabs>
      
    </div>
  )
}
