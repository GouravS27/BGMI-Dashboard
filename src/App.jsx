import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
import Profile from "./components/Profile";
import Leaderboard from "./components/Leaderboard";
import Matches from "./components/Matches";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Comparison from "./components/Comparison";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="compare" element={<Comparison />} />
          <Route path="matches" element={<Matches />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
