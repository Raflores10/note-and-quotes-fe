import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";

function App() {
  return( 

  <BrowserRouter>
    <Navigation />

      <Routes>
        <Route path="/profile/" element={<Profile/>}/>
        <Route />
        <Route />
        <Route />

        <Route />

      </Routes>
    </BrowserRouter>
    
)};

export default App;


