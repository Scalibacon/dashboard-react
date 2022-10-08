import { VStack, Heading, Divider, Text } from '@chakra-ui/react'

const SideNavbar = () => {
  return (
    <VStack w={220} bg={'#272c4a'} p={'1rem 1rem'} color={'rgb(240,240,240)'} alignItems='flex-start'>
      <Heading fontSize={'clamp(1rem, 2vw, 1.6rem)'} alignSelf="center">Dashzada</Heading>
      <Divider opacity={'0.3'}/>

      <Text marginTop="3rem !important" fontSize='0.75rem' fontWeight={800} color='rgba(255,255,255,0.5)'>MAIN</Text>
    </VStack>
  )
}

export default SideNavbar;