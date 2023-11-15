import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Body />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;