import "./index.css";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ScrollToTopButton from "./components/Buttons/ScrollToTop";
import ColumnPage from "./pages/Column";
import MyPage from "./pages/MyPage";
import MyRecordPage from "./pages/MyRecord";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyPage />,
  },
  {
    path: "/column",
    element: <ColumnPage />,
  },
  {
    path: "/my-record",
    element: <MyRecordPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </>
  );
}

export default App;
