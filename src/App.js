import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LocationPage from "./screens/LocationPage";
import Venue from "./screens/Venue";
import { default as locations } from "./data/LocationsWithSchedules";
import LandingPage from "./screens/LandingPage";
import Feedback from "./screens/Feedback";
import { Router } from "@reach/router";
import TalkDetails from "./components/TalkDetails";
import API from "./Api";

class App extends Component {
  constructor(props) {
    super(props);

    const locationNames = API.getCities();
    this.state = {
      locationNames: locationNames
    };
  }

  render() {
    return (
      <>
        <NavBar cities={this.state.locationNames} />
        <Router>
          <LandingPage path="/" default />
          <LocationPage path="/city/:city" />
          <TalkDetails path="/city/:city/:talkIndex" />
          <Venue path="/venue/:city" />
          <Venue path="/venue" />
          <Feedback path="/feedback" />
        </Router>
      </>
    );
  }
}

export default App;
