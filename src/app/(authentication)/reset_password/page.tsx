'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Forgot password request submitted:', formData);
    // You can add your logic here
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-1/2 bg-white shadow-2xl flex flex-col items-center h-3/5">
        <h1 className="text-4xl font-extrabold mb-8">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <label className="text-xl font-semibold">Enter your email</label>
          <input
            className="mt-6 border border-black py-2 px-2 text-xl w-full rounded-3xl"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="flex justify-center mt-8">
            <button
              className="bg-[rgba(30,75,0,1)] text-white px-10 py-1 text-xl rounded-3xl"
              type="submit"
            >
              Recover password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;