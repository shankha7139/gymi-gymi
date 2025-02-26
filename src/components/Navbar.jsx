import { useState } from 'react';
import { FaQrcode, FaSignOutAlt, FaBars, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('qrcode'); // Default active tab

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  // Navigation items with their icons defined directly
  const navItems = [
    { id: 'qrcode', label: 'QR Code', desktopIcon: <FaQrcode className="mr-2" />, mobileIcon: <FaQrcode className="mr-3" /> },
    { id: 'dashboard', label: 'Dashboard', desktopIcon: <FaCalendarAlt className="mr-2" />, mobileIcon: <FaCalendarAlt className="mr-3" /> },
    { id: 'reports', label: 'Reports', desktopIcon: <FaChartLine className="mr-2" />, mobileIcon: <FaChartLine className="mr-3" /> }
  ];

  return (
    <nav className="bg-black text-white font-atkinson-hyperlegible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <motion.span 
              className="text-yellow-400 text-xl font-bold tracking-wider font-bomber-escort"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ATTENDANCE
            </motion.span>
          </div>

          {/* Center navigation */}
          <div className="hidden md:flex flex-grow justify-center">
            <motion.div 
              className="flex items-center space-x-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navItems.map(item => (
                <div key={item.id} className="relative">
                  <motion.a 
                    href="#" 
                    className={`text-white hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                    variants={navItemVariants}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.desktopIcon} {item.label}
                  </motion.a>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                      scaleX: activeTab === item.id ? 1 : 0,
                      opacity: activeTab === item.id ? 1 : 0
                    }}
                    whileHover={{ 
                      scaleX: 1, 
                      opacity: 1,
                      transition: { duration: 0.3 }
                    }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Logout - Right */}
          <div className="hidden md:flex ml-auto">
            <motion.a 
              href="#" 
              className="text-white hover:text-yellow-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaSignOutAlt className="mr-2" /> Log Out
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <motion.button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-yellow-400 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <motion.svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  aria-hidden="true"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className="md:hidden overflow-hidden" 
        id="mobile-menu"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="px-4 pt-2 pb-3 space-y-2 bg-gray-900 rounded-b-lg shadow-lg">
          {navItems.map(item => (
            <div key={item.id} className="relative">
              <motion.a 
                href="#" 
                className={`text-white hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium flex items-center border-b border-gray-800`}
                variants={mobileItemVariants}
                onClick={() => setActiveTab(item.id)}
              >
                <span className={activeTab === item.id ? 'text-yellow-400' : ''}>
                  {item.mobileIcon}
                </span> {item.label}
              </motion.a>
              {activeTab === item.id && (
                <motion.div 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              )}
            </div>
          ))}
          <motion.a 
            href="#" 
            className="text-white hover:text-yellow-400 block px-3 py-3 rounded-md text-base font-medium flex items-center"
            variants={mobileItemVariants}
          >
            <FaSignOutAlt className="mr-3 text-yellow-400" /> Log Out
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;