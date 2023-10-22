import React from 'react'

interface Props {
  children: React.JSX.Element | React.JSX.Element[]
}
export const DarkLayout = ({ children }: Props) => {
  return (
    <div
      style={{
        backgroundColor: '#333',
        borderRadius: '5px',
        padding: '10px'
      }}
    >
      <h3>Dark layout</h3>
      {children}
    </div>
  )
}
