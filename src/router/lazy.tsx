import { lazy } from "react";
import { Loading } from "../components/Loading";

const handleCatchChunk = () => {
  window.location.reload();

  return { default: Loading };
};

export const Home = lazy(() =>
  import("../pages/Home")
    .then(({ Home }) => ({ default: Home }))
    .catch(handleCatchChunk)
);

export const Login = lazy(() =>
  import("../pages/Login")
    .then(({ Login }) => ({ default: Login }))
    .catch(handleCatchChunk)
);