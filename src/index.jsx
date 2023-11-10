import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage";
import { AboutUs } from "./pages/AboutUs";
import { AboutProject } from "./pages/AboutProject";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./global.css";
import { Link, Outlet } from "react-router-dom";


export const App = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/aboutus">
              <button>O autorkách</button>
            </Link>
          </li>
          <li>
            <Link to="/aboutproject">
              <button>O projektu</button>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "aboutproject",
        element: <AboutProject />,
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);


