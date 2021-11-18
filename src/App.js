import './App.css';
import UserPage from './UserPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;