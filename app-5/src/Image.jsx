import React from 'react'

export default function Image(props){
  console.log(props)
  return (
    <div className='App'>
      <img src={props.url}/>
    </div>
  )
}