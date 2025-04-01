import React from 'react'

const Title = ({title_content} : {title_content:String}) => {
  return (
    <div>
        <h1 className='font-bold text-3xl'>{title_content}</h1>
    </div>
  )
}

export default Title