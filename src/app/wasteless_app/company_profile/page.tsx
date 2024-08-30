'use client';

import React from 'react';

const CompanyProfilePage: React.FC = () => {
  const company = {
    name: 'Company Name',
    profilePicture: '/images/pfp.png', 
    description: 'A brief description of the company(company bio)',
    posts: [], // Empty for now
  };

  return (
    <div className="flex flex-col items-center justify-start  h-screen p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl p-6  shadow-md">
        <div className="flex items-center mb-6">
          {company.profilePicture && (
            <img
              src={company.profilePicture}
              alt={`${company.name} Profile`}
              className="rounded-full w-56 h-56 object-cover mr-20" 
            />
          )}
          <div>
            <h1 className="text-5xl font-bold text-[rgba(30,75,0,1)]">{company.name}</h1>
            <p className="text-gray-600 text-xl ">{company.description}</p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 mt-12">Posts</h2>
        
        {company.posts.length > 0 ? (
          <div className="space-y-4">
            {company.posts.map((post, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-gray-700">{post.content}</p>
                <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyProfilePage;