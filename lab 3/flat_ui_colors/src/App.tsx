import { HomePage } from "./components/home-page/home-page";
import { ColorPicker } from "./components/color-picker/color-picker";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { dividerClasses } from "@mui/material";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/picker" element={<ColorPicker></ColorPicker>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
