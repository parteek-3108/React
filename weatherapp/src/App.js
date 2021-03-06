
import TemperaturesForToday from "./Components/TemperatursForToday";
import Header from "./Components/Header"
import HeadTemp from "./Components/HeadTemp"
import Navigator from "./Components/Navigator"
import MoreDetails from "./Components/MoreDetails"
import AirQualityIndex from "./Components/AirQualityIndex"
import "./App.css"
function App() {
  return (
    <div className="App  h-100 container-fluid bg-bluegradient mb-5">
      <Header />
      <HeadTemp />
      <Navigator />
      <TemperaturesForToday />
      <MoreDetails />
      <AirQualityIndex />
    </div>
  );
}

export default App;
