"use client";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

type UserFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type CompanyFormData = {
  companyName: string;
  location: string;
  email: string;
  password: string;
  confirmPassword: string;
};


const SignUpPage: React.FC = () => {
  const [isUser, setIsUser] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg py-8 mb-16 w-full max-w-2xl h-full mt-16">
        <h1 className="text-4xl font-bold text-greenbg mb-4 text-center">
          Sign Up
        </h1>

        <div className="flex justify-around p-10">
          <button
            className={`text-2xl font-bold ${
              isUser
                ? "text-white bg-greenbg px-16 py-1 rounded-lg"
                : "text-gray-400"
            }`}
            onClick={() => setIsUser(true)}
          >
            User
          </button>
          <button
            className={`text-2xl font-bold ${
              !isUser
                ? "text-white bg-greenbg px-16 py-1 rounded-lg"
                : "text-gray-400"
            }`}
            onClick={() => setIsUser(false)}
          >
            Company
          </button>
        </div>
        {isUser ? <SignUpUserPage /> : <SignUpRecyclingCompanyPage />}
      </div>
    </div>
  );
};

const SignUpUserPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<UserFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }
    if (formData.password.length < 8) {
      newErrors.push("Password must be at least 8 characters long.");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.push("Email is not valid.");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   if (validateForm()) {
     axios
       .post("/api/signup", formData)
       .then((response) => {       
         if (response.status === 200) {
           router.push("/emailVerification");
         }
       })
       .catch((error) => {
         setErrorMessage(error.response?.data.message || "An error occurred");
       });
   }
 };


  return (
    <div>
      <form onSubmit={handleSubmit} className="px-8">
        
        {errors.length > 0 && (
          <div className="mb-6">
            {errors.map((error, index) => (
              <div key={index} className="text-red-500">
                {error}
              </div>
            ))}
          </div>
        )}
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight"
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
            className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight pr-10"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            className="absolute inset-y-12 right-0 flex items-center px-3 text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password:
          </label>
          <input
            className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight pr-10"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          <button
            type="button"
            className="absolute inset-y-12 right-0 flex items-center px-3 text-gray-700"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {errorMessage && (
          <div className="z-40">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          </div>
        )}
        <div className="flex justify-center mt-8 mb-8">
          <span className="mr-2">Already have an account</span>
          <Link href="/login" className="text-blue-600">
            Log in
          </Link>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-greenbg hover:bg-green-800 text-white font-bold py-2 px-12 rounded-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const SignUpRecyclingCompanyPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<CompanyFormData>({
    companyName: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }
    if (formData.password.length < 8) {
      newErrors.push("Password must be at least 8 characters long.");
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.push("Email is not valid.");
    }
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("/api/companyAuth/signup", formData)
        .then((response) => {
          if (response.status === 200) {
            router.push("/emailVerification");
          }
        })
        .catch((error) => {
          setErrorMessage(error.response?.data.message || "An error occurred");
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-8">
      {errors.length > 0 && (
        <div className="mb-6">
          {errors.map((error, index) => (
            <div key={index} className="text-red-500">
              {error}
            </div>
          ))}
        </div>
      )}
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="companyName"
        >
          Company Name:
        </label>
        <input
          className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="location"
        >
          Location:
        </label>
        <input
          className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight pr-10"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="absolute inset-y-12 right-0 flex items-center px-3 text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="mb-6 relative">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password:
        </label>
        <input
          className="border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight pr-10"
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="absolute inset-y-12 right-0 flex items-center px-3 text-gray-700"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      {errorMessage && (
        <div className="  z-40">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </div>
      )}
      <div className="flex justify-center mt-8 mb-8">
        <span className="mr-2">Already have an account</span>
        <Link href="/login" className="text-blue-600">
          Log in
        </Link>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-greenbg hover:bg-green-700 text-white font-bold py-2 px-12 rounded-full"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpPage;
