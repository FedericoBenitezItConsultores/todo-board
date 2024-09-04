import { useState } from "react";
import useStoreTasks from "../../store/manageTasks";
import { PencilIcon } from "../../assets/Icons";
import TaskForm from "../tasks-form/TaskForm";
export default function ButtontTaskEdit({ id, task }) {
  const [assetEditTask, setAssetEditTask] = useState(false);
  const editTaks = useStoreTasks((state) => state.editTaks);
  const tasks = useStoreTasks((state) => state.tasks);

  const handleEditTaks = (event, { title, description }) => {
    event.preventDefault();
    const tasksEdited = tasks?.map((task) =>
      task.id == id ? { description, title, id } : task
    );
    editTaks(tasksEdited);
    setAssetEditTask(!assetEditTask);
  };

  const toogleCreateTask = () => {
    setAssetEditTask(!assetEditTask);
  };

  return (
    <>
      <span
        onClick={() => {
          setAssetEditTask(true);
        }}
      >
        <PencilIcon />
      </span>
      {assetEditTask && (
        <TaskForm
          edit={true}
          toggleCreateTask={toogleCreateTask}
          funcionSubmit={handleEditTaks}
          titleDefault={task.title}
          descriptionDefault={task.description}
        />
      )}
    </>
  );
}
