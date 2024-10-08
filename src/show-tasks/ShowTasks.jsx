import React from "react";
import useStoreTasks from "../store/manageTasks";
import CompletedTasks from "../section/completed-Tasks/completedTasks";
import style from "./showTasks.module.css";
import ButtontTaskEdit from "../section/button-task-edit/ButtontTaskEdit";
import DeleteTask from "../section/deleteTasks/DeleteTasks";

const ShowTasks = ({ setOpenPopUp }) => {
  const tasks = useStoreTasks((state) => state.tasks);

  return (
    <div className={style.task_container}>
      <h2 className={style.title}>Lista de tareas</h2>
      <li onClick={() => setOpenPopUp(true)} className={`${style.new_mas}`}>
        +
      </li>
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
              <div className={style.tasks_buttons}>
                <CompletedTasks />
                <ButtontTaskEdit task={task} {...task} />
                <DeleteTask taskId={task.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
      <div></div>
    </div>
  );
};

export default ShowTasks;
