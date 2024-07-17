import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cover bg-no-repeat bg-center sticky bottom-0 w-full" style={{ backgroundImage: `url('/images/Rectangle.jpg')` }}>
      <div className="bg-opacity-75 text-white h-full flex flex-col justify-between">
        <div className="container mx-auto flex justify-between mt-8">
          <div>
            <p className="text-2xl font-bold mb-2">WASTELESS</p>
            <h1>Links</h1>
            <h1>Home</h1>
            <h1>Feature</h1>
            <h1>About us</h1>
            <h1>How it works</h1>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">Reach out to us</h1>
            <div className="hover:scale-125 transition-transform duration-300 flex items-center mb-4">
              <Image
                src="/icons/github(1).png"
                alt="GitHub Link"
                width={25}
                height={25}
                className='mr-2'
              />
              <a href="https://github.com/Kinotijoan/wasteless" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="hover:scale-125 transition-transform duration-300 flex items-center mb-4">
              <Image
                src="/icons/phone.png"
                alt="Phone Number"
                width={25}
                height={25}
                className='mr-2'
              />
              <span>0712345678</span>
            </div>
            <div className="hover:scale-125 transition-transform duration-300 flex items-center">
              <Image
                src="/icons/mail.png"
                alt="Email Address"
                width={25}
                height={25}
                className='mr-2'
              />
              <a href="mailto:wasteless2024@gmail.com">wasteless2024@gmail.com</a>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-4">Send us a message</h1>
            <input type="text" placeholder="Your Name" className="bg-transparent border-b border-white text-white mb-4 w-full focus:outline-none" />
            <textarea placeholder="Your Message" className="bg-transparent border-b border-white text-white h-20 w-full focus:outline-none"></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center py-16">
          <div className="flex items-center border-t border-white px-56 py-2">
            <p className="mr-1">Copyright</p>
            <Image
              src="/icons/copyright.png"
              alt="Copyright Icon"
              width={20}
              height={20}
              className='mr-1'
            />
            <p>2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;