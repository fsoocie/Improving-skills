import React from 'react'
import './MasteryBlock.scss'

export const MasteryBlock: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({children, className = ''}) => {
  return (
    <div className={`masteryBlock ${className}`}>
      {children}
    </div>
  )
}
