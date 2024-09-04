import useStoreTasks from "../../store/manageTasks";
import TaskForm from "../tasks-form/TaskForm";

const CreateTask = ({ toggleCreateTask }) => {
  const addTasks = useStoreTasks((state) => state.addTasks);
  const handlerAddTasks = (event, { title, description }) => {
    event.preventDefault();
    console.log(event, { title, description });

    addTasks({
      title,
      id: crypto.randomUUID(),
      description,
    });
    toggleCreateTask();
  };

  return (
    <>
      <TaskForm
        funcionSubmit={handlerAddTasks}
        toggleCreateTask={toggleCreateTask}
      />
    </>
  );
};

export default CreateTask;
