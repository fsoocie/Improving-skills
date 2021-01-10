import React from 'react'

interface IMoreOptionsIconProps {
  className?: string
}

export const MoreOptionsIcon: React.FC<IMoreOptionsIconProps> = ({className}) => {
  return (
    <span className={className}>
      <svg version="1.1"
           width="16px" height="16px" viewBox="0 0 375.636 375.635"
           >
        <g>
          <g>
            <g>
              <path d="M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007
                c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z"/>
            </g>
            <g>
              <path d="M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007
                c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z"/>
            </g>
            <g>
              <path d="M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007
                c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z"/>
            </g>
          </g>
        </g>
      </svg>
    </span>
  )
}