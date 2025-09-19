import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import One from "./pages/01";
import Index from "./Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="01" element={<One />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
