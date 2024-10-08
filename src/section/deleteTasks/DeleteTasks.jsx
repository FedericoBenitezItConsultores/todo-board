import React from "react";
import style from "./deleteTasks.module.css";
import useStoreTasks from "../../store/manageTasks";
import { MdDeleteForever } from "react-icons/md";

const DeleteTask = ({ taskId }) => {
  const deleteTask = useStoreTasks((state) => state.deleteTask);
  const handleDelete = () => {
    deleteTask(taskId);
  };

  return (
    <span onClick={handleDelete} className={style.delete_tasks}>
      <MdDeleteForever size={100} />
    </span>
  );
};
export default DeleteTask;
