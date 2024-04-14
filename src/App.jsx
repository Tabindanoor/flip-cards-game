import Card from "./Card";
import Game from "./Game";

function App() {
  return (
    <div className="App cursor-pointer">
      <h1 className="text-3xl font-bold text-center mt-8">Memory Card Game</h1>
      < Game/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
