import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [altertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {altertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
