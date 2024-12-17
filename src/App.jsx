import { Route, Routes } from "react-router-dom";
import { Services } from "./pages/Services";
import { Community } from "./pages/Community";
import { BecomeAnSlg } from "./pages/BecomeAnSlg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
        <Route path="/become-an-slg" element={<BecomeAnSlg />} />
      </Routes>
    </>
  );
}

export default App;
