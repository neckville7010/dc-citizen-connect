
import React from "react";

interface ExampleQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

const ExampleQuestions: React.FC<ExampleQuestionsProps> = ({ questions, onQuestionClick }) => {
  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-sm font-medium text-dc-gray mb-2">Try asking:</h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-full hover:bg-dc-light hover:border-dc-blue text-sm text-dc-navy transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExampleQuestions;
