import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import {useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchUser } from "./store/actions/user-actions";
import SpecificMentoring from "./pages/MyMentorshipsRoute/SpecificMentoring/SpecificMentoring";
import Register from "./pages/auth/Auth";
import Auth from "./pages/auth/Auth";
import MyMentees from "./pages/MyMenteesRoute/MyMenteeships";
import MyLearning from "./pages/MyMentorshipsRoute/MyMentorships/MyMentorships";
import { dummyUser } from "./model/data/users";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dummyUser]);

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Auth />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learning" element={<MyLearning />} />
        <Route path="/learning/:learningId" element={<SpecificMentoring />} />
        <Route path="/teaching" element={<MyMentees />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
