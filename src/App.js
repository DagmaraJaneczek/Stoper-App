import { useState } from "react";

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

/* Add info to the state */

  return (
    <div>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
};

export default App;