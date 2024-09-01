import React from 'react';
import { Mail, MapPin } from 'lucide-react'; // Assuming you use lucide-react for icons
import Image from 'next/image';

interface CompanyAccountCardProps {
  name: string;
  bio: any;
  location: string;
  profileImageUrl: any;
  phoneNumber: any;
  createdAt: any;
  updatedAt: any;
}

const CompanyAccountCard: React.FC<CompanyAccountCardProps> = ({
  name,
  profileImageUrl,
  phoneNumber,
  bio,
  location,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="bg-white flex h-20 shadow-lg rounded-lg overflow-hidden">
        <div>
          <Image src={profileImageUrl} alt="profile image" width={100} height={100} />
        </div>
      <div className="px-6 py-4">
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default CompanyAccountCard;
