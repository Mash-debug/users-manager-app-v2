import Gantt from "../components/Gantt";

export default function GanttPage() {
  const data = {
    data: [
      {
        id: 1,
        text: "Initialisation du projet",
        start_date: "2024-04-29",
        duration: 1,
        progress: 1,
      },
      {
        id: 2,
        text: "Task #2",
        start_date: "2024-04-29",
        duration: 3,
        progress: 0.4,
      },
    ],
    links: [{ id: 1, source: 1, target: 2, type: "0" }],
  };
  return (
    <div className="gantt-container" style={{width: "100%"}}>
      <Gantt tasks={data} />
    </div>
  );
}
