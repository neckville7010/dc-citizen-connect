
import React from "react";

const DCLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="flex flex-col mr-2">
          <div className="flex">
            <div className="w-4 h-1 bg-dc-red"></div>
            <div className="w-4 h-1 bg-dc-red"></div>
          </div>
          <div className="flex">
            <div className="w-4 h-1 bg-dc-red"></div>
            <div className="w-4 h-1 bg-dc-red"></div>
          </div>
          <div className="flex">
            <div className="w-4 h-1 bg-white border border-dc-red"></div>
            <div className="w-4 h-1 bg-white border border-dc-red"></div>
          </div>
        </div>
        <span className="font-bold text-dc-blue text-xl">DC</span>
        <span className="text-dc-red font-bold text-xl">.</span>
        <span className="text-dc-navy font-bold text-xl">gov</span>
      </div>
    </div>
  );
};

export default DCLogo;
