'use client';

import { useRouter } from 'next/navigation';

const SignInPage: React.FC = () => {
  const router = useRouter();

  const handleSignInAsUser = () => {
    router.push('/sign-up-user');
  };

  const handleSignInAsRecyclingCompany = () => {
    router.push('/sign-up-recycling-company');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg py-8 mb-12 w-full max-w-2xl h-3/4">
        <div className="text-center">
          <p className="text-5xl font-extrabold text-[rgba(30,75,0,1)] mt-4 mb-36">
            Welcome to Wasteless
          </p>
          <h1 className="text-4xl font-bold text-[rgba(30,75,0,1)] mb-24">Sign in as</h1>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="bg-[rgba(30,75,0,1)] hover:bg-green-900 text-white font-bold py-3 px-20 rounded-full mb-12"
            onClick={handleSignInAsUser}
          >
            User
          </button>
          <button
            className="bg-[rgba(30,75,0,1)] hover:bg-green-900 text-white font-bold py-3 px-5 rounded-full"
            onClick={handleSignInAsRecyclingCompany}
          >
            Recycling Company
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;