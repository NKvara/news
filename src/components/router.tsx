import Home from "@/pages/Home";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    }
  ],
  {basename: "/news"}
);

export default router;
