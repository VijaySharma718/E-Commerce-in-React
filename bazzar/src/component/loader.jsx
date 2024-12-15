import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 bg-slate-900"></div>
    </div>
  );
};

export default Loading;