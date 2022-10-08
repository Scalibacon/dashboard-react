import { Box } from '@chakra-ui/react'
import styles from '../styles/DashboardPage.module.scss';
import DashHeader from './DashHeader';

const DashboardPage = () => {
  return (
    <Box className={styles.dashboardPage}>
      <DashHeader/>
    </Box>
  )
}

export default DashboardPage;