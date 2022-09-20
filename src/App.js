import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './Pages/Home.jsx'
import AddNote from './Pages/AddNote.jsx'
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Note/:id"  element= {<AddNote />} />
        </Routes>
    </div>
  );
}

export default App;
