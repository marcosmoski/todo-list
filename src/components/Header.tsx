import { Rocket } from "phosphor-react";
import { RocketIcon } from "./RocketIcon";

export function Header () { 
  return (
    <header className="flex justify-center 
                        text-4xl gap-3 h-[12.5rem] 
                        items-center bg-colors-gray-900"
      >
        <RocketIcon />
      
      <strong 
        className='text-colors-blue-500'>
          to
          <span className='text-colors-purple-900'>do</span>
      </strong>
    </header>
  )
}