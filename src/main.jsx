import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Text from "./components/text/Text.jsx";
import Array from "./components/array/Array.jsx";
import Alert from "./components/alert/Alert.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/text",
    element: <Text />,
  },
  {
    path: "/array",
    element: <Array />,
  },
  {
    path: "/alert",
    element: <Alert />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
