'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpUserPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
        <h1 className="text-4xl font-bold text-[rgba(30,75,0,1)] mb-16 text-center">User Sign Up</h1>
        <form onSubmit={handleSubmit} className="px-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
              First Name:
            </label>
            <input
              className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className=" border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className=" border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
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
              className=" border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className=" border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight "
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='flex justify-center mt-8 mb-8'>
            <span className='mr-2'>Already have an account  </span>
            <span className='text-pink-500'>Log in?</span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-[rgba(30,75,0,1)] hover:bg-green-800 text-white font-bold py-2 px-12 rounded-full "
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpUserPage;