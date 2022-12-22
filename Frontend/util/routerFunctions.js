import { useLocation } from "react-router-dom"
export const getPath = () => {
    const path = useLocation().pathname.split("/")[1];
    return path;

}