import { create } from "zustand";

const useStoreTasks = create((set) => ({
  tasks: [
    {
      title: "werwer",
      id: "26475d47-7d1a-4a38-9bcb-2623ee914b02",
      description: "werwer\n",
    },
    {
      title: "werwer",
      id: "2711ee23-2203-42c9-b09d-a7e7ecbffee2",
      description: "werwer\n",
    },
    {
      title: "werwer",
      id: "cac2a17d-4fc6-4536-89eb-40faed9a1e75",
      description: "werwer\n",
    },
    {
      title: "werwer",
      id: "cb34ace5-934b-4d84-b702-f19382eacbfb",
      description: "werwer\n",
    },
    {
      title: "werwer",
      id: "15fe3907-d037-4294-9dcf-188625168c06",
      description: "werwer\n",
    },
    {
      title: "werwer",
      id: "bc56e1b5-e83f-4bf4-8e3c-75597e65a084",
      description: "werwer\n",
    },
  ],
  addTasks: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
}));

export default useStoreTasks;
