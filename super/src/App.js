import { BrowserRouter,Routes, Route } from "react-router-dom";
import Registerpage from "./pages/Register/Registerpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Registerpage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
