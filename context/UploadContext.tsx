// Create a new file `UploadContext.tsx` in a suitable location
import React, { createContext, useState, useContext } from 'react';

interface UploadContextProps {
  uploading: boolean;
  setUploading: (uploading: boolean) => void;
}

const UploadContext = createContext<UploadContextProps | undefined>(undefined);

export const UploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uploading, setUploading] = useState(false);

  return (
    <UploadContext.Provider value={{ uploading, setUploading }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useUpload must be used within an UploadProvider');
  }
  return context;
};
