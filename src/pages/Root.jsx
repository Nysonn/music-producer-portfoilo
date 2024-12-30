import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import SocialMedia from '../components/SocialMedia'; // Import SocialMedia component

function RootLayout() {
  return (
    <>
      <NavigationBar />
      <main>
        {/* Render the main page content */}
        <Outlet />
      </main>
      {/* Add the SocialMedia component */}
      <SocialMedia />
    </>
  );
}

export default RootLayout;
