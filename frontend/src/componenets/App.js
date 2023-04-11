import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layouts from "./layouts";
import NotFound from "./NotFound";
import Login from "./Login";
import Register from "./register"
import Home from "./HomeComponents/home";
import Profile from "./ProfileComponent/Profile";
import Profiles from "./ProfileComponent/UserProfile";

function App() {
  const isAuth = localStorage.getItem("token")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Layouts />} >
            <Route path="/home" element={isAuth ? <Home /> : <Navigate to="/" />}></Route>
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/" />}></Route>
            <Route
              path="/profiles/:id"
              element={isAuth ? <Profiles /> : <Navigate to="/" />}
            />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
