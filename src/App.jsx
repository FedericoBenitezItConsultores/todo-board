import React, { useState } from "react";

import TaskForm from "./section/tasks-form/TaskForm";
import ShowTasks from "./show-tasks/ShowTasks";

function App() {
  const [openPopUp, setOpenPopUp] = useState(false);

  const toogleCreateTask = () => {
    setOpenPopUp(!openPopUp);
  };
  return (
    <>
      {openPopUp && <TaskForm toggleCreateTask={toogleCreateTask} />}
      <ShowTasks setOpenPopUp={setOpenPopUp} />
    </>
  );
}

export default App;
