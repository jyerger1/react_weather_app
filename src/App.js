import React, { Component } from "react";
import Moment from "moment";
import tz from "zipcode-to-timezone";
import "moment-timezone";
import "./App.css";

// const API_Key = "98714695d6d6eca2461e95c2aa78b140";

class App extends Component {
  state = {};

  getTime = () => {
    const zone = tz.lookup(this.state.zip);
    const now = Moment().tz(zone).format("dddd, MMMM Do YYYY, h:mm:ss a");
    console.log(now);
    this.setState({
      time: now,
    });
  };

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
      name: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      zip: inputValue,
    });

    this.getTime();
  };

  // RENDER TO THE PAGE
  render() {
    return (
      <div id="form">
        <h1>GET WEATHER</h1>
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
          <p>{this.state.name}</p>
          <p>{this.state.temperature}</p>
          <p>{this.state.description}</p>
          <p>{this.state.time}</p>
        </div>
      </div>
    );
  }
}

export default App;
