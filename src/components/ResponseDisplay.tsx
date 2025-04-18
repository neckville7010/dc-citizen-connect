
import React from "react";

interface Citation {
  title: string;
  url: string;
  type: 'regulation' | 'news' | 'department';
}

interface ResponseDisplayProps {
  loading: boolean;
  query: string;
  response: string | null;
  citations: Citation[];
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  loading,
  query,
  response,
  citations
}) => {
  if (!query && !loading && !response) {
    return null;
  }

  return (
    <div className="mt-10 w-full max-w-3xl mx-auto bg-white rounded-md border border-gray-200 shadow-sm animate-fade-in">
      {loading ? (
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-dc-blue/10 flex items-center justify-center">
              <span className="font-semibold text-dc-blue">AI</span>
            </div>
            <div>
              <h3 className="font-semibold text-dc-navy">DC Citizen Connect</h3>
              <p className="text-sm text-dc-gray">Searching for information...</p>
            </div>
          </div>
          <div className="mt-4 pl-12 flex">
            <div className="h-2 w-2 rounded-full bg-dc-gray mx-0.5 animate-thinking-dot-1"></div>
            <div className="h-2 w-2 rounded-full bg-dc-gray mx-0.5 animate-thinking-dot-2"></div>
            <div className="h-2 w-2 rounded-full bg-dc-gray mx-0.5 animate-thinking-dot-3"></div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-dc-blue/10 flex items-center justify-center">
              <span className="font-semibold text-dc-blue">AI</span>
            </div>
            <div>
              <h3 className="font-semibold text-dc-navy">DC Citizen Connect</h3>
              <p className="text-sm text-dc-gray">Answered your question</p>
            </div>
          </div>
          
          <div className="mt-4 pl-12">
            <p className="text-dc-navy whitespace-pre-line">{response}</p>
            
            {citations.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-dc-gray mb-2">Sources:</h4>
                <ul className="space-y-2">
                  {citations.map((citation, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2">
                        {citation.type === 'regulation' && '📜'}
                        {citation.type === 'news' && '📰'}
                        {citation.type === 'department' && '🏛️'}
                      </span>
                      <a 
                        href={citation.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dc-link hover:underline text-sm"
                      >
                        {citation.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;
