import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Projects from './components/Projects';
import ThanisandraProject from './components/ThanisandraProject';
import GodrejProject from './components/GodrejProject';
import About from './pages/About';
import BookVisit from './pages/BookVisit';

function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark'); else root.classList.remove('dark');
  }, [dark]);
  const location = useLocation();
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50">
        <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur border-b border-gray-200/70 dark:border-gray-800">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F1600d1bbc2554feab633ece721d56015%2F82204d7746c54a13afe18a0d89ca44b2?format=webp&width=200" alt="Logo" className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-600/30" />
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Akash Khandelwal</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className={`hover:text-blue-600 ${location.pathname==='/'?'text-blue-600':'text-gray-700'}`}>Home</Link>
            <Link to="/about" className={`hover:text-blue-600 ${location.pathname==='/about'?'text-blue-600':'text-gray-700'}`}>About</Link>
            {location.pathname !== '/' && (
              <Link to="/book" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Book Visit</Link>
            )}
              <button aria-label="Toggle theme" onClick={()=>setDark(v=>!v)} className="ml-2 rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800">{dark ? '🌙' : '☀️'}</button>
          </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<BookVisit />} />
          <Route path="/project/tvs-thanisandra" element={<ThanisandraProject />} />
          <Route path="/project/godrej-msr-city" element={<GodrejProject />} />
        </Routes>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
        <div className="container mx-auto px-6 text-center">
          <p className="font-bold">Akash Khandelwal</p>
          <p className="text-sm text-gray-400 mt-2">Independent Real Estate Advisor | RERA Authorized Channel Partner</p>
          <div className="mt-4 text-xs text-gray-500 max-w-4xl mx-auto">
            <p>
              Disclaimer: This website is an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of services. Prices and availability are subject to change without prior notice. Images may be representational and not reflect the exact project specifications. Your data may be shared with RERA-registered developers for processing your enquiry.
            </p>
          </div>
          <div className="mt-4 border-t border-gray-700 pt-4 flex justify-center space-x-4">
            <a href="#privacy" className="text-sm hover:text-white">Privacy Policy</a>
            <a href="#terms" className="text-sm hover:text-white">Terms & Conditions</a>
          </div>
          <p className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} Akash Khandelwal - All rights reserved.</p>
        </div>
      </footer>

      {location.pathname !== '/' && (
        <Link to="/book" className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700">Book Site Visit</Link>
      )}
    </div>
  );
}

export default App;
