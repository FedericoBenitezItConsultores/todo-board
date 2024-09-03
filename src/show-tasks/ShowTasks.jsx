import React from "react";
import useStoreTasks from "../store/manageTasks";
import style from "./showTasks.module.css";

const ShowTasks = ({ setOpenPopUp }) => {
  const tasks = useStoreTasks((state) => state.tasks);
  return (
    <div className={style.task_container}>
      <h2 className={style.title}>Lista de tareas</h2>
      {tasks.length === 0 ? (
        <p className={style.no_tasks}>No hay tareas disponibles</p>
      ) : (
        <ul className={style.task_list}>
          {tasks.map((task, index) => (
            <li
              key={task.id}
              className={`${style.task_item} ${style[`task_item${index % 5}`]}`}
            >
              <h3 className={style.task_title}>{task.title}</h3>
              <p className={style.task_description}>{task.description}</p>
            </li>
          ))}
      <li
        onClick={() => setOpenPopUp(true)}
        className={`${style.new_mas}`}
      >
        +
      </li>
        </ul>
      )}
    </div>
  );
};

export default ShowTasks;
