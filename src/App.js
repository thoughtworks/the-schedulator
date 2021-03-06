import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LocationPage from "./screens/LocationPage";
import Venue from "./screens/Venue";
import Feedback from "./screens/Feedback";
import { Router } from "@reach/router";
import TalkDetails from "./components/TalkDetails";
import API from "./Api";
import LandingPage from "./screens/LandingPage";

const App = () => {
  return (
    <>
      <NavBar days={API.getDays()} />
      <Router>
        <LandingPage path="/" default />
        <LocationPage path="/day/:day" />
        <TalkDetails path="/day/:day/:talkIndex" />
        <Venue path="/venue" />
        <Feedback path="/feedback" />
      </Router>
    </>
  );
};

export default App;
