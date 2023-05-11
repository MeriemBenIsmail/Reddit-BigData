import LiveView from "./pages/LiveView";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BatchView from "./pages/BatchView";
import socket from "./utils/ws";

const WSContext = React.createContext({
  comments: [],
  batchResult: null,
});

export const useWS = () => React.useContext(WSContext);

export const WSProvider = ({ children }) => {
  const [ws, setWS] = React.useState({
    comments: [],
    batchResult: null,
  });

  useEffect(() => {
    socket.onopen = () => {
      console.log("connected to websocket server");
    };
    socket.onmessage = (message) => {
      console.log(
        "🚀 ~ file: LiveViewContainer.jsx:29 ~ useEffect ~ message:",
        message
      );
      try {
        const msg = JSON.parse(message.data);
        const type = msg.type;
        if (type === "new_comment") {
          const comments = msg.data;
          console.log(
            "🚀 ~ file: LiveViewContainer.jsx:33 ~ useEffect ~ comments:",
            comments
          );
          setWS((ws) => ({ ...ws, comments }));
        } else if (type === "batch_update") {
          const batchResult = msg.data;
          console.log(
            "🚀 ~ file: LiveViewContainer.jsx:33 ~ useEffect ~ batchResult:",
            batchResult
          );
          setWS((ws) => ({ ...ws, batchResult }));
        }
      } catch (e) {
        console.log("🚀 ~ file: LiveViewContainer.jsx:29 ~ useEffect ~ e:", e);
      }
    };
  }, []);

  return <WSContext.Provider value={ws}>{children}</WSContext.Provider>;
};

function App() {
  return (
    <WSProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/live-view" element={<LiveView />} />
          <Route exact path="/statistics" element={<BatchView />} />
        </Routes>
      </BrowserRouter>
    </WSProvider>
  );
}

export default App;
