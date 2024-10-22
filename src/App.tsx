import { useState } from 'react'
import { AddTask } from './components/AddTask'

export function App() {
  return (
    <div className='bg-indigo-200 h-screen'>
      <div className="flex items-center justify-center h-full">

        {/* Caja blanca */}
        <div className="bg-white py-5 px-8 rounded-lg shadow-lg w-1/2 h-3/4">

          {/* Contenido */}
          <h2 className="text-center text-xl font-bold">To-Do List</h2>
          <br />
          <p className="">Task</p>
          <AddTask />

        </div>

      </div>
    </div>
  )
}
