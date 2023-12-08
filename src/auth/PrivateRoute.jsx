import { Navigate, useLocation } from "react-router-dom"
import { AuthProvider } from "./auth"

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    if (AuthProvider.authenticated) {
        return children
    }
    return <Navigate to="/login" state={{ from: location.pathname }}/>
}

export default PrivateRoute;