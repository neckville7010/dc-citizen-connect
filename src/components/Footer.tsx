
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto py-6 px-4 border-t border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-4 md:mb-0">
          <p className="text-dc-gray">
            &copy; {new Date().getFullYear()} DC Citizen Connect. Demo Application.
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-dc-gray mr-1">Powered by</span>
          <a 
            href="https://weaviate.io/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-dc-blue hover:underline flex items-center"
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path 
                d="M12 3L3 8.6V15.4L12 21L21 15.4V8.6L12 3Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Weaviate
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
