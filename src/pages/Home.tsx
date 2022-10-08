import { Box } from '@chakra-ui/react'
import DashboardPage from '../components/DashboardPage';
import SideNavbar from '../components/SideNavbar';

const Home = () => {
  return (
    <Box w={'100%'} minH={'100vh'} bg={'#1b203d'} display={'flex'}>
      <SideNavbar />

      <DashboardPage/>
    </Box>
  );
}

export default Home;
