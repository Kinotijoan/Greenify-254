"use client";

import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { CompanyAccount } from "@prisma/client";
import { useSearchParams } from "next/navigation";

const CompaniesList: React.FC = () => {
    const [companies, setCompanies] = useState<CompanyAccount[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetching all the companies from the database
        const fetchCompanies = async () => {
            try {
                const response = await fetch(
                    `/api/companyAccounts`
                );
                const data = await response.json();
                setCompanies(data);
            } catch (error) {
                console.error("Error fetching companies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    

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
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
            </div>
        );
    }

    return (
        <div className="max-h-screen  ">
            <h1 className="text-4xl text-center font-bold pt-10">Waste management facilities</h1>
            <SearchForm />
            <FilterBar
                wasteType={wasteType}
                facilityType={facilityType}
                onWasteTypeFilter={handleWasteTypeFilter}
                onFacilityTypeFilter={handleFacilityTypeFilter}
            />
            <div className="flex-grow overflow-auto h-full md:px-10 ">
                {filteredCompanies.length === 0 ? (
                    <div>Oops, there are no {facilityType} facilities that manage {wasteType} waste</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3 overflow-hidden">
                        {filteredCompanies.map((company: CompanyAccount) => (
                            <CompanyCard key={company.CompanyAccountId} {...company} />
                        ))}
                    </div>
                )}
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
