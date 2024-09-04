import React, { useState } from "react";

import ShowTasks from "./show-tasks/ShowTasks";
import CreateTask from "./section/create-task/CreateTask";


function App() {
  const [openPopUp, setOpenPopUp] = useState(false);

  const toogleCreateTask = () => {
    setOpenPopUp(!openPopUp);
  };
  return (
    <>
      {openPopUp && <CreateTask toggleCreateTask={toogleCreateTask} />}
      <ShowTasks setOpenPopUp={setOpenPopUp} />
    </>
  );
}

export default App;
