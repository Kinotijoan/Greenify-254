
'use client';

import { useState, FormEvent } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function EmailVerificationPage() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setOtp(e.currentTarget.value);
  };

  const handleVerify = async () => {
    try {
      const email = searchParams.get('email');
      if (!email) {
        setError('Email not provided');
        return;
      }

    
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        
        window.location.href = '/email-verification/success';
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleResendEmail = async () => {
    try {
      setIsSendingEmail(true);
      const email = searchParams.get('email');
      if (!email) {
        setError('Email not provided');
        return;
      }

      
      const response = await fetch('/api/send-email-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setError('Email sent. Please check your inbox.');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg py-8 mb-16 w-full max-w-2xl h-full mt-16">
        <h1 className="text-4xl font-bold text-[rgba(30,75,0,1)] mb-24 text-center">
          Email Verification
        </h1>
        <div className="px-8">
          <p className="mb-10">Please enter the OTP sent to your email:</p>
          <input
            className=" border border-black rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight mb-6"
            type="text"
            value={otp}
            onChange={handleInputChange}
          />
          {error && <div className="text-red-500 mb-6">{error}</div>}
          <div className="flex justify-center">
            <button
              className="bg-[rgba(30,75,0,1)] hover:bg-green-800 text-white font-bold py-2 px-12 rounded-full mr-4"
              onClick={handleVerify}
            >
              Verify
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-12 rounded-full"
              onClick={handleResendEmail}
              disabled={isSendingEmail}
            >
              {isSendingEmail ? 'Sending...' : 'Resend Email'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}