// App.jsx
import "./App.css";
import CakeView from "./features/cake/cakeview"; // Correct import for default export
import Icecreamview from "./features/icecream/icecreamview";
import Userview from "./features/user/userview";

function App() {
  return (
    <div className="App">
      <CakeView /> 
      <Icecreamview />
      <Userview />
    </div>
  );
}

export default App;
