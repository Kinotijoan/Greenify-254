
'use client';

import { useState, FormEvent } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";


export default function EmailVerificationPage() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const handleVerify = async () => {
    axios.post('/api/verifyEmail', { code: otp }).then((res) => {
      if (res.data.error) {
        setError(res.data.error);
      } else {
        router.push('/login');
      }
    }).catch((err) => {
      setError(err.response?.data.message);
    });
    
  };

  const handleResendEmail = async () => {
    setIsSendingEmail(true);
    axios.post('/api/resendEmail').then((res) => {
      setIsSendingEmail(false);
      alert('Email sent');
    }).catch((err) => {
      setIsSendingEmail(false);
      setError(err.response.data.error);
    });
  }
      
 
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-2xl rounded-lg py-8 mb-16 w-full max-w-2xl h-full mt-16">
        <h1 className="text-4xl font-bold text-[rgba(30,75,0,1)] mb-24 text-center">
          Email Verification
        </h1>
        <div className="px-8">
          <p className="mb-10 text-center">Please enter the Code sent to your email:</p>
          <div className="space-y-2 flex justify-center items-center mb-20">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(otp) => setOtp(otp)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
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
              {isSendingEmail ? "Sending..." : "Resend Email"}
            </button>
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
        </div>
      </div>
    </div>
  );
}