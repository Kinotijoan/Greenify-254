'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  email: string;
  password: string;
};

const LogInPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <div className="bg-white shadow-2xl rounded-lg py-8 mb-16 w-full max-w-2xl h-full mt-16">
        
        <h1 className="text-4xl font-bold text-[rgba(30,75,0,1)] mb-16 text-center">Log In</h1>
        <form onSubmit={handleSubmit} className="px-8">

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className=" border border-black rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className=" border border-black rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='flex justify-center font-bold mb-3'>Forgot your password ?</div>
          <div className='flex justify-center font-bold'>
            <span className='mr-2'> Already have an account </span>
           <span className='text-pink-500'> Log in ?</span>
            </div>
          <div className="flex justify-center mt-20">
            <button
              className="bg-[rgba(30,75,0,1)] hover:bg-green-800 text-white font-bold py-2 px-12 rounded-full "
              type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;