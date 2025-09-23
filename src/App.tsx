import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import One from "./pages/01";
import Index from "./Index";
import Two from "./pages/02";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="01" element={<One />} />
        <Route path="02" element={<Two />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
