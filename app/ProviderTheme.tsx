'use client'
import { defaultTheme, Provider } from '@adobe/react-spectrum';

export default function ProviderTheme({children}:{children: React.ReactNode}) {
  return (
    <Provider theme={defaultTheme} locale='zh'>
      <div className='min-h-[100vh]'>
        {children}
      </div>
    </Provider>
  )
}
