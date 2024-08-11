"use client";

import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import { WasteFacility } from '@prisma/client';
import SearchForm from './SearchForm';
import { useSearchParams } from 'next/navigation';
import FilterBar from './FilterBar';
import { Divide } from 'lucide-react';

const CompaniesList: React.FC = () => {
  const [companies, setCompanies] = useState<WasteFacility[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<WasteFacility[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [wasteType, setWasteType] = useState<string | null>(null);
  const [facilityType, setFacilityType] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    // fetching all the companies from the database
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          `/api/companies?searchQuery=${query}&page=${page}&wasteType=${wasteType}&facilityType=${facilityType}`
        );
        const data = await response.json();
        setCompanies(data);
        filterCompanies([...data], query, wasteType, facilityType);
      } catch (error) {
        console.error('Error fetching companies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [query, page, wasteType, facilityType]);

  const filterCompanies = (
    data: WasteFacility[],
    query: string,
    wasteType: string | null,
    facilityType: string | null
  ) => {
    const filtered = data.filter(
      (company) =>
        (wasteType === null || company.wasteType.toLowerCase().includes(wasteType.toLowerCase())) &&
        (facilityType === null || company.facilityType.toLowerCase().includes(facilityType.toLowerCase())) &&
        (company.name.toLowerCase().includes(query.toLowerCase()) ||
          company.email.toLowerCase().includes(query.toLowerCase()) ||
          company.district.toLowerCase().includes(query.toLowerCase()) ||
          company.county.toLowerCase().includes(query.toLowerCase()) ||
          company.location.toLowerCase().includes(query.toLowerCase()) ||
          company.address.toLowerCase().includes(query.toLowerCase()) ||
          company.wasteType.toLowerCase().includes(query.toLowerCase()) ||
          company.facilityType.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredCompanies(filtered);
  };

  // const handleLoadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  const handleWasteTypeFilter = (type: string | null) => {
    setWasteType(type);
    // setPage(1);
  };

  const handleFacilityTypeFilter = (type: string | null) => {
    setFacilityType(type);
    // setPage(1);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
  </div>;
  }






  return (
    <div className="max-h-screen  ">
      <SearchForm />
      <FilterBar
        wasteType={wasteType}
        facilityType={facilityType}
        onWasteTypeFilter={handleWasteTypeFilter}
        onFacilityTypeFilter={handleFacilityTypeFilter}
      />
      <h1 className="text-3xl font-bold mb-6 text-center">Company Showcase</h1>
      <div className="flex-grow overflow-auto h-full md:px-10 ">
        {(filteredCompanies.length === 0)? 
        <div>
          no companies
        </div>:
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 overflow-hidden">
          {filteredCompanies.map((company: WasteFacility) => (
            <CompanyCard key={company.wasteFacilityId} {...company} />
          ))}
        </div>
        }
        <div className="flex justify-center mt-6">
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoadMore}
          >
            Load More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;

