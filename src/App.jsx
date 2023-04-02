import LiveView from "./pages/LiveView";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/live-view" element={<LiveView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
