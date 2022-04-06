import {Box, Container, Flex, useBreakpointValue} from "@chakra-ui/react";
import {Sidebar} from "@/components/modules/Sidebar/Sidebar";
import {Navbar} from "@/components/modules/Navbar/Navbar";

const Layout = ({ children }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <Flex
      as="section"
      direction={{ base: 'column', lg: 'row' }}
      bg="bg-canvas"
      overflowY="auto"
    >
      {isDesktop ? <Sidebar /> : <Navbar />}
      <Box bg="bg-surface" pt={{ base: '0', lg: '3' }} flex="1">
        <Box as='main' bg="bg-canvas" borderTopLeftRadius={{ base: 'none', lg: '2rem' }} height="full">
          {children}
        </Box>
      </Box>
    </Flex>
  )
}

export default Layout