
import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  companyName: string;
  location: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpRecyclingCompanyPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    location: '',
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
    
    <div className="flex flex-col items-center p-8 mx-auto bg-white shadow-2xl w-1/2 h-full mt-16 mb-16">

      <h1 className="mt-6 mb-6 text-5xl text-[rgba(30,75,0,1)] font-extrabold ">Sign Up</h1>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>

        <div className="flex flex-col mt-16">

          <label className="font-bold" htmlFor="companyName">Company Name:</label>
          <input
            className="p-2 border border-black rounded-3xl"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="location">Location:</label>
          <input
            className="p-2 border border-black rounded-3xl"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="email">Email:</label>
          <input
            className="p-2 border border-black rounded-3xl"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="password">Password:</label>
          <input
            className="p-2 border border-black rounded-3xl"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-bold" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            className="p-2 border border-black rounded-3xl"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <div className='flex justify-center mt-8 '>
            <span className='mr-2'>Already have an account</span>
            <span className='text-pink-500'>Log in?</span>
          </div>
        </div>
        <button
          className="py-3 px-4 w-32 mx-auto mt-10 mb-10 bg-[rgba(30,75,0,1)] text-white font-bold rounded-3xl hover:bg-green-800"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpRecyclingCompanyPage;