import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from './../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { authUser , logout } = useAuth();

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col">
            <h1 className="text-xl text-green-400 font-semibold">SynapseChat</h1>
            <p className="text-sm text-white">Built for connections, secured for trust.</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {!authUser  ? (
              <>
                <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  Signup
                </Link>
                <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
              </>
            ) : (
              <div className="relative flex items-center gap-6 text-white">
                <h1 className="hidden md:block">Welcome, {authUser .fullName}</h1>
                <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <User  />
                </Link>
                <button onClick={logout} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <LogOut />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <User/>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => <div className="md:hidden" id="mobile-menu" ref={ref}>
            <div className="px-4 pt-2 pb-3 space-y-1">
              {!authUser  ? (
                <>
                  <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Signup
                  </Link>
                  <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <div className='flex items-center gap-2'><User  /> Home</div>
                  </Link>
                  <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    <div className='flex items-center gap-2'><User  /> Profile</div>
                  </Link>
                  <button onClick={logout} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                    <div className='flex items-center gap-2'><LogOut /> Logout</div>
                  </button>
                </>
              )}
            </div>
          </div>
        }
      </Transition>
    </nav>
  );
};

export default Navbar;