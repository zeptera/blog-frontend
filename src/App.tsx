import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
