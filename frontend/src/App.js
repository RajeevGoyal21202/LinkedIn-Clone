import "./App.css";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import CommentCard from "./component/CommentCard";
import CreatePost from "./component/CreatePost";
import UserProfile from "./component/UserProfile";
import Network from "./pages/network/Network";
import InvitationPage from "./pages/Invitation/InvitationPage";
import InvitationSent from "./pages/Invitation/InvitationSent";
import MessagePage from "./pages/messages/MessagePage";
import NotificationPage from "./pages/notification/NotificationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/card" element={<CommentCard />}></Route>
        <Route path="/post" element={<CreatePost />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/invitation" element={<InvitationPage />}></Route>
        <Route path="/messaging" element={<MessagePage />}></Route>
        <Route path="/notification" element={<NotificationPage />}></Route>
       

        <Route path="/invitationSent" element={<InvitationSent />}></Route>

        <Route path="/network" element={<Network />}></Route>
      </Routes>
    </div>
  );
}

export default App;
