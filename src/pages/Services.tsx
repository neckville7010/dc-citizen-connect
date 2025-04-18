
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow px-4 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-dc-blue mb-4">
            City Services
          </h1>
          <p className="text-lg text-dc-navy mb-8">
            Essential services provided by the Washington, DC government.
          </p>
          
          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="font-bold text-xl text-dc-navy mb-4">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service) => (
                    <div key={service.id} className="p-4 border border-gray-100 rounded-md hover:bg-gray-50 transition-colors">
                      <h3 className="font-medium text-dc-blue">{service.name}</h3>
                      <p className="text-sm text-dc-gray mt-1">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-dc-gray">
            This is a demo page. In a production environment, this would connect to actual DC government services.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Sample services data for the demo
const serviceCategories = [
  {
    id: 1,
    name: "Permits and Licenses",
    services: [
      {
        id: 101,
        name: "Business License",
        description: "Apply for or renew a business license"
      },
      {
        id: 102,
        name: "Building Permit",
        description: "Permits for construction or renovation"
      },
      {
        id: 103,
        name: "Event Permit",
        description: "Permits for public events and gatherings"
      }
    ]
  },
  {
    id: 2,
    name: "Transportation",
    services: [
      {
        id: 201,
        name: "Parking Permits",
        description: "Residential and visitor parking permits"
      },
      {
        id: 202,
        name: "Vehicle Registration",
        description: "Register or renew vehicle registration"
      },
      {
        id: 203,
        name: "Driver's License",
        description: "Apply for or renew driver's license"
      }
    ]
  },
  {
    id: 3,
    name: "Public Safety",
    services: [
      {
        id: 301,
        name: "Police Report",
        description: "File or request a police report"
      },
      {
        id: 302,
        name: "Emergency Preparedness",
        description: "Resources for emergency planning"
      },
      {
        id: 303,
        name: "Fire Inspection",
        description: "Schedule fire safety inspection"
      }
    ]
  }
];

export default Services;
