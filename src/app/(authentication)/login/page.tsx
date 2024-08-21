'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type FormData = {
  email: string;
  password: string;
};

const LogInPage: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/login", formData).then((res) => {
      if (res.status === 200) {
        router.push("/wasteless_app/education");
      }
    }).catch((error) => {
      setError(error.response?.data.message);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg py-8 mb-16 w-full max-w-2xl h-full mt-16">
        <h1 className="text-4xl font-bold text-[rgba(30,75,0,1)] mb-16 text-center">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="px-8">
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
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
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
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
          {error && (
            <div className="z-40">
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </div>
          )}
          <Link
            href="/forgotPassword"
            className="text-blue-600 mb-2 flex justify-center"
          >
            Forgot password?
          </Link>{" "}
          <div className="flex justify-center font-bold">
            <span className="mr-2"> New to Greenify254? </span>
            <Link href="/signup" className="text-blue-600">
              Sign up
            </Link>
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