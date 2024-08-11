import React from 'react'
import CompaniesList from './CompaniesList'
import { validateRequest } from '@/lib/lucia'
import { redirect } from 'next/navigation';


const page = () => {
  const user =  validateRequest();
  if (!user) {
    return redirect('/login');
  }

  return (
    <div>
      {/* <SearchForm /> */}
      <CompaniesList />
    </div>
  )
}

export default page
