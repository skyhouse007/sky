import { Routes, Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import ThanisandraProject from './components/ThanisandraProject';
import GodrejProject from './components/GodrejProject';
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/"><img src={logo} alt="TVS Emerald Logo" className="h-10" /></Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/tvs-thanisandra" element={<ThanisandraProject />} />
        <Route path="/project/godrej-msr-city" element={<GodrejProject />} />
      </Routes>

      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="font-bold">TVS Emerald</p>
          <p className="text-sm text-gray-400 mt-2">This project is RERA registered. | Authorized Channel Partner</p>
          <div className="mt-4 text-xs text-gray-500 max-w-4xl mx-auto">
            <p>
              Disclaimer: Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary.
            </p>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4 flex justify-center space-x-4">
            <a href="#privacy" className="text-sm hover:text-white">Privacy Policy</a>
            <a href="#terms" className="text-sm hover:text-white">Terms & Conditions</a>
          </div>
          <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} TVS Emerald - All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;