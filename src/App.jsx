import LiveView from "./pages/LiveView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BatchView from "./pages/BatchView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/live-view" element={<LiveView />} />
        <Route exact path="/statistics" element={<BatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
