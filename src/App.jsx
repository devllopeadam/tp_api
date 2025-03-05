import TodoPage from "./components/TodoPage";
import Todos from "./components/Todos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafafa] pt-10">
        <Routes>
          <Route
            path="/"
            element={<Todos />}
          />
          <Route
            path="/todos/:id"
            element={<TodoPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}
