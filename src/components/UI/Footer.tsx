import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cover bg-no-repeat bg-center fixed bottom-0 w-full h-40" style={{ backgroundImage: `url('/images/footerimg.jpg')` }}>
      <div className="bg-opacity-75 text-white h-full flex items-center">
        <div className="container mx-auto flex justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">WASTELESS</h2>
            <p className="text-white mb-2">Turning trush into tressure</p>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex space-x-8">
              <div className="hover:scale-125 transition-transform duration-300">
                <Image
                  src="/icons/phone.png"
                  alt="About Us Image"
                  width={20}
                  height={20}
                />
              </div>
              <div className="hover:scale-125 transition-transform duration-300">
                <Image
                  src="/icons/link.png"
                  alt="About Us Image"
                  width={20}
                  height={20}
                />
              </div>
              <div className="hover:scale-125 transition-transform duration-300">
                <Image
                  src="/icons/github(1).png"
                  alt="About Us Image"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;