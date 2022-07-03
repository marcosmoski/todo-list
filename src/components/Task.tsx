import { useState } from "react";
import { Form } from "./Form";
import { ITaskCardProps } from "./ITaskCardProps";
import { List } from "./List";


export function Task() { 
  const [tasksConcluded, setTasksConcluded] = useState(0);
  const [tasksCreated, setTasksCreated] = useState(0);
  const [tasks, setNewTask] = useState(new Array()); 
  
  function handleCheckTask(checkBox: {taskId: number, checked: boolean}) {
    setNewTask(tasks.map(task => {
      if (task.taskId === checkBox.taskId) {
        task.checked = checkBox.checked;
      }
      return task;
    }));
    setTasksConcluded(tasks.filter(task => task.checked).length);
    setTasksCreated(tasks.length);
  }

  function handleDeleteTask(taskId: number) {   
    const tasksWithoutDeleted = tasks.filter(task => task.taskId !== taskId);
    setNewTask(tasksWithoutDeleted);
    
    setTasksConcluded(() => { 
      return tasks.filter(task => task.checked).length;
    })
    setTasksCreated(() => { 
      return tasks.length - 1;
    })
    
  }

  function handleAddTask(description : string) { 
    console.log('nova task: ', description);
    setNewTask([...tasks, 
      { taskId: tasks.length + 1, 
        description: description,
        checked: false 
      }]);
      setTasksConcluded(() => { 
        return tasks.filter(task => task.checked).length;
      })
      setTasksCreated(() => { 
        return tasks.length + 1;
      })
     
    
    
  }

  
  return (
    <>
      <Form onHandleAddTask={handleAddTask} onHandleDeleteTask={handleDeleteTask} onHandleCheckTask={handleCheckTask} />
      <List list={tasks} 
            onHandleAddTask={handleAddTask} 
            onHandleDeleteTask={handleDeleteTask} 
            onHandleCheckTask={handleCheckTask}
            tasksConcluded={tasksConcluded}
            tasksCreated={tasksCreated}
       />
    </>
  )
}