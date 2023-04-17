import { Outlet } from "react-router-dom";
import { Props } from "../types/auth";
import { Login } from "./lazy";

export const PrivateRoutes = ({auth}: Props) => auth ? <Outlet /> : <Login />