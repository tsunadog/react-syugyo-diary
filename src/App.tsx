import { Route, Routes } from "react-router-dom";
import "./App.css";
import One from "./pages/01";
import Index from "./Index";
import Two from "./pages/02";
import Three from "./pages/03";
import TwoOld from "./pages/02_old";
import Four from "./pages/04";
import { ThemeProvider } from "./context/ThemeProvider";
import Five from "./pages/05";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="01" element={<One />} />
        <Route path="02" element={<Two />} />
        <Route path="02_old" element={<TwoOld />} />
        <Route path="03" element={<Three />} />
        <Route path="04" element={<Four />} />
        <Route path="05" element={<Five />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
