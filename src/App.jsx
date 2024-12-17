import { Route, Routes } from "react-router-dom";
import { Services } from "../src/pages/Services";
import { Community } from "../src/pages/Community";
import {HomePage} from  "../src/pages/Home"
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
