import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='w-full max-w-7xl mx-auto px-5 py-10 md:py-20'>
        {children}
    </main>
  )
}

export default Layout