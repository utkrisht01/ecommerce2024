import React from 'react'
import { useNavigate } from 'react-router-dom'

const Return = () => {
    const navigate = useNavigate();
    navigate("/login")
  return (
    <div className='text-center'>
        <div>
        Please Login
        </div>
    </div>
  )
}

export default Return