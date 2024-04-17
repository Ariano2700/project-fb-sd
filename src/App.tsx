import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./presentation/pages/home/Home";
import { AuthProvider } from "./presentation/context/authContext";
import { MainRoute } from "./presentation/protectedRoutes/MainRoute";
import {
  ProtectedRoute,
  RedirectIfAuthenticated,
  RedirectIfAuthenticatedRegister,
} from "./presentation/protectedRoutes/ProtectedRoutes";
import { AddNewTask } from "./presentation/pages/addNewTask/AddNewTask";
import { NotFoundPage } from "./presentation/pages/notFoundPage/NotFoundPage";

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
        <Route
          path="/addTask"
          element={
            <ProtectedRoute>
              <AddNewTask />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<RedirectIfAuthenticated />}></Route>
        <Route
          path="/Register"
          element={<RedirectIfAuthenticatedRegister />}
        ></Route>

        <Route path="*" element={<Navigate to="/not-found"/>}></Route>
        <Route path="/not-found" element={<NotFoundPage/>}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
