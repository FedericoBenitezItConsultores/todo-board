
import { create } from 'zustand'

const useStoreTasks = create((set) => ({
  tasks: [],
  addTasks: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
}));

export default useStoreTasks;