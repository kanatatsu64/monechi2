import { Routes, Route, Navigate } from "react-router-dom";
import SamplePage from "./features/sample/SamplePage";
import "./App.css"; // Keep or remove based on whether global styles are needed

function App() {
  return (
    <Routes>
      <Route path="/sample" element={<SamplePage />} />
      <Route path="/" element={<Navigate to="/sample" replace />} />
      {/* Add other routes here as needed */}
    </Routes>
  );
}

export default App;
