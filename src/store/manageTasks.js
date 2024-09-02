
import { create } from 'zustand'

const useStoreTasks= create((set) => ({
  tasks: [],
}))

export default useStoreTasks;