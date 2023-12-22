import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import AuthProvider from "./AuthProviders/AuthProviders";
import Register from "./Pages/Register/Register";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UpdateTask from "./Pages/UpdateTask/UpdateTask";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <h2>Page not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <h2>About</h2>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/task/:id",
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/task/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
