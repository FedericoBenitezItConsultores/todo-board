import React, { useState } from "react";

import TaskForm from "./section/tasksForm/TaskForm";

function App() {
  const [openPopUp, setOpenPopUp] = useState(false)
  return (
    <>
     {openPopUp && <TaskForm />}
    </>
  );
}

export default App;
