import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Services } from "../src/pages/Services";
import { Community } from "../src/pages/Community";
import {HomePage} from  "../src/pages/Home"
=======
import { Services } from "./pages/Services";
import { Community } from "./pages/Community";
import { BecomeAnSlg } from "./pages/BecomeAnSlg";

>>>>>>> development-osama
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
