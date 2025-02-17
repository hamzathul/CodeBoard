import StreamVideoProvider from '@/components/providers/StreamClientProvider'
import { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <StreamVideoProvider>{children}</StreamVideoProvider>
  )
}

export default layout