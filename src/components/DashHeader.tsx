import { Avatar, Link, Flex, Heading, Select } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { AiFillBell } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import styles from '../styles/DashHeader.module.scss';

const countries = ['Argentina', 'Bolívia', 'Brazil', 'Chile', 'Paraguay', 'Peru', 'Venezuela'];

const DashHeader = () => {
  return (
    <Flex className={styles.dashHeader} direction='column' align='flex-end'>
      <Flex className={styles.header}>
        <Link>
          <BiSearch size={25} />
        </Link>
        <Link>
          <AiFillBell size={25} />
        </Link>
        <Link>
          <BsGear size={25} />
        </Link>
        <Avatar name='Scalibacon' src='https://github.com/Scalibacon.png' />
      </Flex>

      <Flex alignSelf='flex-start' align={'center'} justify={'flex-start'} gap='3rem'>
        <Heading>Dashboard</Heading>
        <Select placeholder='Select a country'>
          {countries.map( country => (
            <option value={country} key={country}>{ country }</option>
          ))}
        </Select>
      </Flex>
    </Flex>
  )
}

export default DashHeader;