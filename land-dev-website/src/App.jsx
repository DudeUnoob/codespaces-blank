import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { About } from './components/About'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900">
        <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
          <nav className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <Link to="/" className={`text-2xl font-bold ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z" />
                    <path d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z" />
                  </svg>
                  TERRA NOVA
                </motion.div>
              </Link>
              <div className="hidden md:flex space-x-8">
                <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
                <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
                <NavLink to="/services" isScrolled={isScrolled}>Services</NavLink>
                <NavLink to="/projects" isScrolled={isScrolled}>Projects</NavLink>
                <NavLink to="/contact" isScrolled={isScrolled} isButton={true}>Contact Us</NavLink>
              </div>
              <button
                className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                </svg>
              </button>
            </div>
          </nav>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden bg-white shadow-md p-4"
              >
                <div className="flex flex-col space-y-3">
                  <NavLink to="/" onClick={() => setIsMenuOpen(false)} isScrolled={true}>Home</NavLink>
                  <NavLink to="/about" onClick={() => setIsMenuOpen(false)} isScrolled={true}>About</NavLink>
                  <NavLink to="/services" onClick={() => setIsMenuOpen(false)} isScrolled={true}>Services</NavLink>
                  <NavLink to="/projects" onClick={() => setIsMenuOpen(false)} isScrolled={true}>Projects</NavLink>
                  <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} isScrolled={true} isButton={true}>Contact Us</NavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="bg-gray-900 text-white pt-16 pb-8">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-1">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 16H5V5h14v14z" />
                    <path d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z" />
                  </svg>
                  <span className="text-xl font-bold">TERRA NOVA</span>
                </div>
                <p className="text-gray-400 mb-6">Transforming landscapes, building sustainable futures since 2005.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/></svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link></li>
                  <li><Link to="/projects" className="text-gray-400 hover:text-white transition duration-300">Our Projects</Link></li>
                  <li><Link to="/services" className="text-gray-400 hover:text-white transition duration-300">Services</Link></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">News & Blog</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Land Planning</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Site Development</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Environmental Consulting</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Project Management</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Urban Design</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-400">1162 Gorgas Avenue, Suite B<br />San Francisco, CA 94129</span>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-400">(415) 561-6655</span>
                  </p>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-400">info@terranova.com</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 mb-4 md:mb-0">
                  © {new Date().getFullYear()} Terra Nova Land Development. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition duration-300">Privacy Policy</a>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition duration-300">Terms of Service</a>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition duration-300">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

function NavLink({ to, children, isScrolled, isButton, ...props }) {
  return (
    <Link
      to={to}
      className={`
        transition duration-300 px-4 py-2 rounded-md text-sm font-medium
        ${isButton 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : isScrolled 
            ? 'text-gray-800 hover:text-blue-600' 
            : 'text-white hover:text-blue-200'
        }
      `}
      {...props}
    >
      {children}
    </Link>
  )
}