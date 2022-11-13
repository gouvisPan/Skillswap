import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Swap from "./pages/MyMentorshipsRoute/MyMentorships/MyMentorships";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import { dummyUser } from "./model/data/users";
import { useAppDispatch } from "./hooks/hooks";
import { userActions } from "./store/userSlice";
import SpecificMentoring from "./pages/MyMentorshipsRoute/SpecificMentoring/SpecificMentoring";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.updateUser(dummyUser));
  }, [dummyUser]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learning" element={<Swap />} />
        <Route path="/learning/:learningId" element={<SpecificMentoring />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
