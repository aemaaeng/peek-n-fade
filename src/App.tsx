import { useState } from "react";
import "./App.css";
import { Button } from "./stories/Button";
import Toast from "./components/toast/Toast";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        label="click to trigger toast"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Toast isOpen={isOpen} text="추천인 코드가 복사되었습니다." />
    </>
  );
}

export default App;
