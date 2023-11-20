import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Store from "./pages/store/Store";
import Events from "./pages/events/Events";
import News from "./pages/news/News";
import GetUser from "./pages/test/GetUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="store/*" element={<Store />} />
        <Route path="store/:id/*" element={<Store />} />
        <Route path="events/*" element={<Events />} />
        <Route path="news/*" element={<News />} />
        <Route path="test" element={<GetUser />} />
      </Routes>
    </>
  );
}

export default App;
