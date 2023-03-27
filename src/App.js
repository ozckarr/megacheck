import { useState } from "react";
import SideController from "./style/components/SideController";
import Controller from "./style/components/Controller";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="App">
      {showSettings ? (
        <Controller
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
      ) : (
        <></>
      )}

      <SideController
        showSettings={showSettings}
        setShowSettings={setShowSettings}
      />
    </div>
  );
}

export default App;
