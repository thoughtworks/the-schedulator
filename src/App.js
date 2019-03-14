import React, { Component } from "react";
import "./App.css";
import LocationEntry from "./components/LocationEntry";
import NavBar from "./components/NavBar";
import LocationPage from "./screens/LocationPage";
import Venue from "./screens/Venue";
import LocationsWithSchedules from "./data/LocationsWithSchedules";
import LandingPage from "./screens/LandingPage";
import { Container } from "semantic-ui-react";

class App extends Component {
  constructor(props){
    super(props)
    const cityName = localStorage.getItem('selectedLocation')
    const selectedLocation = this.findLocationByName(cityName)

    this.state = {
      selectedLocation,
      locations: LocationsWithSchedules,
    };
  }

  findLocationByName = (name) => LocationsWithSchedules.find(location => location.city === name)

  render() {
    const { locations, selectedLocation } = this.state;
    const locationNames = locations.map(location => location.city)
    const handleCityClick = (cityName) => {
      const selectedLocation = this.findLocationByName(cityName)
      localStorage.setItem('selectedLocation', cityName);
      this.setState({ selectedLocation })
    }

    let toRender;
    if (selectedLocation) {
      toRender = (
        <LocationPage
          city={selectedLocation.city}
          schedule={selectedLocation.schedule}
        />
      );
    } else {
      toRender = (
        <LandingPage
          locations={locations}
          onClick={location => {
            this.setState({ selectedLocation: location });
          }}
        />
      );
    }

    return <>
      <NavBar cities={locationNames} onCityClick={handleCityClick} />
      <Container>
        {toRender}
      </Container>
    </>;
  }
}

export default App;
