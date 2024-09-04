import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStoreTasks = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTasks: (newTask) => set(() => ({ tasks: [...get().tasks, newTask] })),
      editTaks: (newsTasks) => set(() => ({ tasks: newsTasks })),
      deleteTask: (taskId) =>
        set(() => ({
          tasks: get().tasks.filter((task) => task.id !== taskId),
        })),
    }),
    {
      name: "TODOS",
    }
  )
);

export default useStoreTasks;
