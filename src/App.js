import { useState } from "react";
import SideController from "./style/components/SideController";
import Controller from "./style/components/Controller";
import Check from "./style/components/Check";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [checkSettings, setCheckSettings] = useState({
    height: 9,
    width: 20,
    margin: 1,
    thickness: 1,
  });

  return (
    <div className="App">
      {showSettings ? (
        <Controller
          showSettings={showSettings}
          setShowSettings={setShowSettings}
          checkSettings={checkSettings}
          setCheckSettings={setCheckSettings}
        />
      ) : (
        <></>
      )}

      <SideController
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
      <Check checkSettings={checkSettings} />
    </div>
  );
}

export default App;
