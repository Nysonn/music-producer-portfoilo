import { Outlet } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <NavigationBar  />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
