import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import Result from "./components/Result";
import { GlobalStayle } from "./components/Styles";

function App() {
  const [userNum, setUserNum] = useState(null);
  const [secretNum, setSecretNum] = useState(Math.floor(Math.random() * 101));
  const [tryNum, setTryNum] = useState(0);
  const [resultMassege, setResultMassege] = useState("");
  const comparing = () => {
    if (tryNum < 5) {
      if (secretNum > +userNum) {
        setResultMassege(
          `You guessed Lower you still have ${4 - tryNum} attempts`
        );
      } else if (secretNum < +userNum) {
        setResultMassege(
          `You guessed Higher you still have ${4 - tryNum} attempts`
        );
      } else {
        setResultMassege(`Yippee, guessed it!`);
      }
      setTryNum(tryNum + 1);
    } else {
      setSecretNum(Math.floor(Math.random() * 101));
      setResultMassege(`you lost start again`);
    }
  };
  return (
    <div>
      <GlobalStayle />
      <Home setUserNum={setUserNum} userNum={userNum} comparing={comparing} />
      <Result resultMassege={resultMassege} />
    </div>
  );
}

export default App;
