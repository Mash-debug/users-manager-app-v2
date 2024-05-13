import Gantt from "../components/Gantt";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";
import { Paths } from "../constants/paths.js";
import getAccount from "../utils/getAccount.js";
import fetchTasks from "../utils/fetchTasks.js";
import manageTasks from "../utils/manageTasks.js";

export default function GanttPage() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    data: [],
    links: [],
  });

  useEffect(() => {
    getAccount(navigate, setUser, Paths.login);
  }, [navigate, setUser]);

  useEffect(() => {
    fetchTasks(setTasks);
  }, []);

  const handleDataUpdated = async (action, item) => {
    await manageTasks(action, item);
  };

  return (
    <>
      <div className="gantt-container" style={{ width: "100%" }}>
        <Gantt
          tasks={tasks}
          onDataUpdated={(entityType, action, item, id) =>
            handleDataUpdated(action, item)
          }
        />
      </div>
    </>
  );
}
