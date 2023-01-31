
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/create/Create";
import Details from "./pages/details/details";
import Home from "./pages/home/Home";
import DialogBox from "./pages/Modal/Modal";
import Modify from "./pages/Modify/Modify";
import Search from "./pages/search/search";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/adduser" element={<Create />} />
          
          <Route path="/userDetail" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
