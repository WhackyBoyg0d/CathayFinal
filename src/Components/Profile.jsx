import Navbar from "./Navbar"

const Profile = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-4">
      {/* Profile Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Aggarwal Aditya</h1>
          <p className="text-green-600 mt-2">Green 1767085362</p>
          <button className="mt-2 text-blue-500 hover:underline">Edit profile &rarr;</button>
        </div>

        {/* Asia Miles and Status Points */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Asia Miles</p>
            <button className="text-blue-500 text-sm">More details &rarr;</button>
          </div>
          <p className="text-3xl font-semibold text-gray-800 mt-2">3,952</p>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-500">Status Points</p>
            <button className="text-blue-500 text-sm">More details &rarr;</button>
          </div>
          <p className="text-3xl font-semibold text-gray-800 mt-2">16</p>
          <p className="text-sm text-gray-500 mt-1">284 more points for status upgrade</p>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 h-2 rounded-full mt-4">
            <div className="absolute top-0 left-0 h-2 bg-yellow-500 rounded-full" style={{ width: '20%' }}></div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-gray-800">Benefits</p>
            <button className="text-blue-500">View all &rarr;</button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Learn more about the rewards and benefits you can enjoy with your membership status.
          </p>
        </div>
      </div>
    </div>
        <Navbar/>
    </div>
  )
}

export default Profile
