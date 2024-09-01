"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import React, { useState,ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter();
  const { verificationCode } = useParams();
  console.log(verificationCode); // This will log the value from the URL.

  const [formData, setFormData] = useState({
  
    password: "",
    confirmPassword: "",
  });


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  

  const validateForm = () => {
    const newErrors: string[] = [];
    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }
    if (formData.password.length < 8) {
      newErrors.push("Password must be at least 8 characters long.");
    }
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log("Validation failed");
      
      return;
    }
  
    console.log("Forgot password request submitted:", formData);
    axios
      .post(`http://localhost:3000/api/resetPassword/${verificationCode}`, formData)
      .then((res) => {
        if(res.status === 200){
          router.push("/login");
        }
      }).catch((error) => {
        console.error("Error:", error);
        setErrorMessage(error.response?.data.message);
      });
  };


  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="mt-32 flex items-center mx-8 lg:mx-auto bg-white shadow-2xl lg:w-1/3 lg:h-3/5">
          <div className=" mt-16 flex flex-col justify-center font-bold  text-3xl lg:text-4xl">
            <h1 className=" flex justify-center mb-4 mx-auto text-greenbg">
              Forgot Password
            </h1>
            <div className="mt-8 mx-14">
              <form onSubmit={handleSubmit}>
                {errors && <div>{errors}</div>}
                {errors.length > 0 && (
                  <div className="lg:mb-6">
                    {errors.map((error, index) => (
                      <div key={index} className="text-red-400">
                        {error}
                      </div>
                    ))}
                  </div>
                )}
                <label className="text-xs lg:text-xl "> New Password</label>
                <input
                  className="lg:mt-6 mb-4 border border-black lg:py-2 lg:px-2 text-xl w-full rounded-3xl"
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <label className=" text-xs lg:text-xl  ">Confirm Password</label>
                <input
                  className="lg:mt-6 border border-black lg:py-2 lg:px-2 text-xl w-full rounded-3xl"
                  type="text"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <button
                    className="bg-greenbg text-white flex justify-center mx-auto mt-14 lg:mt-20 mb-24 rounded-3xl text-xl px-3 py-1"
                    type="submit"
                  >
                    Reset password
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
