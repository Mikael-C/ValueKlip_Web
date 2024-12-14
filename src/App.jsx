import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Services } from "./pages/Services";

function App() {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
