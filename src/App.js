import "./App.css";
import { Greeting } from "./components/Greeting";
import { PeopleList } from "./components/PeopleList";
import { customers } from "./customers";

function App() {
  return (
    <div className="App">
      <Greeting name="Name1" messages={0} />
      <PeopleList people={customers} />
    </div>
  );
}

export default App;
