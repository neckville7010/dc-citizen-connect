
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import ExampleQuestions from "../components/ExampleQuestions";
import ResponseDisplay from "../components/ResponseDisplay";
import { exampleQuestions, searchQuery, Citation } from "../services/ragService";
import { Info } from "lucide-react";

const Index = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [citations, setCitations] = useState<Citation[]>([]);

  const handleSearch = async (query: string) => {
    setQuery(query);
    setLoading(true);
    setResponse(null);
    setCitations([]);
    
    try {
      // Simulate a search request to the backend
      const result = await searchQuery(query);
      setResponse(result.answer);
      setCitations(result.citations);
    } catch (error) {
      console.error("Error searching:", error);
      setResponse("Sorry, there was an error processing your request. Please try again.");
      setCitations([]);
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (question: string) => {
    handleSearch(question);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow px-4 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-dc-blue mb-4">
              DC Citizen Connect
            </h1>
            <p className="text-lg text-dc-navy max-w-2xl mx-auto">
              Get instant answers about Washington, DC regulations, services, and city information.
            </p>
          </div>
          
          {/* Search Section */}
          <div className="mb-8">
            <SearchBox onSearch={handleSearch} />
            <div className="max-w-3xl mx-auto">
              <ExampleQuestions 
                questions={exampleQuestions} 
                onQuestionClick={handleExampleClick} 
              />
            </div>
          </div>
          
          {/* Response Section */}
          <ResponseDisplay 
            loading={loading} 
            query={query} 
            response={response}
            citations={citations}
          />
          
          {/* Info Banner */}
          {!query && !loading && !response && (
            <div className="mt-16 max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start">
              <div className="text-dc-blue mr-3 flex-shrink-0 mt-1">
                <Info size={20} />
              </div>
              <div>
                <h3 className="font-medium text-dc-blue">About This Service</h3>
                <p className="text-sm text-dc-navy mt-1">
                  This is a demo of the DC Citizen Connect AI assistant. Ask questions about Washington, DC
                  city services, regulations, or general information. The assistant uses retrieval-augmented
                  generation (RAG) to provide accurate answers from official DC government sources.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
