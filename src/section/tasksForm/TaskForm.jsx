import React, { useRef } from "react";
import style from "./tasksForm.module.css";
import useStoreTasks from "../../store/manageTasks";
const TaskForm = () => {
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
    
  };

  return (
    <div className={style.masquerade}>
      <div className={style.mask}/>
      <div className={style.container}>
        <h2 className={style.popup_Form}>Popup Form</h2>
        <form onSubmit={handlerAddTasks} className={style.container_Popup}>
          <label htmlFor="username">Título:</label>
          <input
            ref={titleRef}
            className={style.title_Popup}
            type="text"
            name="username"
            id="username"
            required
          />
          <label htmlFor="username">Descripcion:</label>
          <textarea ref={descripcionRef} name="" id="" required></textarea>

          <button type="submit">Agregar Tarea</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
