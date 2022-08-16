import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Error from "./componets/Error";
import NavBar from "./componets/NavBar";
import LandPage from "./profil/LandPage";
import Login from "./profil/Login";
import NotFound from "./profil/NotFound";
import Profile from "./profil/Profile/Profile";
import Register from "./profil/Register";
import { userCurrent } from "./redux/actions/authAction";
import PrivateRoute from "./router/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);
  const [name, setName] = useState("");

  const getName = (name) => {
    setName(name);
  };
  return (
    <div>
      <NavBar getName={getName} />
      <Error />
      <Routes>
        <Route path="/" element={<LandPage name={name} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile name={name} />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
