import React from 'react';
import { Mail, MapPin } from 'lucide-react'; // Assuming you use lucide-react for icons

interface CompanyCardProps {
  name: string;
  email: string;
  district: string;
  county: string;
  longitude: string;
  latitude: string;
  location: string;
  address: string;
  wasteType: string;
  facilityType: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  email,
  district,
  county,
  longitude,
  latitude,
  location,
  address,
  wasteType,
  facilityType,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-700 mb-2 flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          {email}
        </p>
        <p className="text-gray-700 mb-2 flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          {location}
        </p>
        <p className="text-gray-700 mb-2"><strong>County:</strong> {county}</p>
        <p className="text-gray-700 mb-2"><strong>District:</strong> {district}</p>
        <p className="text-gray-700 mb-2"><strong>Address:</strong> {address}</p>
        <p className="text-gray-700 mb-2"><strong>Coordinates:</strong> {latitude}, {longitude}</p>
        <div className="flex justify-between">
          <p className="text-gray-700 mb-2"><strong>Waste Type:</strong> {wasteType}</p>
          <p className="text-gray-700 mb-2"><strong>Facility Type:</strong> {facilityType}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
