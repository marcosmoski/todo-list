import { Check, RadioButton, Trash } from "phosphor-react"
import { ReactEventHandler, useState } from "react";

interface TaskProps { 
  taskId: number,
  description: string,
  checked: boolean
}

export function TaskCard (props: any) {
  const [checked, setChecked] = useState(false);

  function onChangeChecked(event: any) { 
    setChecked(!checked);
    props.onCheckTask({taskId: props.taskId, checked: !checked});
  }

  function handleDeleteTask(event: any) {
    props.onDeleteTask(props.taskId);
  }

  function handleAddTask(event: any) { 
    props.onAddTask;
  }

  return (
    <div className="flex w-full h-[72px] flex-row gap-6 bg-colors-gray-500 rounded-lg text-sm ">
      <div className="flex w-full flex-row gap-3">
        {
          props.checked ? 
          (
            <div className="flex w-[17.45px] h-[17.45px] 
                        border-2 border-colors-purple-900
                        bg-colors-purple-900
                        rounded-full ml-4 
                        mt-4 mb-8
                        cursor-pointer"
                        onClick={onChangeChecked}>
              <Check size={32} weight="bold" className="font-bold -mt-[9px]" />
            </div>
          )  :
          (
            <div className="flex w-[17.45px] h-[17.45px] 
                        border-2 border-colors-blue-500
                        rounded-full ml-4 
                        mt-4 mb-8
                        cursor-pointer"
                        onClick={onChangeChecked}
                        >
            </div>
          )
        }
        {/* <input
                  className="rouded-full w-[17.45px] h-[17.45px] hidden"
                  type="checkbox" 
                  name="checkbox"
                  checked={props.checked} 
                  onChange={onChangeChecked}
              /> */}
       

        <p className={props.checked ? 'flex w-[632px] items-center pl-4 line-through text-colors-gray-300' : 'flex w-[632px] items-center pl-4'}>
          {props.description}
        </p>

        <Trash 
          size={20} 
          className='flex text-colors-gray-300 mr-2 my-4 cursor-pointer'
          onClick={handleDeleteTask}
        />


      </div> 
    </div>
  )
}