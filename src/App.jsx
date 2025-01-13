import { useState } from "react";
import Card from "./Components/Cards";
import Navbar from "./Components/navbar";

function App() {
  const [cardState, setCardState] = useState([]);

  return (
    <div>
      <Navbar />
      <Card cardState={cardState} setCardState={setCardState} />
    </div>
  );
}

export default App;
