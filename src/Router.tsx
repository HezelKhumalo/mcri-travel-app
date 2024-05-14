import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ExamplePage from "./pages/ExamplePage/ExamplePage";
import Sightseeing from "./pages/ExamplePage/Sightseeing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "example",
    element: <ExamplePage />,
  },
  // {
  //   path: "packing",
  //   element: <PackingList />,
  // },
  // {
  //   path: "flights",
  //   element: <FlightInfo />,
  // },
  {
    path: "sightseeing",
    element: <Sightseeing />,
      },
]);
