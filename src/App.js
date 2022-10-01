import { Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonPractice from "./components/ButtonPractice";
import Home from "./components/Home";
import TypographyPractice from "./components/TypographyPractice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/typography" element={<TypographyPractice />} />
      <Route path="/button" element={<ButtonPractice />} />
    </Routes>
  );
}

export default App;
