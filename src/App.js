import React, { Component } from "react";
// import "moment";
// import tz from "zipcode-to-timezone";
import "./App.css";

// const API_Key = "98714695d6d6eca2461e95c2aa78b140";

class App extends Component {
  state = {
    // temperature: undefined,
    // city: undefined,
    // country: undefined,
    // humidity: undefined,
    // description: undefined,
    // error: undefined,
  };

  // getTime = () => {

  // };

  getWeather = async () => {
    const inputValue = document.getElementById("zipInput").value;

    console.log(inputValue);

    const api_call = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        inputValue +
        "&units=imperial&appid=98714695d6d6eca2461e95c2aa78b140"
    );
    const data = await api_call.json();
    console.log(data);

    this.setState({
      temperature: data.main.temp,
    });
  };

  // RENDER TO THE PAGE
  render() {
    return (
      <div id="form">
        <h1>Get Weather</h1>
        <div>
          <p>
            <input
              id="zipInput"
              type="text"
              placeholder="Enter Zip Code"
              name="zip"
            />
          </p>
          <p>
            <button onClick={this.getWeather}>Click</button>
          </p>
          <p>{this.state.temperature}</p>
        </div>
      </div>
    );
  }
}

export default App;
