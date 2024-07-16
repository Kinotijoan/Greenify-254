// import React from 'react';
// import Image from 'next/image';

// const Aboutus: React.FC = () => {
//   return (
//     <div className="bg-gray-100 py-5">
//       <div className="container mx-auto">
//         <h1 className="text-center text-5xl font-bold mb-8 text-purple-600">About Us</h1>
//         <div className="flex items-center justify-center">
//           <Image
//             src="/images/Group 13(2).jpg"
//             alt="About Us Image"
//             width={1000}
//             height={600}
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Aboutus;
import React from 'react';
import Image from 'next/image';

const Aboutus: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pb-32">
        <h1 className="text-center text-5xl font-bold mb-8 text-purple-600">About Us</h1>
        <div className="flex items-center justify-center">
          <Image
            src="/images/p6aboutus(1).jpg"
            alt="About Us Image"
            width={5000}
            height={100}
            className="mb-0" // Remove bottom margin
          />
        </div>
        <div className="container mx-auto flex justify-between space-x-8">
          <div className="flex items-start justify-start">
            <Image
              src="/images/topaboutus.png"
              alt="About Us Image"
              width={4000}
              height={1000}
              className="mt-0" // Remove top margin
            />
          </div>
          <p className="text-center text-2xl font-bold text-green-900 mt-60 hover:font-extrabold transition-all duration-300">
            Our innovative web application directly assigns responsibility to the people, waste collectors and Waste producers, aligning with SDG 11 and with the goals of the NEMA Sustainable Waste Management Act of 2022, to connect the people to the recyclers that give waste a second chance at life. Therefore, collectively make a significant difference in protecting our environment and ensuring a healthier future for generations to come.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/p6aboutus(1).jpg"
            alt="About Us Image"
            width={5000}
            height={100}
            className="mt-0 mb-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;