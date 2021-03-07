
import TemperaturesForToday from "./Components/TemperatursForToday";
import Header from "./Components/Header"
import HeadTemp from "./Components/HeadTemp"
import Navigator from "./Components/Navigator"
import MoreDetails from "./Components/MoreDetails"
import AirQualityIndex from "./Components/AirQualityIndex"
import "./App.css"
function App() {
  return (
    <div className="App vh-100 container-fluid bg-bluegradient py-5">
      <Header />
      <HeadTemp  Temp ="20°" Cond="Clear" AQI="0.01"/>
      <Navigator />
      <TemperaturesForToday />
      <MoreDetails />
      <AirQualityIndex />
    </div>
  );
}

export default App;



// fetch(`${url}?lat=${long}&lon=${lat}&appid=${key}`) 
// .then(response => response.json())
// .then(response => console.log(response))// bhai yeh syntax smjh ni aaya meko like ( response => ) yeh call back ko contain kr ra h ya phir uske result ko ??????
// .catch((err) => console.log(err.message))

// ye smbhal le  isko aise hi save krke chod ra hu hn hn