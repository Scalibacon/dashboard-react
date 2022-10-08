import { VStack, Heading, Divider, Text, List, ListIcon, ListItem, Link } from '@chakra-ui/react'
import { AiFillHome, AiOutlineMail } from 'react-icons/ai';
import { FaBox } from 'react-icons/fa';
import { BsGraphUp, BsFillTagFill, BsBriefcaseFill } from 'react-icons/bs';
import { ImParagraphLeft } from 'react-icons/im';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { IoMdPeople } from 'react-icons/io';
import { FaStore, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/SideNavbar.module.scss';

const SideNavbar = () => {
  return (
    <VStack
      w={220}
      bg={'#272c4a'}
      p={'1rem 1rem'}
      color={'rgb(240,240,240)'}
      alignItems='flex-start'
      className={styles.sideNavbar}
    >
      <Heading 
        fontSize={'clamp(1rem, 2vw, 1.6rem)'} 
        alignSelf="center"
      >
        Scali<span className={styles.alternativeColor}>Dash</span>
      </Heading>
      <Divider opacity={'0.3'} />

      <Text className={styles.listTitle}>
        MAIN
      </Text>

      <List spacing={5}>
        <ListItem>
          <Link>
            <ListIcon as={AiFillHome} />
            Dashboard
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={FaBox} />
            Orders
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={BsGraphUp} />
            Analytics
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={ImParagraphLeft} />
            Categories
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={BsFillTagFill} />
            Products
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={TbShoppingCartDiscount} />
            Discounts
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={BsBriefcaseFill} />
            Employees
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={IoMdPeople} />
            Customers
          </Link>
        </ListItem>
      </List>

      <Text className={styles.listTitle}>
        SALES CHANNELS
      </Text>

      <List spacing={5}>
        <ListItem>
          <Link>
            <ListIcon as={FaStore} />
            Online Store
            <FaExternalLinkAlt size={13} className={styles.externalLink}/>
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <ListIcon as={AiOutlineMail} />
            Marketing
            <FaExternalLinkAlt size={13} className={styles.externalLink}/>
          </Link>
        </ListItem>
      </List>
    </VStack>
  )
}

export default SideNavbar;