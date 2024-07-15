import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faLinkedin, faGithub, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

// Add the necessary icons to the library
//library.add(faLinkedin, faGithub, faEnvelope);

const Footer: React.FC = () => {
  return (
    <footer className="bg-cover bg-no-repeat bg-center fixed bottom-0 w-full h-32 z-10" style={{ backgroundImage: `url('/images/footerimg.jpg')` }}>
      <div className="bg-opacity-75 text-white h-full flex items-center">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">WASTELESS</h2>
            <p className="text-white">Turning trush into tressure</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-2xl hover:text-blue-500 transition-colors duration-300" />
              </a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'github']} className="text-2xl hover:text-gray-400 transition-colors duration-300" />
              </a>
              <a href="mailto:example@email.com">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="text-2xl hover:text-red-500 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;