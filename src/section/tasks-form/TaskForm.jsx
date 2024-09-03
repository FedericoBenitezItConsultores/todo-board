import React, { useRef } from "react";
import style from "./tasksForm.module.css";
import useStoreTasks from "../../store/manageTasks";

const TaskForm = ({toggleCreateTask}) => {
  const addTasks = useStoreTasks((state) => state.addTasks);
  const tasks = useStoreTasks((state) => state.tasks);

  console.log(tasks);

  const titleRef = useRef(null);
  const descripcionRef = useRef(null);

  const handlerAddTasks = (e) => {
    e.preventDefault();
    addTasks({
      title: titleRef.current.value,
      id: crypto.randomUUID(),
      description: descripcionRef.current.value,
    });
    toggleCreateTask();
  };

  return (
    <div className={style.masquerade}>
      <div className={style.mask} />
      <div className={style.container}>
        <h2 className={style.popup_Form}>Popup Form</h2>
        <form onSubmit={handlerAddTasks} className={style.container_Popup}>
          <label htmlFor="username">Título:</label>
          <input
            placeholder="Ingresa el titulo"
            ref={titleRef}
            className={style.title_Popup}
            type="text"
            name="username"
            id="username"
            required
          />
          <label htmlFor="username">Descripcion:</label>
          <textarea
            placeholder="Agrega aqui las descripción"
            className={style.description_Popup}
            ref={descripcionRef}
            name=""
            id=""
            required
          ></textarea>

          <div className={style.buttons}>
            <button className={style.open} type="submit">
              Agregar Tarea
            </button>
            <button
              onClick={toggleCreateTask}
              className={style.close}
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
