import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/nav';
import Breakfast from './pages/breakfast/breakfast';
import Lunch     from './pages/lunch/lunch';
import Dinner    from './pages/dinner/dinner';
import Snack     from './pages/snack/snack';
import Home from './pages/home/home'
import ToTop from "./components/toTop/toTop";

function App() {
    return (
        <BrowserRouter>
            <Nav />

            {/* define your “URL → Component” mappings */}
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/breakfast" element={<Breakfast />} />
                <Route path="/lunch"     element={<Lunch />}     />
                <Route path="/dinner"    element={<Dinner />}    />
                <Route path="/snack"     element={<Snack />}     />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
