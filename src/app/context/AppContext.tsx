import React, { useState, ReactNode } from 'react';
import { createContext } from 'use-context-selector';

// Create a global context
export const AppContext = createContext(null);

const defaultPost = {
  title: 'My new post',
  components: [],
  sources: {}
};

interface AppProviderProps {
  children?: ReactNode;
}

/* @ts-ignore */
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // State slices for global context
  const [post, setPost] = useState(defaultPost);

  return (
    <AppContext.Provider
      /* @ts-ignore */
      value={{
        post,
        setPost
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
