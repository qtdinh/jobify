import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout, 
  Landing, 
  Register, 
  Login, 
  DashboardLayout, 
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from './pages';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement:<Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />
          },
          {
            path: 'stats',
            element: <Stats />,
          },
                    {
            path: 'all-jobs',
            element: <AllJobs />,
          },
                    {
            path: 'profile',
            element: <Profile />,
          },
                    {
            path: 'admin',
            element: <Admin />,
          },
          
        ]
      },
    ]
  },
  {
    path: '/about',
    element: (
      <div>
        <h1>about page</h1>
      </div>
  ),
},
]);

const App = () => {
  return <RouterProvider router={router} />;
  
}

export default App;