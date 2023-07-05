import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route index element={<MainPage/>}/>
        </Routes>
    </>
  );
}

export default App;
