import { Clipboard } from 'phosphor-react'
import { useState } from 'react';
import { ITaskCardProps } from './ITaskCardProps'
import { TaskCard } from './TaskCard'

export function List(props: any) { 
  
  
  function handleCheckTask(checkBox: {taskId: number, checked: boolean}) {
    props.onHandleCheckTask(checkBox);
  }

  function handleDeleteTask(taskId: number) {   
    props.onHandleDeleteTask(taskId);
  }



  return ( 
    <div className="flex w-[736px] flex-row 
                    justify-center mt-12 mx-auto">
      <div className="flex w-full flex-col gap-6">
        <div className='flex w-full flex-row 
                        justify-center font-bold'>

          <h3 className='flex w-full text-left 
                       text-colors-blue-500 
                         gap-2 text-sm 
                         items-center'> Tarefas criadas

            <span className='text-colors-gray-100 bg-colors-gray-500 
                             px-2 py-[0.125rem] text-center 
                             text-sm rounded-full'> {props.tasksCreated}
            </span>

          </h3>

          <h3 className='flex w-full text-left 
                        text-colors-purple-500 gap-2 
                         text-sm items-center justify-end'> Concluídas 

            <span className='text-colors-gray-100 bg-colors-gray-500 
                             px-2 py-[0.125rem] text-center 
                             text-sm rounded-full'> {props.tasksConcluded} de {props.tasksCreated}
            </span>

          </h3>

        </div>
        
        { false ? 
          (
            <div className='flex w-full flex-col 
                            border-t rounded 
                            border-colors-gray-400 pb-16'>

              <Clipboard 
                        size={40}
                        className='text-colors-gray-300 mx-auto 
                                    mb-2 mt-16'
              />
              <div className='text-colors-gray-300 justify-center 
                              text-center'> 
                <p> Você ainda não tem tarefas cadastradas </p>
                <p> Crie tarefas e organize seus itens a fazer </p>
              </div>

            </div>
          ) : ( 
            <ul className="flex flex-col gap-3">
              {
                props.list.map((task: ITaskCardProps) => (
                  <li key={task.taskId}>
                    <TaskCard taskId={task.taskId} 
                            description={task.description} 
                            checked={task.checked}
                            onCheckTask={handleCheckTask}
                            onDeleteTask={handleDeleteTask}
                           />
                  </li>
                ))
              }

            </ul>
          )
        }
      </div>
    </div>
  )
}