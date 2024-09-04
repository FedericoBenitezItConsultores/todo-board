
import React from "react";
import style from "./CompletedTasks.module.css";
import { useState } from "react";
import { checkIcon } from "../../assets/icons/icons";

export default function CompletedTasks() {
  const [checked, setChecked] = useState(false);

  return (
    <label onClick={() => setChecked(!checked)} className={style.checked}>
      <img
        src={checkIcon}
        alt="icono de checkeado"
        style={{ opacity: checked ? "1" : "0.1" }}
      />
    </label>
  );
}

