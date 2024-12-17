import { Route, Routes } from "react-router-dom";
import { Services } from "../src/pages/Services";
import { Community } from "../src/pages/Community";
import { BecomeAnSlg } from "../src/pages/BecomeAnSlg";
import {HomePage} from  "../src/pages/Home"

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
        <Route path="/become-an-slg" element={<BecomeAnSlg />} />
      </Routes>
    </>
  );
}

export default App;
