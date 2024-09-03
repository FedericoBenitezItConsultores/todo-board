import React, { useState } from "react";

import TaskForm from "./section/tasksForm/TaskForm";
import ShowTasks from "./show-tasks/ShowTasks";

function App() {
  const [openPopUp, setOpenPopUp] = useState(false)
  return (
    <>
     {openPopUp && <TaskForm />}
     <ShowTasks setOpenPopUp={setOpenPopUp}/>
    </>
  );
}

export default App;
