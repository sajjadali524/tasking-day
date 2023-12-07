import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Services from "../pages/Services";
import TaskList from "../pages/TaskList";
import Chat from "../pages/Chat";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/chat" element={<Chat />} />
    </Routes>
  )
}

export default Routers;
