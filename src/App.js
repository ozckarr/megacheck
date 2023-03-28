import { useState } from "react";
import SideController from "./style/components/SideController";
import Controller from "./style/components/Controller";
import Check from "./style/components/Check";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [check, setCheck] = useState({
    height: 9,
    width: 20,
    background: "checkPrimary",
    margin: 1,
    thickness: 1,
    font: "fontZeyada",
    handwrittenSize: 16,
    fontSize: 16,
    dateText: "20/12 - 02",
    aba: 123456789,
    accountNr: 12345678901,
    checkNr: 1234,
    codeSize: 20,
  });

  return (
    <div className="App">
      {showSettings ? (
        <Controller
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          check={check}
          setCheck={setCheck}
        />
      ) : (
        <></>
      )}

      <SideController
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <Check check={check} />
    </div>
  );
}

export default App;
