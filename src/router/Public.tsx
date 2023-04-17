import { Navigate } from "react-router-dom";
import { Props } from "../types/auth";
import { Login } from "./lazy";

export const PublicRoutes = ({auth}: Props) => auth ? <Navigate to="/home" /> : <Login />