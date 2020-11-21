import React, { createContext, useState } from 'react';

interface IDashboardContext {
  drawerOpen: boolean;
  setDrawerOpen(drawerOpen: boolean): void;
}

const DashboardContext = createContext<IDashboardContext>({
  drawerOpen: true,
  setDrawerOpen: (drawer) => drawer,
});

const DashboardProvider: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  return (
    <DashboardContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardProvider, DashboardContext };
