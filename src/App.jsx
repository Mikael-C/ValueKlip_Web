import { Route, Routes } from "react-router-dom";
import { Services } from "./pages/Services";
import { Community } from "./pages/Community";

function App() {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
