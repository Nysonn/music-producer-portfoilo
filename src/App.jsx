import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PortfolioPage from './pages/Portfolio';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RootLayout>
        <NavigationBar />
      </RootLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

// App Component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
