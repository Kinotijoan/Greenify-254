// pages/index.js


const page = () => {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 h-screen">
      {/* Educational Resources Section - Larger Area */}
      <div className="col-span-12 lg:col-span-7 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Educational Resources</h2>
        {/* Content for educational resources goes here */}
        <p>Explore our vast range of educational resources to help you get started.</p>
      </div>

      {/* Upcoming Events Section */}
      <div className="col-span-12 lg:col-span-5 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
        {/* Content for upcoming events goes here */}
        <p>Stay updated with our latest events.</p>
      </div>

      {/* Products Section */}
      <div className="col-span-12 lg:col-span-5 bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        {/* Content for products goes here */}
        <p>Check out our range of products designed to enhance your experience.</p>
      </div>
    </div>
  )
}

export default page



