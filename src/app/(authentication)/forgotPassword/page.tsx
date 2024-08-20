'use client';

import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

type FormData = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    email: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Forgot password request submitted:', formData);
    axios.post('http://localhost:3000/api/forgotPassword', formData).then((res) => {
      
    }).catch((error) => {
      setErrorMessage(error.response?.data.message);
    });
  };

    const handleResendLink = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      axios
        .post(`http://localhost:3000/api/resendResetLink`, formData)
        .then((res) => {
          if (res.status === 200) {
            router.push("/login");
          }
        })
        .catch((error) => {
          setErrorMessage(error.response?.data.message);
        });
    };

  return (
    <div className="flex flex-col justify-center">
      <div className="mt-32 flex items-center mx-auto bg-white shadow-2xl w-1/3 h-3/5">
        <div className=" mt-16 flex flex-col justify-center font-bold text-4xl">
          <h1 className=" flex justify-center mb-8 mx-auto">Forgot Password</h1>
          <div className="mt-8 mx-16">
            <form onSubmit={handleSubmit}>
              <label className="text-xl "> Enter your email</label>
              <input
                className="mt-6 border border-black py-2 px-2 text-xl w-full rounded-3xl"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
              <div>
                <button
                  className="bg-[rgba(30,75,0,1)] text-white flex justify-center mx-auto mt-20 mb-24 rounded-3xl text-xl px-3 py-1"
                  type="submit"
                >
                  Reset password
                </button>

                <button className=" border-2 border-[rgba(30,75,0,1)] text-white flex justify-center mx-auto mt-20 mb-24 rounded-3xl text-xl px-3 py-1">
                  Resend Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;