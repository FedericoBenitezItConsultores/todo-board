import { useState } from "react";
import useStoreTasks from "../../store/manageTasks";
import { PencilIcon } from "../../assets/Icons";
import TaskForm from "../tasks-form/TaskForm";
export default function ButtontTaskEdit({ task }) {
  const [assetEditTask, setAssetEditTask] = useState(false);
  const editTaks = useStoreTasks((state) => state.editTaks);

  const handleEditTaks = (event, { title, description }) => {
    event.preventDefault();
    editTaks(title, description, task.id);
    setAssetEditTask(!assetEditTask);
  };

  const toogleCreateTask = () => {
    setAssetEditTask(!assetEditTask);
  };

  return (
    <>
      <span onClick={toogleCreateTask}>
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
