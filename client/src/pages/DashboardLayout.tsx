import { Outlet } from "react-router-dom";
import Wrapper from '../assets/wrappers/Dashboard'
import { SmallSidebar, BigSidebar, Navbar } from "../components";
import { useState, useContext, createContext } from "react";
import { checkDefaultTheme } from "../App";

interface DashboardContextType {
  user: {name: string};
  showSidebar: boolean;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  toggleSidebar: () => void;
  logoutUser: () => void;
}


const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const DashboardLayout = () => {
  // temp
  const user = {name: 'john'};
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', String(newDarkTheme));
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider value={{
      user, 
      showSidebar, 
      isDarkTheme, 
      toggleDarkTheme, 
      toggleSidebar, 
      logoutUser,
      }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;