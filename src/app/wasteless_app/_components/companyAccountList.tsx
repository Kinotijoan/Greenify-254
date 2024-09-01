"use client";

import React, { useEffect, useState } from "react";
import { CompanyAccount } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import CompanyAccountCard from "./companyAccountCard";

const CompanyAccountList: React.FC = () => {
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

    

    
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
            </div>
        );
    }

    return (
        <div className="max-h-full overflow-auto ">
            <div className="flex-grow overflow-auto h-full  ">
                
                    <div className="flex flex-col gap-2 p-3 overflow-hidden">
                        {companies.map((company: CompanyAccount) => (
                            <CompanyAccountCard key={company.companyAccountId} {...company} />
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default CompanyAccountList;
