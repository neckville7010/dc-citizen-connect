
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Departments = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow px-4 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-dc-blue mb-4">
            City Departments
          </h1>
          <p className="text-lg text-dc-navy mb-8">
            Information about Washington, DC government departments and agencies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-dc-navy mb-2">{dept.name}</h3>
                <p className="text-dc-gray mb-4">{dept.description}</p>
                <div className="mt-auto pt-2">
                  <a href="#" className="text-dc-link hover:underline text-sm font-medium">
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-dc-gray">
            This is a demo page. In a production environment, this would list actual DC government departments.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Sample departments data for the demo
const departments = [
  {
    id: 1,
    name: "Department of Motor Vehicles (DMV)",
    description: "Provides driver licensing, vehicle registration, and related services."
  },
  {
    id: 2,
    name: "Department of Public Works (DPW)",
    description: "Manages trash collection, parking enforcement, and snow removal."
  },
  {
    id: 3,
    name: "Department of Transportation (DDOT)",
    description: "Maintains roads, sidewalks, bridges, and manages traffic operations."
  },
  {
    id: 4,
    name: "Metropolitan Police Department (MPD)",
    description: "Provides law enforcement services to protect and serve DC residents."
  },
  {
    id: 5,
    name: "DC Health",
    description: "Promotes health, wellness, and equity across the District."
  },
  {
    id: 6,
    name: "Department of Housing and Community Development (DHCD)",
    description: "Creates and preserves affordable housing opportunities."
  }
];

export default Departments;
