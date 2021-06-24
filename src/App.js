import './App.css';
import Counter from "./components/Counter"
import increaseCounter from "./components/IncreaseCounter"
import decreaseCounter from "./components/DecreaseCounter"
import increaseByTwoCounter from "./components/IncreaseByTwoCounter"


function App() {
  return (
    <div >
      <Counter/>
      <increaseCounter/>
      <decreaseCounter/>
      <increaseByTwoCounter/>

    </div>
  );
}

export default App;
