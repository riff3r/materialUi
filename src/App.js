import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TypographyPractice from "./components/TypographyPractice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/typography" element={<TypographyPractice />} />
    </Routes>
  );
}

export default App;
