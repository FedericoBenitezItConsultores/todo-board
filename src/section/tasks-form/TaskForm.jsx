import React, { useEffect, useRef, useState } from "react";
import style from "./tasksForm.module.css";

const TaskForm = ({
  edit = false,
  toggleCreateTask,
  funcionSubmit,
  titleDefault,
  descriptionDefault,
}) => {
  const [formPopup, setFormPopup] = useState({
    title: titleDefault || "",
    description: descriptionDefault || "",
  });

  const handlerChange = (e) => {
    const { id, value } = e.target;
    console.log(formPopup);

    setFormPopup({
      ...formPopup,
      [id]: value,
    });
  };

  return (
    <div className={style.masquerade}>
      <div className={style.mask} />
      <div className={style.container}>
        <h2 className={style.popup_Form}>
          {" "}
          {edit ? `Edit homework ${titleDefault}` : "Create task"}
        </h2>
        <form
          onSubmit={(event) => funcionSubmit(event, formPopup)}
          className={style.container_Popup}
        >
          <label htmlFor="title">Título:</label>
          <input
            placeholder="Ingresa el titulo"
            value={formPopup.title}
            onChange={handlerChange}
            name="title"
            className={style.title_Popup}
            type="text"
            id="title"
            required
          />
          <label htmlFor="description">Descripcion:</label>
          <textarea
            placeholder="Agrega aqui las descripción"
            value={formPopup.description}
            onChange={handlerChange}
            name="description"
            id="description"
            className={style.description_Popup}
            required
          ></textarea>

          <div className={style.buttons}>
            <button className={style.open} type="submit">
              {edit ? `Edit task` : " Add Task"}
            </button>
            <button onClick={toggleCreateTask} className={style.close}>
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
