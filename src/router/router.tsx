import { Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layouts from "../modules/Layout/Layout";
import { Login, Home } from "./lazy";
import { PrivateRoutes } from "./Private";
import { PublicRoutes } from "./Public";
export const Router = () =>
  useRoutes([
    {
      path: "/",
      element: <PrivateRoutes auth={false} />,
      children: [
        {
          path: "/",
          element: <Layouts />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<h1>loading...</h1>}>
                  <Home />
                </Suspense>
              ),
            },
            {
              path: "/login",
              element: (
                <Suspense fallback={<h1>loading...</h1>}>
                  <Login />
                </Suspense>
              ),
            },
            {
              path: "*",
              element: <Navigate to={"/"} />,
            },
          ],
        },
      ],
    },
    {
      path: "sign",
      element: <PublicRoutes auth={false} />,
      children: [
        {
          path: "/sign/login",
          element: (
            <Suspense fallback={<h1>loading...</h1>}>
              <Login />
            </Suspense>
          ),
        },
      ],
    },
  ]);
