import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TaskPage from "../pages/TaskPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

export default router;
