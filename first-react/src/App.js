import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";

function App() {
  return (
    <div>
      <h1 style={{backgroundColor:"peachpuff",color:"green",textAlign:"center"}}>Hello,world!</h1>
      <FunctionalComponent/>
      <ClassComponent/>
      <Counter/>
      <ClassCounter/>
    </div>
    
  );
}

export default App;

