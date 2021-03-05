
import TemperaturesForToday from "./Components/TemperatursForToday";
import Header from "./Components/Header"
import HeadTemp from "./Components/HeadTemp"
import Navigator from "./Components/Navigator"
function App() {
  return (
    <div className="App bg-primary h-100">
      <Header />
      <HeadTemp />
      <Navigator />
      <TemperaturesForToday />
    </div>
  );
}

export default App;
