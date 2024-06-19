"use server"

import React from 'react'
import Pokemon from './components/Pokemon'

function page() {
  return (
    <div className=' w-screen h-screen relative main overflow-hidden'>

        {/* Bg glow */}
        <div className=' fixed w-60 h-60 bg-blue-900 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full blur-3xl'></div>
        {/* Pokemon Component */}
        <Pokemon />
        
    </div>
  )
}

export default page