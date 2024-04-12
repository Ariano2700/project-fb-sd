import { Route, Routes } from "react-router-dom";
import { Home } from "./presentation/pages/home/Home";
// import { Login } from "./presentation/pages/forms/Login";
// import { Register } from "./presentation/pages/forms/Register";
import { AuthProvider } from "./presentation/context/authContext";
import { MainRoute } from "./presentation/protectedRoutes/MainRoute";
import { ProtectedRoute, RedirectIfAuthenticated, RedirectIfAuthenticatedRegister } from "./presentation/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainRoute />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<RedirectIfAuthenticated />}></Route>
        <Route path="/Register" element={<RedirectIfAuthenticatedRegister/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
