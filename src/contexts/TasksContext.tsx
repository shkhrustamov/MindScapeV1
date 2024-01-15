import {createContext, ReactNode, useState} from 'react';
import * as child_process from 'child_process';
import {Task} from 'react-native';

type Task = {
  icon: string;
  label: string;
  category: string;
  color: string;
  isChecked: boolean;
};

export const TasksContext = createContext<{
  tasks: never[];
  addTask: (task: Task) => void;
  setTasks: React.Dispatch<React.SetStateAction<never[]>>;
} | null>(null);

export const TasksProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  console.log(tasks);
  return (
    <TasksContext.Provider value={{tasks, addTask, setTasks}}>
      {children}
    </TasksContext.Provider>
  );
};
