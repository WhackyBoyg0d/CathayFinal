import Navbar from "./Navbar";


const HomePage = () => {
    
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
        <p className="text-lg mb-6">Your journey to better connections starts here.</p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
            <p className="text-gray-600">Get started quickly with our intuitive onboarding process.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Personalized Matches</h3>
            <p className="text-gray-600">Find connections based on shared interests and location.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
            <p className="text-gray-600">Stay connected with real-time notifications and messages.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-lg mb-6">Join our community and make meaningful connections today.</p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100">
          Sign Up Now
        </button>
      </section>
      <Navbar/>
    </div>
  );
};

export default HomePage;
