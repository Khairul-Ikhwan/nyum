import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import StoreFront from "./pages/storeFront/StoreFront";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/store/:id" element={<StoreFront />} />
      </Routes>
    </main>
  );
}

export default App;
