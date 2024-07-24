"use client"

import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import { WasteFacility } from '@prisma/client';

const CompaniesList: React.FC = () => {
  const [companies, setCompanies] = useState<WasteFacility[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-h-screen bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Company Showcase</h1>
      <div className="flex-grow overflow-auto h-full md:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 ">
          {companies.map((company) => (
            <CompanyCard key={company.wasteFacilityId} {...company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
