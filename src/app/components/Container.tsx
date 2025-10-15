import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}

export default Container;
