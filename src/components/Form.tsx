import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';

export function Form() { 
  const [newTask, setNewTaskChange] = useState('');

  function handleNewTaskAdd (event: React.ChangeEvent<HTMLFormElement>) { 
    event.preventDefault()
  }
 
  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) { 
    setNewTaskChange(event.target.value)
  }

  return (
    <main className='flex justify-center -mt-8'>
      <form className='flex flex-row gap-2' onSubmit={handleNewTaskAdd}>
        <input 
          className='w-[638px] h-[54px] 
                   bg-colors-gray-500 outline-none
                   border-colors-gray-500 rounded
                   text-colors-gray-300 p-4'
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button 
          className='flex w-[90px] bg-colors-blue-900 text-white rounded justify-center items-center gap-2' 
          type="submit"
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </main>
  )
}