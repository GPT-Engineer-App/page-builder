import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import StoreMessages from "./pages/StoreMessages.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/store-messages" element={<StoreMessages />} />
      </Routes>
    </Router>
  );
}

export default App;