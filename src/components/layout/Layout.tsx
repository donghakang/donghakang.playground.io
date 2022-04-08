import React from 'react'
import Header from './Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout
