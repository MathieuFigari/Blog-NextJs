import React from 'react'
import NavBar from '../NavBar'

export default function Container(props) {
  return (
    <div>
      <NavBar />
        {props.children}
    </div>
  )
}
