import React from "react";
import PagesTable from "../shared/PagesTable";

const TaskList = () => {
  return (
    <div className="py-5">
      <PagesTable title="Task List" hideContent={true} />
    </div>
  );
};

export default TaskList;
