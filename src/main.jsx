import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Text from "./components/text/Text.jsx";
import Array from "./components/array/Array.jsx";
import Alert from "./components/alert/Alert.jsx";
import Login from "./components/form/form.jsx";
import Checkbox from "./components/checkbox/Checkbox.jsx";
import DetailList from "./components/detail-list/DetailList.jsx";
import Divider from "./components/divider/Divider.jsx";
import Filter from "./components/filter/Filter.jsx";
import Grid from "./components/grid/Grid.jsx";
import Header from "./components/header/Header.jsx";
import Input from "./components/input/Input.jsx";
import Progress from "./components/progress/Progress.jsx";
import Quantity from "./components/quantity/Quantity.jsx";
import Radio from "./components/radio/Radio.jsx";
import Select from "./components/select/Select.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Table from "./components/table/Table.jsx";
import Spinner from "./components/spinner/Spinner.jsx";
import ContentHover from "./components/contenthover/ContentHover.jsx";
import Button from "./components/buttons/Button.jsx";
import Popup from "./components/popup/Popup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
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
  {
    path: "/form",
    element: <Login />,
  },
  {
    path: "/buttons",
    element: <Button />,
  },
  {
    path: "/checkbox",
    element: <Checkbox />,
  },
  {
    path: "/detail-list",
    element: <DetailList />,
  },
  {
    path: "/divider",
    element: <Divider />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/grid",
    element: <Grid />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/input",
    element: <Input />,
  },
  {
    path: "/progres",
    element: <Progress />,
  },
  {
    path: "/quantity",
    element: <Quantity />,
  },
  {
    path: "/radio",
    element: <Radio />,
  },
  {
    path: "/select",
    element: <Select />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/table",
    element: <Table />,
  },
  {
    path: "/spinner",
    element: <Spinner />,
  },
  {
    path: "/content-hover",
    element: <ContentHover />,
  },
  {
    path: "/popup",
    element: <Popup />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
