
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const News = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow px-4 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-dc-blue mb-4">
            City News & Announcements
          </h1>
          <p className="text-lg text-dc-navy mb-8">
            Stay informed about the latest updates from Washington, DC government.
          </p>
          
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="md:flex">
                  {item.image && (
                    <div className="md:flex-shrink-0">
                      <img 
                        className="h-48 w-full object-cover md:h-full md:w-48" 
                        src={item.image} 
                        alt={item.title}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-dc-blue">
                        {item.category}
                      </span>
                      <time className="text-sm text-dc-gray ml-3">{item.date}</time>
                    </div>
                    <h2 className="mt-2 text-xl font-semibold text-dc-navy">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-dc-gray">
                      {item.summary}
                    </p>
                    <div className="mt-4">
                      <a href="#" className="text-dc-link hover:underline text-sm font-medium">
                        Read full story
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-dc-navy hover:bg-gray-50">
              Load more news
            </button>
          </div>
          
          <p className="mt-8 text-center text-dc-gray">
            This is a demo page. In a production environment, this would display actual DC government news.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Sample news data for the demo
const newsItems = [
  {
    id: 1,
    title: "Mayor Announces New Initiative to Improve City Parks",
    summary: "Washington, DC is launching a multi-million dollar initiative to renovate and improve parks across all eight wards, with a focus on underserved communities.",
    date: "April 12, 2025",
    category: "Parks & Recreation",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552"
  },
  {
    id: 2,
    title: "DC Expands Affordable Housing Program",
    summary: "The Department of Housing and Community Development announced an expansion of the affordable housing program, adding 500 new units across the city.",
    date: "April 10, 2025",
    category: "Housing",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 3,
    title: "City Launches New Online Permit Application System",
    summary: "The Department of Consumer and Regulatory Affairs has launched a new online system to streamline the permit application process for residents and businesses.",
    date: "April 5, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be"
  },
  {
    id: 4,
    title: "Upcoming Road Closures for Annual Marathon",
    summary: "Several major streets will be closed this weekend for the annual DC Marathon. Check the schedule and plan your travel accordingly.",
    date: "March 30, 2025",
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
  }
];

export default News;
