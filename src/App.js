import { Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Details from "./pages/details/Details";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursedetails/:id" element={<Details />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
