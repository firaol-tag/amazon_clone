import "./App.css";
// import Header from "./Header";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./Checkout";
import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./Reducer";
import Login from "./Login";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Checkout",
      element: <Checkout />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <RouterProvider router={router} />
      </StateProvider>
    </React.StrictMode>
  );
}

export default App;
