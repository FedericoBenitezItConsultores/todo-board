import React from "react";
import "../../src/App.css";
const TaskForm = () => {
  return (
    <div className="container">
      <h2 className="popup_Form">Popup Form</h2>
      <div className="container_Popup">
        <label htmlFor="username">Título:</label>
        <input
          className="title_Popup"
          type="text"
          name="username"
          id="username"
        />
        <label htmlFor="username">Descripcion:</label>
        <textarea name="" id=""></textarea>
      </div>
      <button type="submit">Agregar Tarea</button>
    </div>
  );
};

export default TaskForm;
