import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStoreTasks = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTasks: (newTask) => set(() => ({ tasks: [...get().tasks, newTask] })),
      editTaks: (title, description, id) =>set((state) => ({ tasks: state.tasks?.map( (task) => task.id == id ? { description, title, id } : task ) })),
    }),
    {
      name: "TODOS",
    }
  )
);

export default useStoreTasks;
