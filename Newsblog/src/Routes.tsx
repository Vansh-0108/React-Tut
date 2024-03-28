import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import Subscribe from "pages/Subscribe";
import SigleBlog from "pages/SigleBlog";
import AllBlog from "pages/AllBlog";
import Login from "pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "subscribe",
      element: <Subscribe />,
    },
    {
      path: "sigleblog",
      element: <SigleBlog />,
    },
    {
      path: "allblog",
      element: <AllBlog />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
