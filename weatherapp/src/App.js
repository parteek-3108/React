
import TemperaturesForToday from "./Components/TemperatursForToday";
import Header from "./Components/Header"
import HeadTemp from "./Components/HeadTemp"
import Navigator from "./Components/Navigator"
import MoreDetails from "./Components/MoreDetails"
import AirQualityIndex from "./Components/AirQualityIndex"
import "./App.css"
import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";
let lat = '30.3820';
let long = '77.2146';
let unit = 'metric';
let newKey = '827024138389966aafb1b81306a81602';
let url = 'https://api.openweathermap.org/data/2.5/onecall';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    }
    this.getInfo();
  }
  setData = (resp) => {
    this.setState({ data: resp});
    console.log(this.state.data);
  }
   getInfo = () => {
    fetch(`${url}?lat=${lat}&lon=${long}&appid=${newKey}&units=${unit}`) 
   .then((response) => response.json())
   .then((response) => this.setData(response))
   .catch((err) => console.log(err.message))
}
  render() {
    let flag = ( this.state.data == null );
    return (
        <>
          {flag ? 
            <div className="vh-100 bg-primary text-white text-center"> 
              <h2>Loading</h2>
            </div>
            : 
            <div className="App vh-100 container-fluid bg-bluegradient py-5">
              <Header />
              <HeadTemp  Temp ={this.state.data.current.temp} Cond={this.state.data.current.weather[0].main} UVI={ this.state.data.current.uvi}/>
              <Navigator list = {this.state.data.daily}/>
              <TemperaturesForToday  list = { this.state.data.hourly}/>
              <MoreDetails SunsetTime = {this.state.data.current.sunset} SunriseTime = {this.state.data.current.sunrise} Realfeel = {this.state.data.current.feels_like} ChanceOfRain = "Not in API" WindSpeed ={this.state.data.current.wind_speed}  Humidity = {this.state.data.current.wind_speed} Pressure = {this.state.data.current.pressure} UVIndex = {this.state.data.current.uvi}/>
              <AirQualityIndex />
            </div>
          }
      </>
    );
  }
}
export default App;



// fetch(`${url}?lat=${long}&lon=${lat}&appid=${key}`) 
// .then(response => response.json())
// .then(response => console.log(response))// bhai yeh syntax smjh ni aaya meko like ( response => ) yeh call back ko contain kr ra h ya phir uske result ko ??????
// .catch((err) => console.log(err.message))

// ye smbhal le  isko aise hi save krke chod ra hu hn hn