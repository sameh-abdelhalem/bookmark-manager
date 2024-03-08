import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
  ],
  { basename: "/bookmark-manager" }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
