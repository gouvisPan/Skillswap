import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import SpecificMentoring from "./pages/MyMentorshipsRoute/SpecificMentoring/SpecificMentoring";
import Auth from "./pages/auth/Auth";
import MyMentees from "./pages/MyMenteesRoute/MyMenteeships/MyMenteeships";
import MyLearning from "./pages/MyMentorshipsRoute/MyMentorships/MyMentorships";
import Layout from "./pages/Layout/Layout";
import RequireAuth from "./pages/auth/RequireAuth";
import { useAppSelector } from "./hooks/hooks";
import { loginDummyUser } from "./store/actions/user-actions";
import { logoutUser } from "./store/actions/user-actions";
import SpecificMenteeship from "./pages/MyMenteesRoute/SpecificMenteeship/SpecificMenteeship";

function App() {
  const user = useAppSelector((state) => state.user.data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginDummyUser());
    console.log(user);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTE ---------------------------->*/}
          <Route path="login" element={<Auth />} />
          {/*<---------------------------- PUBLIC ROUTE */}
          {/* USER ROUTE ---------------------------->*/}
          <Route element={<RequireAuth />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="learning" element={<MyLearning />} />
            <Route
              path="learning/:learningId"
              element={<SpecificMentoring />}
            />
            <Route path="teaching" element={<MyMentees />} />
            <Route
              path="teaching/:teachingId"
              element={<SpecificMenteeship />}
            />
          </Route>
          {/*<---------------------------- USER ROUTE*/}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
