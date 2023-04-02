import LiveView from "./pages/LiveView";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BatchView from "./pages/BatchView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/live-view" element={<LiveView />} />
        <Route exact path="/batch-view" element={<BatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
