import React from "react";

const App = (props) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Student Card */}
      <div className="group w-80 overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Header */}
        <div className="relative h-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1170&auto=format&fit=crop"
              alt="Student"
              className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Student Information */}
        <div className="px-6 pb-6 pt-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {props.name}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Student Profile
          </p>

          <div className="mt-6 space-y-3 text-left">
            <div className="flex justify-between rounded-lg bg-gray-50 px-4 py-3">
              <span className="text-sm text-gray-500">Roll No</span>
              <span className="font-semibold">{props.rollno}</span>
            </div>

            <div className="flex justify-between rounded-lg bg-gray-50 px-4 py-3">
              <span className="text-sm text-gray-500">Degree</span>
              <span className="font-semibold text-indigo-600">
                {props.degree}
              </span>
            </div>
          </div>

          <button className="mt-6 w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;