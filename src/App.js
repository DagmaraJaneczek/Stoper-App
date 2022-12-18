import FormattedTime from "./components/FormattedTime/FormattedTime";
import Button from "./components/Button/Button";
import { useState } from "react";


const App = () => {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});

  const start = () =>{
    run();
    setInterval(run, 10);
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <FormattedTime time={time} />
          <Button start={start} />
        </div>
      </div>
    </div>
  );
};

export default App;