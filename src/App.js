import Card from "./components/card/Card";
import { languages } from "./helper/data";
import "./app.css";
import react from "./assets/react.svg";

function App() {
  return (
    <>
      <div className="reactbig">
        <h2>Languages</h2>
        <img className="react" src={react} alt="" />
      </div>
      <div className="App">
        {languages.map((item) => {
          return <Card key={item.name} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
