import React, { useState } from "react";

import TaskForm from "./section/tasks-form/TaskForm";

function App() {
  const [openPopUp, setOpenPopUp] = useState(true)

  const toogleCreateTask = () => {
    setOpenPopUp(!openPopUp);
  }

  return <>{openPopUp && <TaskForm toggleCreateTask={toogleCreateTask} />}</>;
}

export default App;
